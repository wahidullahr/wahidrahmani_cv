"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Configuration for the 3D graph
const NODE_COUNT = 40;
const CONNECTION_DISTANCE = 2.5;
const GRAPH_RADIUS = 4;

function Graph() {
  const groupRef = useRef<THREE.Group>(null);

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
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  const emeraldColor = new THREE.Color("#10b981");

  return (
    <group ref={groupRef}>
      {/* Render Nodes */}
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.08, 16, 16]}>
          <meshBasicMaterial color={emeraldColor} />
        </Sphere>
      ))}
      {/* Render Connections */}
      {connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color={emeraldColor}
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
}

export const NeuralNetwork3D = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Graph />
        {/* Allow user interaction */}
        <OrbitControls enableZoom={false} autoRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

