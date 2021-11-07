import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello</h2>
      {!changedText && <Output>false</Output>}
      {changedText && <Output>true</Output>}
      <button onClick={changeTextHandler}>Change</button>
    </div>
  );
};

export default Greeting;
