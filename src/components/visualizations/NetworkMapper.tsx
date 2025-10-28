import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Line } from "@react-three/drei";
import * as THREE from "three";

// Generate network topology
const generateNetworkData = () => {
  const layers = [
    { radius: 3, nodeCount: 12, color: "#a855f7" },
    { radius: 2, nodeCount: 8, color: "#8b5cf6" },
    { radius: 1.5, nodeCount: 6, color: "#06b6d4" },
  ];

  const nodes: Array<{ position: [number, number, number]; color: string; layer: number }> = [];
  const connections: Array<[number, number]> = [];

  layers.forEach((layer, layerIndex) => {
    for (let i = 0; i < layer.nodeCount; i++) {
      const angle = (i / layer.nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * layer.radius;
      const z = Math.sin(angle) * layer.radius;
      const y = layerIndex * 1.5 - 1.5;
      
      nodes.push({
        position: [x, y, z],
        color: layer.color,
        layer: layerIndex,
      });
    }
  });

  // Create connections between layers
  let nodeIndex = 0;
  for (let layer = 0; layer < layers.length - 1; layer++) {
    const currentLayerStart = nodeIndex;
    const nextLayerStart = currentLayerStart + layers[layer].nodeCount;
    
    for (let i = 0; i < layers[layer].nodeCount; i++) {
      const connectionsPerNode = Math.min(3, layers[layer + 1].nodeCount);
      for (let j = 0; j < connectionsPerNode; j++) {
        const targetNode = nextLayerStart + Math.floor(Math.random() * layers[layer + 1].nodeCount);
        connections.push([currentLayerStart + i, targetNode]);
      }
    }
    nodeIndex = nextLayerStart;
  }

  return { nodes, connections };
};

const NetworkNodes = ({ nodes }: { nodes: Array<{ position: [number, number, number]; color: string }> }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const NetworkConnections = ({ 
  nodes, 
  connections 
}: { 
  nodes: Array<{ position: [number, number, number]; color: string }>;
  connections: Array<[number, number]>;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {connections.map((connection, i) => {
        const start = nodes[connection[0]].position;
        const end = nodes[connection[1]].position;
        
        return (
          <Line
            key={i}
            points={[start, end]}
            color="#6366f1"
            lineWidth={1}
            transparent
            opacity={0.3}
          />
        );
      })}
    </group>
  );
};

export const NetworkMapper = () => {
  const { nodes, connections } = useMemo(() => generateNetworkData(), []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden bg-background/50 border border-border shadow-2xl">
      <Canvas>
        <PerspectiveCamera makeDefault position={[6, 3, 6]} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          autoRotate
          autoRotateSpeed={1}
          minDistance={4}
          maxDistance={12}
        />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-5, 2, -5]} intensity={1} color="#06b6d4" />
        <spotLight position={[0, 8, 0]} intensity={0.5} color="#8b5cf6" angle={0.3} />
        
        <NetworkConnections nodes={nodes} connections={connections} />
        <NetworkNodes nodes={nodes} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur px-4 py-2 rounded-lg border border-border">
        <p className="text-sm font-semibold">Neural Pathway Mapper</p>
        <p className="text-xs text-muted-foreground">Interactive 3D network topology</p>
      </div>
    </div>
  );
};
