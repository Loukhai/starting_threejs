// import three js
import * as THREE from "three";
// check support
import WebGL from "three/addons/capabilities/WebGL.js";

// Init scene & camera and renderer (canvas)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
// { antialias: true }
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// build the cube
const geometry = new THREE.BoxGeometry(3, 5, 2);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const cube = new THREE.Mesh(geometry, material);
camera.position.z = 10;
// the rendering function is animate

// adding the border
const borderMaterial = new THREE.MeshBasicMaterial({ color: 0xff0062 });
const borderMesh = new THREE.Mesh(geometry, borderMaterial);
borderMesh.scale.set(1.1, 1.1, 1.1);

// add the mesh to scene
scene.add(cube);
scene.add(borderMesh);

// render the scene & camera w/ animation loop or render method
function animate() {
  // loop
  requestAnimationFrame(animate);

  // animate the cube
  cube.rotation.x += 0.009;
  cube.rotation.y += 0.01;
  borderMesh.rotation.x += 0.009;
  borderMesh.rotation.y += 0.01;

  // rendering in html
  renderer.render(scene, camera);
}

// support WebGL to start animation
if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
