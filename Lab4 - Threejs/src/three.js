import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";


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

const dire = new THREE.DirectionalLight(0xffffff, 1);
dire.position.x = 4;
dire.position.z = 1;
dire.position.y = -4;
scene.add(dire);

//load texture
const textureLoader = new THREE.TextureLoader();
const sky = textureLoader.load("/textures/sky.jpg");
const brick = textureLoader.load("/textures/brick.avif");
const tile = textureLoader.load("/textures/dakpan.jpg");
const chickenSkin = textureLoader.load("/models/chicken/textures/material_normal.png");

//gltf loader
const gltfLoader = new GLTFLoader();

//sky
const sphereGeometry = new THREE.SphereGeometry(50, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
sphereMaterial.map = sky;
sphereMaterial.side = THREE.BackSide;
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

//create house
//create back wall out of planes
const wallGeometry = new THREE.BoxGeometry(1.1, 1.3, 0.1);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
wallMaterial.map = brick;
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.z = -0.05;
scene.add(wall);

//create roof out of plane
const wall2Geometry = new THREE.BoxGeometry(1.1, 1.1, 0.1);
const wall2Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
wall2Material.map = brick;
const wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
wall2.rotation.x = Math.PI / 2;
wall2.position.set(0, 0.7, 0.45);
scene.add(wall2);

//create floor out of plane
const wall3Geometry = new THREE.BoxGeometry(1.1, 1.1, 0.1);
const wall3Material = new THREE.MeshBasicMaterial({ color: 0x49251e });
const wall3 = new THREE.Mesh(wall3Geometry, wall3Material);
wall3.rotation.x = Math.PI / 2;
wall3.position.set(0, -0.7, 0.45);
scene.add(wall3);

//create right wall out of plane
const wall4Geometry = new THREE.BoxGeometry(1, 1.3, 0.1);
const wall4Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
wall4Material.map = brick;
const wall4 = new THREE.Mesh(wall4Geometry, wall4Material);
wall4.rotation.y = Math.PI / 2;
wall4.position.set(0.5, 0, 0.5);
scene.add(wall4);

//create left wall out of plane
const wall5Geometry = new THREE.BoxGeometry(1, 1.3, 0.1);
const wall5Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
wall5Material.map = brick;
const wall5 = new THREE.Mesh(wall5Geometry, wall5Material);
wall5.rotation.y = Math.PI / 2;
wall5.position.set(-0.5, 0, 0.5);
scene.add(wall5);

//doorframe kindof (+ name?)
const doorGeometry = new THREE.BoxGeometry(0.9, 0.7, 0.1);
const doorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
doorMaterial.map = brick;
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(0, 0.3, 0.95);
scene.add(door);

const sideWallGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.1);
const sideWallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
sideWallMaterial.map = brick;
const sideWall = new THREE.Mesh(sideWallGeometry, sideWallMaterial);
sideWall.position.set(-0.30, -0.35, 0.95);
scene.add(sideWall);

const sideWall2Geometry = new THREE.BoxGeometry(0.3, 0.6, 0.1);
const sideWall2Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
sideWall2Material.map = brick;
const sideWall2 = new THREE.Mesh(sideWall2Geometry, sideWall2Material);
sideWall2.position.set(0.3, -0.35, 0.95);
scene.add(sideWall2);

//actual roof
const roofGeometry = new THREE.ConeGeometry(1, 0.5, 4);
const roofMaterial = new THREE.MeshBasicMaterial({ color: 0x1B2231 });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roofMaterial.map = tile;
roof.position.set(0, 1, 0.45);
roof.rotation.y = Math.PI / 4;
scene.add(roof);

//card
const card = new THREE.PlaneGeometry(0.8, 0.3);
const cardMaterial = new THREE.MeshBasicMaterial({ color: 0xfafafa });
const cardMesh = new THREE.Mesh(card, cardMaterial);
cardMesh.position.set(0, 0.25, 1.001);
scene.add(cardMesh);

//add text
const loader = new FontLoader();
loader.load("/fonts/coolvetica.json", function (font) {
    const textGeometry = new TextGeometry("Griet's crib", {
        font: font,
        size: 0.1,
        height: 0.02,
        curveSegments: 7,
        bevelEnabled: false,
    });
    var mesh = new THREE.Mesh(textGeometry, [
      new THREE.MeshPhongMaterial({ color: 0x303030 }),
      new THREE.MeshPhongMaterial({ color: 0x808080 })
    ]);
    scene.add(mesh);
    mesh.position.set(-0.3, 0.2, 1)
});

//load chicken gltf
let chicken;
const addChicken = (x, y, z) => {
gltfLoader.load("/models/chicken/scene.gltf", (gltf) => {
  chicken = gltf.scene;  
  chicken.scale.set(4, 4, 4);
  chicken.position.set(x, y, z);
  scene.add(chicken);
});
};
//load duck
let duck;
const addDuck = (x, y, z) => {
gltfLoader.load("/models/duck/scene.gltf", (gltf) => {
  duck = gltf.scene;  
  duck.position.set(x, y, z);
  duck.scale.set(4, 4, 4);
  scene.add(duck);
});
}; 

let pizza;
gltfLoader.load("/models/pizza/scene.gltf", (gltf) => {
  pizza = gltf.scene;
  pizza.position.set(-0.7, -1, 0.2);
  pizza.scale.set(6, 6, 6);
  scene.add(pizza);
});

// looping chicken
for(let i = 0; i < 20; i++) {
  let sign = Math.random() < 0.5 ? -1 : 1;
  const x = Math.random() * 30 * sign;

  sign = Math.random() < 0.5 ? -1 : 1;
  const y = Math.random() * 30 * sign;

  sign = Math.random() < 0.5 ? -1 : 1;
  const z = Math.random() * 30 * sign;
  addChicken(x,y,z);
};

// looping duck in other random places
for(let i = 0; i < 20; i++) {
  let sign = Math.random() < 0.5 ? -1 : 1;
  const x = Math.random() * 20 * sign;

  sign = Math.random() < 0.5 ? -1 : 1;
  const y = Math.random() * 20 * sign;

  sign = Math.random() < 0.5 ? -1 : 1;
  const z = Math.random() * 20 * sign;
  addDuck(x,y,z);
};

camera.position.x = 10;
camera.position.z = 15
camera.position.y = 10;

function animate() {
  requestAnimationFrame(animate);
camera.position.x -= 0.03;
camera.position.z -= 0.02;
camera.position.y -= 0.03;
if(camera.position.x < 0) {
  camera.position.x = 0;
  camera.position.y = 0;
  if(camera.position.z < 4) {
  camera.position.z = 4;}
}
camera.lookAt(scene.position);

renderer.render(scene, camera);
}

animate();
