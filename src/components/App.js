import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import { useState } from "react";
import Calculate from "../globals/calculate";
function App() {
  const [current, setCurrent] = useState("0");
  const [operand, setOperand] = useState("");
  const [number, setNumber] = useState("start");
  function handleClick(value, type) {
    if (current === "0" && type === "number") {
      setCurrent(`${value}`);
    } else if (operand === "" && type === "number") {
      setCurrent(current + `${value}`);
    } else if (type === "operator") {
      setOperand(value);
    } else if (operand !== "" && number !== "start" && type === "number") {
      setNumber(number + `${value}`);
    } else if (operand !== "" && type === "number") {
      setNumber(`${value}`);
    } else if (type === "enter" && operand !== "") {
      setCurrent(Calculate(current, operand, number));
      setOperand("");
      setNumber("start");
    } else if (type === "clear" && value === "Clear") {
      setNumber("0");
    } else if (type === "clear" && value === "All Clear") {
      setCurrent("0");
      setOperand("");
      setNumber("start");
    }
    console.log(number);
  }
  return (
    <div className="wrapper">
      <Display result={number === "start" ? current : number} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
