"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import RobotCatModel from "./robot_cat";
import { cn } from "@/lib/utils";

const RobotCat = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-full w-full", className)}>
      <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 2]} intensity={1.2} />
        <Environment preset="city" />
        <RobotCatModel position={[0, -0.55, 0]} scale={0.92} />
        <ContactShadows
          position={[0, -0.65, 0]}
          opacity={0.4}
          blur={2.5}
          far={4}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={[0, 0.35, 0]}
        />
      </Canvas>
    </div>
  );
};

export default RobotCat;
