import { useEffect } from 'react';
import * as THREE from 'three';
import './3d.css';

export default function Text3d() {
  useEffect(() => {
    const loader = new THREE.FontLoader();

    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
      const geometry = new THREE.TubeGeometry('ZaK DeV', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Crear un material y una malla para la geometría
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Ejemplo de material verde
      const textMesh = new THREE.Mesh(geometry, material);

      // Configurar la escena
      const scene = new THREE.Scene();
      scene.add(textMesh);

      // Configurar la cámara
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Configurar el renderizador
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Animación
      const animate = function () {
        requestAnimationFrame(animate);

        // Puedes agregar aquí cualquier lógica de animación necesaria

        renderer.render(scene, camera);
      };

      animate();

      // Limpiar la escena al desmontar el componente
      return () => {
        document.body.removeChild(renderer.domElement);
      };
    });
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (<Text3d />);
}
