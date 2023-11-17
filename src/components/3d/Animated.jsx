import { useEffect } from 'react';
import * as THREE from 'three';
import './3d.css'

export default function Animated() {
  useEffect(() => {
    // Configuración de Three.js
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    // Crear un material LineBasicMaterial azul
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    // Agregar la línea a la escena
    scene.add(line);

    // Animación
    function animate() {
      requestAnimationFrame(animate);
      // Puedes agregar aquí cualquier lógica de animación necesaria

      renderer.render(scene, camera);
    }

    animate();

    // Limpiar la escena al desmontar el componente
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return <div>Animated</div>;
}
