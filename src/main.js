import '../stylesheets/style.css'
import * as THREE from 'three';

const scene = new THREE.Scene;

const fieldOfView = 60;
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(20);


const geometry = new THREE.IcosahedronGeometry(5, 0);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 });
const icosahedron = new THREE.Mesh( geometry, material );

const pointLightRight = new THREE.PointLight(0xffffff);
const pointLightLeft = new THREE.PointLight(0xffffff);

pointLightRight.position.set(20, 0, 10);
pointLightLeft.position.set(-20, 0, 10);

scene.add(pointLightRight);
scene.add(pointLightLeft);
scene.add(icosahedron);
// renderer.render( scene, camera );

function animate() {
    requestAnimationFrame( animate );
    icosahedron.rotation.x += 0.05;
    icosahedron.rotation.y += 0.02;
    renderer.render( scene, camera );
}

animate();
