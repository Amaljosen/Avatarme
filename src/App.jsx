import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useState } from "react";

function App() {
  const [dance,setDance]=useState(false)
  return (
    <>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience dance={dance} setDance={setDance}/>
    </Canvas>


    <div className="absolute top-5 p-2 text-white">
    <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors duration-200" onClick={()=>setDance(true)}>
     Let's Dance
    </button>
    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors duration-200 ml-2" onClick={()=>setDance(false)}>
      Stop Dancing
    </button>
     </div>

    </> 
  
  );
}

export default App;
