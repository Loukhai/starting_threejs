// import three js
import * as THREE from "three";
// import other addons
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();


