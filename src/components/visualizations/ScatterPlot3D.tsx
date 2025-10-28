import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

// Different use case scenarios that rotate
const useCaseScenarios = [
  {
    name: "Sentiment Analysis",
    clusters: [
      { center: [2, 2, 2], color: "#a855f7", size: 0.15, label: "Positive" },
      { center: [-2, -1, 1], color: "#06b6d4", size: 0.12, label: "Negative" },
      { center: [1, -2, -2], color: "#ec4899", size: 0.13, label: "Neutral" },
      { center: [-1, 2, -1], color: "#8b5cf6", size: 0.14, label: "Mixed" },
    ]
  },
  {
    name: "Document Classification",
    clusters: [
      { center: [2, 2, 2], color: "#a855f7", size: 0.15, label: "Technical" },
      { center: [-2, -1, 1], color: "#06b6d4", size: 0.12, label: "Marketing" },
      { center: [1, -2, -2], color: "#ec4899", size: 0.13, label: "Legal" },
      { center: [-1, 2, -1], color: "#8b5cf6", size: 0.14, label: "Creative" },
    ]
  },
  {
    name: "Topic Modeling",
    clusters: [
      { center: [2, 2, 2], color: "#a855f7", size: 0.15, label: "Science" },
      { center: [-2, -1, 1], color: "#06b6d4", size: 0.12, label: "Business" },
      { center: [1, -2, -2], color: "#ec4899", size: 0.13, label: "Arts" },
      { center: [-1, 2, -1], color: "#8b5cf6", size: 0.14, label: "Technology" },
    ]
  },
  {
    name: "Intent Detection",
    clusters: [
      { center: [2, 2, 2], color: "#a855f7", size: 0.15, label: "Question" },
      { center: [-2, -1, 1], color: "#06b6d4", size: 0.12, label: "Command" },
      { center: [1, -2, -2], color: "#ec4899", size: 0.13, label: "Statement" },
      { center: [-1, 2, -1], color: "#8b5cf6", size: 0.14, label: "Feedback" },
    ]
  }
];

// Generate random data points with clusters
const generateEmbeddingData = (count: number, clusters: any[]) => {
  const data = [];

  for (let i = 0; i < count; i++) {
    const cluster = clusters[Math.floor(Math.random() * clusters.length)];
    const point = {
      position: [
        cluster.center[0] + (Math.random() - 0.5) * 2,
        cluster.center[1] + (Math.random() - 0.5) * 2,
        cluster.center[2] + (Math.random() - 0.5) * 2,
      ],
      color: cluster.color,
      size: cluster.size,
    };
    data.push(point);
  }
  return data;
};

const Points = ({ scenario }: { scenario: typeof useCaseScenarios[0] }) => {
  const meshRef = useRef<THREE.Group>(null);
  const data = useMemo(() => generateEmbeddingData(200, scenario.clusters), [scenario]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {data.map((point, i) => (
        <mesh key={i} position={point.position as [number, number, number]}>
          <sphereGeometry args={[point.size, 16, 16]} />
          <meshStandardMaterial
            color={point.color}
            emissive={point.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const ClusterLabels = ({ scenario }: { scenario: typeof useCaseScenarios[0] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {scenario.clusters.map((cluster, i) => (
        <Text
          key={i}
          position={cluster.center as [number, number, number]}
          fontSize={0.3}
          color={cluster.color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {cluster.label}
        </Text>
      ))}
    </group>
  );
};

const Grid = () => {
  return (
    <gridHelper args={[10, 10, "#262638", "#1a1a2e"]} />
  );
};

export const ScatterPlot3D = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const currentScenario = useCaseScenarios[scenarioIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setScenarioIndex((prev) => (prev + 1) % useCaseScenarios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden bg-background/50 border border-border shadow-2xl">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
        />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Points scenario={currentScenario} />
        <ClusterLabels scenario={currentScenario} />
        <Grid />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur px-4 py-2 rounded-lg border border-border">
        <p className="text-sm font-semibold">{currentScenario.name}</p>
        <p className="text-xs text-muted-foreground">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};
