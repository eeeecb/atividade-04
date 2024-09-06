import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <ThirdComponent />
      </div>
    </>
  );
}

export default App;
