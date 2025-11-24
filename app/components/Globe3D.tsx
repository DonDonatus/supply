'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Auto-rotate the globe
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0025;
    }
  });

  // Create location markers
  const markers = [
    { lat: 40, lon: -100 },  // North America
    { lat: 50, lon: 10 },    // Europe
    { lat: 25, lon: 55 },    // Middle East
    { lat: -10, lon: 20 },   // Africa
    { lat: -15, lon: -60 },  // South America
    { lat: -25, lon: -50 },  // South America
    { lat: -5, lon: 35 },    // East Africa
    { lat: 15, lon: -90 },   // Central America
  ];

  // Convert lat/lon to 3D coordinates
  const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    
    return new THREE.Vector3(x, y, z);
  };

  // Create procedural Earth-like texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Ocean base
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGradient.addColorStop(0, '#1e3a5f');
    oceanGradient.addColorStop(0.5, '#2563a8');
    oceanGradient.addColorStop(1, '#1e3a5f');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some land masses (simplified continents)
    ctx.fillStyle = '#4a7c59';
    
    // North America
    ctx.beginPath();
    ctx.ellipse(400, 300, 200, 250, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // South America
    ctx.beginPath();
    ctx.ellipse(500, 650, 150, 200, 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Europe/Africa
    ctx.beginPath();
    ctx.ellipse(1100, 350, 180, 200, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1150, 600, 200, 250, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Asia
    ctx.beginPath();
    ctx.ellipse(1500, 300, 300, 220, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Add texture variation
    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      ctx.fillStyle = `rgba(${100 + Math.random() * 100}, ${150 + Math.random() * 50}, ${100 + Math.random() * 50}, 0.3)`;
      ctx.fillRect(x, y, size, size);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create bump map for terrain
  const bumpMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add noise for terrain
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const brightness = Math.random() * 255;
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.fillRect(x, y, 2, 2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <group>
      {/* Main Globe with realistic materials */}
      <Sphere ref={meshRef} args={[2, 128, 128]}>
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specular={new THREE.Color('#4a90e2')}
          shininess={15}
          emissive={new THREE.Color('#0a1929')}
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 64, 64]}>
        <meshBasicMaterial
          color="#4a90e2"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Clouds layer */}
      <Sphere ref={cloudsRef} args={[2.02, 64, 64]}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </Sphere>

      {/* Grid lines - more subtle */}
      <Sphere args={[2.03, 32, 32]}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Location markers with enhanced glow */}
      {markers.map((marker, i) => {
        const pos = latLonToVector3(marker.lat, marker.lon, 2.08);
        return (
          <group key={i}>
            {/* Main marker */}
            <mesh position={[pos.x, pos.y, pos.z]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#f68921" />
            </mesh>
            {/* Glow ring */}
            <mesh position={[pos.x, pos.y, pos.z]}>
              <ringGeometry args={[0.08, 0.12, 32]} />
              <meshBasicMaterial
                color="#f68921"
                transparent
                opacity={0.5}
                side={THREE.DoubleSide}
              />
            </mesh>
            {/* Pulse effect */}
            <mesh position={[pos.x, pos.y, pos.z]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial
                color="#f68921"
                transparent
                opacity={0.2}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced lighting for realism */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, -3, -3]} intensity={0.4} color="#4a90e2" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        
        <GlobeMesh />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
