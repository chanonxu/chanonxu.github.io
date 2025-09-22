import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, LoopRepeat } from "three";

useGLTF.preload("/models/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/models/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions["Experiment"];
    if (action) {
      action.reset().setLoop(LoopRepeat, Infinity).play();
    }
  }, [actions]);
  return (
    <group ref={group} scale={[1.6, 1.6, 1.6]} position={[1.2, -1.2, 0]}>
      <primitive object={scene} />
    </group>
  );
}
