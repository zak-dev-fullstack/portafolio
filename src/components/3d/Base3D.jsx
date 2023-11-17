import  { useEffect } from "react";
import * as THREE from "three";
import "./3d.css";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default function Base3D() {
  useEffect(() => {
    // Crear el renderizador, la escena y la cámara
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      74,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const orbit = new OrbitControls(camera, renderer.domElement)

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    camera.position.set(0, 0, 5);
    orbit.update()
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // Animación
    function animate(time) {
      box.rotation.x = time / 1000;
      box.rotation.y = time / 1000;
      renderer.render(scene, camera);
    }

    // Establecer la animación en el ciclo de vida del componente
    renderer.setAnimationLoop(animate);

    // Limpiar cuando el componente se desmonte
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  return null; // No renderizar nada directamente en el componente
}
///////////////////////

