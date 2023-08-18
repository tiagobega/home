/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 jackie.glb -t 
*/

import { useEffect } from "react";
import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ch29: THREE.SkinnedMesh;
    mixamorig1Hips: THREE.Bone;
  };
  materials: {
    Ch29_Body: THREE.MeshStandardMaterial;
  };
};

type AnimationResult = GLTF;

interface JackieModelProps {
  currentAnimation?: "IDLE" | "WALKING";
}

export function JackieModel({
  currentAnimation = "IDLE",
  ...props
}: JSX.IntrinsicElements["group"] & JackieModelProps) {
  const gltf = useGLTF("./models/jackie.glb") as GLTFResult;

  const { materials } = gltf;

  materials.Ch29_Body.depthWrite = true;

  console.log(currentAnimation);
  gltf.scene.traverse((e) => {
    e.castShadow = true;
  });

  return (
    <group {...props}>
      <primitive object={gltf.scene} />
      {gltf.scene && <AddAnimations scene={gltf.scene} />}
    </group>

    // <group {...props} dispose={null}>
    //   <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
    //     <primitive object={nodes.mixamorig1Hips} />
    //     <skinnedMesh
    //       geometry={nodes.Ch29.geometry}
    //       material={materials.Ch29_Body}
    //       skeleton={nodes.Ch29.skeleton}
    //     />
    //     {scene && <AddAnimations scene={scene} />}
    //   </group>
    // </group>
  );
}

interface AddAnimationProps {
  scene: THREE.Group;
}

const AddAnimations = ({ scene }: AddAnimationProps) => {
  const { animations } = useGLTF("./animations/idle.glb") as AnimationResult;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"]?.play();
  }, []);
  return null;
};

useGLTF.preload("./models/jackie.glb");
useGLTF.preload("./animations/idle.glb");

export default JackieModel;
