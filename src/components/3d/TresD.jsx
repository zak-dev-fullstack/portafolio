import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './3d.css';

const TresD = () => {
  const containerRef = useRef();

  useEffect(() => {
    let container, camera, scene, renderer;
    const diamonds = [];

    const init = () => {
      container = containerRef.current;

      // Dimensiones del contenedor
      const width = window.innerWidth, height = window.innerHeight;

      // Inicialización
      camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
      camera.position.z = 15;

      scene = new THREE.Scene();

      // Crear el sol (una esfera amarilla)
      const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);

      // Crear diamantes luminosos alrededor del sol
      const diamondColors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff];
      for (let i = 0; i < 4; i++) {
        const diamondGeometry = new THREE.DodecahedronGeometry(2, 0);
        const diamondMaterial = new THREE.MeshBasicMaterial({ color: diamondColors[i], emissive: diamondColors[i], emissiveIntensity: 0.5 });
        const diamond = new THREE.Mesh(diamondGeometry, diamondMaterial);
        diamonds.push(diamond);
        scene.add(diamond);

        // Posicionar diamantes en una órbita circular
        const angle = (i / 4) * Math.PI * 2;
        const radius = 7 + i * 2; // Incrementar el radio para que sean más grandes y estén separados
        diamond.position.x = Math.cos(angle) * radius;
        diamond.position.z = Math.sin(angle) * radius;
      }

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0); // Fondo transparente

      // Agregar el renderizador al contenedor específico dentro del componente
      container.appendChild(renderer.domElement);

      // Animación
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotar diamantes alrededor del sol
        diamonds.forEach((diamond, index) => {
          const speed = 0.01 * (index + 1);
          diamond.rotation.y += speed;
        });

        renderer.render(scene, camera);
      };

      // Configurar la animación
      animate();

      // Limpiar la escena al desmontar el componente
      return () => {
        container.removeChild(renderer.domElement);
      };
    };

    init();
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return <div id="container3d" ref={containerRef} />;
};

export default TresD;
