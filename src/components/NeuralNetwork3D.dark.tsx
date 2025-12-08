"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Configuration for the 3D graph - Dark Mode Only
const NODE_COUNT = 40;
const CONNECTION_DISTANCE = 2.5;
const GRAPH_RADIUS = 4;

// Dark Mode Configuration - Optimized for dark backgrounds
const DARK_MODE_CONFIG = {
  nodeColor: "#34d399", // Brighter emerald for better visibility on dark background
  connectionColor: "#6ee7b7", // Even lighter emerald for connections
  nodeSize: 0.12,
  connectionOpacity: 0.6,
  connectionWidth: 2,
  rotationSpeed: 0.12,
  ambientLightIntensity: 0.8,
};

function GraphDark() {
  const groupRef = useRef<THREE.Group>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Generate random node positions in a sphere
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      temp.push(
        new THREE.Vector3(
          GRAPH_RADIUS * Math.cos(theta) * Math.sin(phi),
          GRAPH_RADIUS * Math.sin(theta) * Math.sin(phi),
          GRAPH_RADIUS * Math.cos(phi)
        )
      );
    }
    return temp;
  }, []);

  // 2. Generate connections between nearby nodes
  const connections = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONNECTION_DISTANCE) {
          temp.push([nodes[i], nodes[j]] as [THREE.Vector3, THREE.Vector3]);
        }
      }
    }
    return temp;
  }, [nodes]);

  // 3. Animate rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * DARK_MODE_CONFIG.rotationSpeed;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  const nodeColor = new THREE.Color(DARK_MODE_CONFIG.nodeColor);
  const connectionColor = new THREE.Color(DARK_MODE_CONFIG.connectionColor);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <group ref={groupRef}>
      {/* Render Nodes */}
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[DARK_MODE_CONFIG.nodeSize, 16, 16]}>
          <meshBasicMaterial color={nodeColor} />
        </Sphere>
      ))}
      {/* Render Connections */}
      {connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color={connectionColor}
          lineWidth={DARK_MODE_CONFIG.connectionWidth}
          transparent
          opacity={DARK_MODE_CONFIG.connectionOpacity}
        />
      ))}
    </group>
  );
}

export const NeuralNetwork3DDark = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className} />;
  }

  return (
    <div className={`${className} mask-linear-fade`}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }} 
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
      >
        <ambientLight intensity={DARK_MODE_CONFIG.ambientLightIntensity} />
        <GraphDark />
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={0.6} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
    </div>
  );
};

