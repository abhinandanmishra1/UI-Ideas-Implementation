import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
// scene is like container

const camera = new THREE.PerspectiveCamera(
	100,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(50); // on z axis
renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(5, 3, 6, 20);

const material = new THREE.MeshStandardMaterial({
	color: 0xff6347,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
pointLight.position.set(20, 0, 10);
const cubeTexture = new THREE.TextureLoader().load("abhi.jpg");
const cube = new THREE.Mesh(
	new THREE.BoxGeometry(3, 3, 3),
	new THREE.MeshBasicMaterial({ map: cubeTexture })
);
scene.add(cube);
function addStar() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial({
		color: 0xffffff,
	});

	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array(3)
		.fill()
		.map(() => THREE.MathUtils.randFloatSpread(100));

	star.position.set(x, y, z);
	scene.add(star);
}

Array(200).fill().forEach(addStar);
// stars are added

// now add a texture background

// MOON creation

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const moonNormalTexture = new THREE.TextureLoader("earth_normal.jpg");
const moon = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshStandardMaterial({
		map: moonTexture,
		normalMap: moonNormalTexture,
	})
);

scene.add(moon);
moon.position.z = 15;
moon.position.setX(-10);
cube.position.y = -30;
cube.position.x = 5;
// move camera when user scrolls
function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	moon.rotation.x += 0.05;
	moon.rotation.y += 0.0075;
	moon.rotation.z += 0.05;

	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	camera.position.x = t * -0.0002;
	camera.position.y = t * -0.01;
	camera.position.z = t * -0.0002;
}

document.body.onscroll = moveCamera;

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
	requestAnimationFrame(animate);
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;
	controls.update();
	renderer.render(scene, camera);
}

animate();
