import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Color, Group, LoopRepeat, Mesh, MeshStandardMaterial } from "three";

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

  useEffect(() => {
    const accent = new Color("#9fc2ff");
    const shadow = new Color("#d9ffc6");

    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;

        const tintMaterial = (material: MeshStandardMaterial) => {
          if (material.color) {
            material.color.copy(accent);
          }
          if (material.emissive) {
            material.emissive.copy(shadow);
          }
        };

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => {
            if (material instanceof MeshStandardMaterial) {
              tintMaterial(material);
            }
          });
        } else if (mesh.material instanceof MeshStandardMaterial) {
          tintMaterial(mesh.material);
        }
      }
    });
  }, [scene]);
  return (
    <group ref={group} scale={[1.6, 1.6, 1.6]} position={[1.2, -1.2, 0]}>
      <primitive object={scene} />
    </group>
  );
}
