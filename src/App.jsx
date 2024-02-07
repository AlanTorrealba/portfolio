import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, ButtonGroup } from "@nextui-org/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-700">
      <div className="flex flex-row">
        <Button className="" radius="full" color="primary">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
