import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div id="main">
        <button id="click" onClick={handleClick}>Click me</button>
        {/* 👇️ show elements on click */}
      {isShown && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </div>
  );
}


export default App;
