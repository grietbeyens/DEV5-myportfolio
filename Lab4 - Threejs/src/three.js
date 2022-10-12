import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

//light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const dire = new THREE.DirectionalLight(0xffffff, 2);
dire.position.x = 1;
dire.position.z = 1;
dire.position.y = 1;
scene.add(dire);

//create house
//create back wall out of planes
const wallGeometry = new THREE.PlaneGeometry(1, 1.3);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
scene.add(wall);

//create roof out of plane
const wall2Geometry = new THREE.PlaneGeometry(1, 1);
const wall2Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
wall2.rotation.x = Math.PI / 2;
wall2.position.y = 0.65;
wall2.position.z = 0.5;
scene.add(wall2);

//create floor out of plane
const wall3Geometry = new THREE.PlaneGeometry(1, 1);
const wall3Material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const wall3 = new THREE.Mesh(wall3Geometry, wall3Material);
wall3.rotation.x = Math.PI / 2;
wall3.position.y = -0.65;
wall3.position.z = 0.5;
scene.add(wall3);

//create right wall out of plane
const wall4Geometry = new THREE.PlaneGeometry(1, 1.3);
const wall4Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const wall4 = new THREE.Mesh(wall4Geometry, wall4Material);
wall4.rotation.y = Math.PI / 2;
wall4.position.x = 0.5;
wall4.position.y = 0;
wall4.position.z = 0.5;
scene.add(wall4);

//create left wall out of plane
const wall5Geometry = new THREE.PlaneGeometry(1, 1.3);
const wall5Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const wall5 = new THREE.Mesh(wall5Geometry, wall5Material);
wall5.rotation.y = Math.PI / 2;
wall5.position.x = -0.5;
wall5.position.y = 0;
wall5.position.z = 0.5;
scene.add(wall5);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
}

animate();
