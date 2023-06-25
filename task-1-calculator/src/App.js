import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(display);
        setResult(evalResult);
        setDisplay(evalResult);
      } catch (error) {
        setResult("Error");
        toast("Error")
        setDisplay("");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="app">
      <ToastContainer />
      <div className="calculator">
        <div className="display">
          <input type="text" class="top-start" value={display} readOnly />
          <div className="result">{result}</div>
        </div>

        <table>
          <tr>
            <td className="lightblue" onClick={() => handleClick("(")}>(</td>
            <td className="lightblue" onClick={() => handleClick(")")}>)</td>
            <td className="lightblue" onClick={() => handleClick("=")}>ans</td>
            <td className="lightblue" onClick={() => handleClick("C")}>del</td>
            <td className="lightblue" onClick={() => handleClick("C")}>clear</td>


          </tr>
          <tr>
            <td onClick={() => handleClick("7")}>7</td>
            <td onClick={() => handleClick("8")}>8</td>
            <td onClick={() => handleClick("9")}>9</td>
            <td className="lightblue" onClick={() => handleClick("%")}>%</td>
            <td className="lightblue" onClick={() => handleClick("✓")}>✓</td>



          </tr>
          <tr>
            <td onClick={() => handleClick("4")}>4</td>
            <td onClick={() => handleClick("5")}>5</td>
            <td onClick={() => handleClick("6")}>6</td>
            <td className="lightblue" onClick={() => handleClick("*")}>*</td>
            <td className="lightblue" onClick={() => handleClick("/")}>/</td>

          </tr>
          <tr>
            <td onClick={() => handleClick("1")}>1</td>
            <td onClick={() => handleClick("2")}>2</td>
            <td onClick={() => handleClick("3")}>3</td>
            <td className="lightblue" onClick={() => handleClick("+")}>
              +
            </td>
            <td className="lightblue" onClick={() => handleClick("-")}>-</td>
          </tr>
          <tr>
            <td className="lightblue" onClick={() => handleClick(".")}>.</td>
            <td onClick={() => handleClick("0")}>0</td>

            <td className="lightblue">+_</td>
            <td id="equalTo" colSpan={2} onClick={() => handleClick("=")}>
              ENTER
            </td>

          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
