import { useState } from "react";
import Classcomponent from "./classbasedcomponents";
import Functioncomponent from "./functionbasedcomponents";
import "./style.css";

function App() {
  const [funcClick, setfuncClick] = useState(false);

  const handleFuncClick = () => {
    setfuncClick(!funcClick);
  };

  const [compoClick, setcompoClick] = useState(false);

  const handlecompoClick = () => {
    setcompoClick(!compoClick);
  };

  return (
    <>
      <div className="body">
        <h2 className="mainheading">
          Styling using Functional and Class Component
        </h2>
        <h1>{funcClick}</h1>
        <div className="btn-wrapper">
          <button onClick={handleFuncClick} className="btn1">
            To see styling in functional component
          </button>
          <button onClick={handlecompoClick} className="btn2">
            {" "}
            To see styling in class component
          </button>
        </div>
        {funcClick && <Functioncomponent />}
        {compoClick && <Classcomponent />}
      </div>
    </>
  );
}

export default App;
