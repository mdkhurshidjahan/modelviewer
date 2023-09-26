import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

function initModelViewer(modelId, modelSrc, cameraPosition) {
    const modelViewer = document.getElementById(modelId);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    modelViewer.shadowRoot.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load(modelSrc, (gltf) => {
        scene.add(gltf.scene);
    });

    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

// Initialize car model
initModelViewer('carModel', 'car.glb', { x: 0, y: 0, z: 5 });

// Initialize glasses model
initModelViewer('glassesModel', 'glasses.glb', { x: 0, y: 0, z: 5 });
