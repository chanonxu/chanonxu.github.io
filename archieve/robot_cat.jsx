"use client";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Quaternion, Vector3 } from "three";

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
  const headRef = useRef();
  const baseQuaternion = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      targetRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const head = scene.getObjectByName("Head");
    if (head) {
      headRef.current = head;
      scene.rotation.y = -Math.PI / 2;
      head.rotation.order = "YXZ";
      baseQuaternion.current = head.quaternion.clone();
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (!headRef.current || !baseQuaternion.current) return;

    const yawOffset = targetRef.current.x * 0.35;
    const pitchOffset = targetRef.current.y * 0.2;

    const yawQuat = new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      yawOffset
    );
    const pitchQuat = new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      pitchOffset
    );

    const targetQuat = baseQuaternion.current
      .clone()
      .multiply(pitchQuat)
      .multiply(yawQuat);

    headRef.current.quaternion.slerp(
      targetQuat,
      MathUtils.clamp(delta * 5, 0, 1)
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// ทำให้ Next.js โหลดล่วงหน้าได้
useGLTF.preload("/models/robot_cat.gltf");
