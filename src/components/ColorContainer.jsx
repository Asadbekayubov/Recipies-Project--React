import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function ColorContainer() {
  const colors = ["#610C9F", "#F99417", "#BEADFA", "#CD5C08"];
  const [mode, setMode] = useState(true);
  return (
    <div className="my-5 align-elements flex justify-between">
      <button onClick={() => setMode(!mode)} className="text-4xl">
        {mode && <FaMoon />}
        {!mode && <FaSun />}
      </button>
      <div className="colors flex gap-2">
        {colors.map((color) => {
          return (
            <span key={color} style={{backgroundColor:color}}
              className={`w-5 h-5 color rounded-full bg-[#610C9F] cursor-pointer`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorContainer;
