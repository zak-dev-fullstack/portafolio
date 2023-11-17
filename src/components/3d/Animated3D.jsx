import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './3d.css';

const Animated3D = () => {
  const mount = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const renderer = useRef(null);
  const stats = useRef(null);
  const pointLight = useRef(null);
  const pointLight2 = useRef(null);
  let initialized = false;

  useEffect(() => {
    const init = () => {
      if (initialized) return;

      camera.current = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
      camera.current.position.set(0, 10, 40);

      scene.current = new THREE.Scene();
      scene.current.add(new THREE.AmbientLight(0x111122, 3));

      function createLight(color) {
        const intensity = 200;
        const light = new THREE.PointLight(color, intensity, 20);
        light.castShadow = true;
        light.shadow.bias = -0.005;

        let geometry = new THREE.SphereGeometry(0.3, 12, 6);
        let material = new THREE.MeshBasicMaterial({ color: color });
        material.color.multiplyScalar(intensity);
        let sphere = new THREE.Mesh(geometry, material);
        light.add(sphere);

        const texture = new THREE.CanvasTexture(generateTexture());
        texture.magFilter = THREE.NearestFilter;
        texture.wrapT = THREE.RepeatWrapping;
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.set(1, 4.5);

        geometry = new THREE.SphereGeometry(2, 32, 8);
        material = new THREE.MeshPhongMaterial({
          side: THREE.DoubleSide,
          alphaMap: texture,
          alphaTest: 0.5,
        });

        sphere = new THREE.Mesh(geometry, material);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        light.add(sphere);

        return light;
      }

      pointLight.current = createLight(0x0088ff);
      scene.current.add(pointLight.current);

      pointLight2.current = createLight(0xff8888);
      scene.current.add(pointLight2.current);

      const geometry = new THREE.BoxGeometry(30, 30, 30);

      const material = new THREE.MeshPhongMaterial({
        color: 0xa0adaf,
        shininess: 10,
        specular: 0x111111,
        side: THREE.BackSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 10;
      mesh.receiveShadow = true;
      scene.current.add(mesh);

      renderer.current = new THREE.WebGLRenderer({ antialias: true });
      renderer.current.setPixelRatio(window.devicePixelRatio);
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      renderer.current.shadowMap.enabled = true;
      renderer.current.shadowMap.type = THREE.BasicShadowMap;
      mount.current.appendChild(renderer.current.domElement);

      const controls = new OrbitControls(camera.current, renderer.current.domElement);
      controls.target.set(0, 10, 0);
      controls.update();

      stats.current = new Stats();
      mount.current.appendChild(stats.current.dom);

      window.addEventListener('resize', onWindowResize);

      initialized = true;

      animate();
    };

    const onWindowResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };

    const generateTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2;
      canvas.height = 2;

      const context = canvas.getContext('2d');
      context.fillStyle = 'white';
      context.fillRect(0, 1, 2, 1);

      return canvas;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      let time = performance.now() * 0.001;

      pointLight.current.position.x = Math.sin(time * 0.6) * 9;
      pointLight.current.position.y = Math.sin(time * 0.7) * 9 + 6;
      pointLight.current.position.z = Math.sin(time * 0.8) * 9;

      pointLight.current.rotation.x = time;
      pointLight.current.rotation.z = time;

      time += 10000;

      pointLight2.current.position.x = Math.sin(time * 0.6) * 9;
      pointLight2.current.position.y = Math.sin(time * 0.7) * 9 + 6;
      pointLight2.current.position.z = Math.sin(time * 0.8) * 9;

      pointLight2.current.rotation.x = time;
      pointLight2.current.rotation.z = time;

      renderer.current.render(scene.current, camera.current);
      stats.current.update();
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mount} />;
};

export default Animated3D;
