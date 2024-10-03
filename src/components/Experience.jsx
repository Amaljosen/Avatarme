import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = ({dance,setDance}) => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <Avatar dance={dance} setDance={setDance}/>
      </group>
     <ambientLight intensity={2}/>
    </>
  );
};
