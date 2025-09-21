"use client";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export default function RobotCat(props) {
  const group = useRef();
  // โหลดโมเดล (และอนิเมชันถ้ามีใน glTF)
  const { scene, animations } = useGLTF("/models/robot_cat.gltf");
  const { actions, names } = useAnimations(animations, group);

  // ถ้าไฟล์มี clip อนิเมชัน ให้เล่นอันแรก
  useEffect(() => {
    if (names?.length) actions[names[0]]?.play();
  }, [actions, names]);

  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      targetRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetY = targetRef.current.x * 0.4;
    const targetX = targetRef.current.y * 0.25;

    group.current.rotation.y = MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      delta * 5
    );
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      delta * 5
    );
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// ทำให้ Next.js โหลดล่วงหน้าได้
useGLTF.preload("/models/robot_cat.gltf");
