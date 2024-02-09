import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, ButtonGroup } from "@nextui-org/react";
import NavBar2 from "./components/NavBar2";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="m-10 p-10 flex flex-col content-center text-center h-full w-full">
      <NavBar2 />
      <Inicio />
      <Skills />
    </div>
  );
}

export default App;
