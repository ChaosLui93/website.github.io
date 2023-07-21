import { OrbitControls, Box } from "@react-three/drei";
import Building from "./Office";


export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Building />
    </>
  );
};
