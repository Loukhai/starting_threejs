import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// init renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// init scene w/ cam
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-10, 20, 30);

// helper axes
const axesHelper = new THREE.AxesHelper(7);
scene.add(axesHelper);

// orbit instance
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({
  color: "green",
  // wireframe: false,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// plane
const planGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: "#ffffff",
  side: THREE.DoubleSide,
  // wireframe: true,
});
const plane = new THREE.Mesh(planGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

// grid helper
const gridHelper = new THREE.GridHelper(30, 10);
scene.add(gridHelper);

// sphere
const sphereGeo = new THREE.SphereGeometry(5);
const sphereMat = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
scene.add(sphere);

// animation function
function animation() {
  requestAnimationFrame(animation);

  // animate the box
  // box.rotation.x -= 0.01;
  // box.rotation.y -= 0.01;

  // sphere
  // sphere.position.x += 0.001;
  // sphere.position.z += 0.01;

  // link the scene and camera
  renderer.render(scene, camera);
}
animation();
