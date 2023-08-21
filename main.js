import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// init renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// init scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0, 2, 7);

// orbit instance
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: "green" });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

function animation() {
  requestAnimationFrame(animation);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  // link the scene and camera
  renderer.render(scene, camera);
}
animation();
