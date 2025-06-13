import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// --- RENDERER AND SCENE SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// --- TEXTURE LOADER ---
const textureLoader = new THREE.TextureLoader();
const ballTexture = textureLoader.load('ball.png');

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 20, 15);
scene.add(directionalLight);

// --- PHYSICS WORLD SETUP ---
const physicsWorld = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0),
});

// --- MATERIALS ---
const ballMaterial = new THREE.MeshStandardMaterial({ map: ballTexture });
const physicsMaterial = new CANNON.Material('physics');
const contactMaterial = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, {
    friction: 0.1,
    restitution: 0.7,
});
physicsWorld.addContactMaterial(contactMaterial);

// --- OBJECTS TO UPDATE ---
const projectiles = [];

// --- GROUND ---
const groundY = -12;
const groundBody = new CANNON.Body({ type: CANNON.Body.STATIC, shape: new CANNON.Plane(), material: physicsMaterial });
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
groundBody.position.y = groundY;
physicsWorld.addBody(groundBody);

const groundMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 200),
    new THREE.MeshStandardMaterial({ color: 0xFFFDD0, transparent: true, opacity: 0.2 })
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.position.y = groundY;
scene.add(groundMesh);

// --- MAIN BOUNCING BALL (VISUAL ONLY) ---
let bouncingBall;
let bouncingBallVelocityY = 0;
// Correction 1: Slow down the bounce to be more realistic and less frantic.
const bouncingGravity = -0.008; 
const bounceInitialVelocity = 0.4;

function CreateTargetPoint() {
    const targetPoint = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    targetPoint.position.set(0, groundY + 5, -10);
    scene.add(targetPoint);
    return targetPoint;
}

function createBouncingBall(isFirstBall = true) {
    let tempX = 0;
    if(!isFirstBall)
        tempX = bouncingBall.position.x;
    bouncingBall = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), ballMaterial);
    bouncingBall.position.set(tempX, groundY + 1, 0);

    bouncingBallVelocityY = bounceInitialVelocity;
    scene.add(bouncingBall);
}

let bouncingBallXSpeed = 0.025;
let bouncingBallDirectionX = 1; // Math.random() < 0.5 ? 1 : -1; // 1 for right, -1 for left
const horizontalBounds = 10;

function animateBouncingBall() {
    if (!bouncingBall) return;
    bouncingBall.rotation.x -= 0.05;
    //bouncingBall.rotation.y -= 0.045;

    bouncingBall.position.x += bouncingBallXSpeed * bouncingBallDirectionX;
    if (bouncingBall.position.x > horizontalBounds || bouncingBall.position.x < -horizontalBounds) {
        bouncingBallDirectionX *= -1;
    }

    bouncingBall.position.y += bouncingBallVelocityY;
    bouncingBallVelocityY += bouncingGravity;
    if (bouncingBall.position.y <= groundY + 1) {
        bouncingBall.position.y = groundY + 1;
        bouncingBallVelocityY = bounceInitialVelocity;
    }
}

// --- GAME LOGIC ---
function launchBall() {
    if (!bouncingBall) return;

    // 1. The currently bouncing ball becomes the projectile.
    const projectileMesh = bouncingBall;
    const body = new CANNON.Body({
        mass: 5,
        shape: new CANNON.Sphere(1),
        position: new CANNON.Vec3().copy(projectileMesh.position),
        material: physicsMaterial,
    });
    physicsWorld.addBody(body);
    projectiles.push({ mesh: projectileMesh, body: body });

    // Correction 2: Launch towards a random point between -15 and +15 on the X-axis.
    //const randomX = (Math.random() - 0.5) * 30; // This creates a value from -15 to 15
    const targetPoint = new THREE.Vector3(projectileMesh.position.x, groundY + 5 , -10);

    // Calculate the direction from the ball's current position to the random target.
    const launchDirection = new THREE.Vector3();
    launchDirection.subVectors(targetPoint, projectileMesh.position).normalize();
    
    // Apply a consistent force in that calculated direction.
    const forceMagnitude = 70; // Increased magnitude to ensure it reaches a good distance
    const force = new CANNON.Vec3(
        launchDirection.x * forceMagnitude,
        launchDirection.y * forceMagnitude,
        launchDirection.z * forceMagnitude,
    );
     // Ensure a minimum upward force for a nice arc, overriding the calculated Y
    force.y = 40;

    body.applyImpulse(force, body.position);

    // Give the launched ball a realistic tumble.
    body.angularVelocity.set(
        -10,
        0,
        0
    );

    // 2. A new visual ball appears instantly at the start.
    createBouncingBall(false);
}

// --- EVENT LISTENERS ---
window.addEventListener('pointerdown', launchBall);
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- ANIMATION LOOP ---
const clock = new THREE.Clock();
const deactivationZ = -75;

function animate() {
    const deltaTime = clock.getDelta();
    physicsWorld.step(1/60, deltaTime, 3);

    animateBouncingBall();

    // Update and clean up launched projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const obj = projectiles[i];
        obj.mesh.position.copy(obj.body.position);
        obj.mesh.quaternion.copy(obj.body.quaternion);

        if (obj.mesh.position.z < deactivationZ || obj.mesh.position.y < -50) {
            scene.remove(obj.mesh);
            physicsWorld.removeBody(obj.body);
            projectiles.splice(i, 1);
        }
    }
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Initialize and start
createBouncingBall(true);
animate();
