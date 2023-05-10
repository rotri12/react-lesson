import { useEffect, useState } from "react";
import Hasil from "./components/Hasil";

function App() {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [total, setTotal] = useState(0);

  const operatorOptions = ["+", "-", "/", "*"];

  useEffect(() => {
    hitungTotal();
  }, [angka1, angka2, operator]);

  const hitungTotal = () => {
    const tempAngka1 = parseInt(angka1);
    const tempAngka2 = parseInt(angka2);
    let tempTotal = 0;
    if (operator === "+") {
      tempTotal = tempAngka1 + tempAngka2;
    } else if (operator === "-") {
      tempTotal = tempAngka1 - tempAngka2;
    } else if (operator === "/") {
      tempTotal = tempAngka1 / tempAngka2;
    } else if (operator === "*") {
      tempTotal = tempAngka1 * tempAngka2;
    }
    setTotal(tempTotal);
  };

  return (
    <div className="App">
      <input
        type={"number"}
        value={angka1}
        onChange={(e) => setAngka1(e.target.value)}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        {operatorOptions.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type={"number"}
        value={angka2}
        onChange={(e) => setAngka2(e.target.value)}
      />
      <Hasil var1={angka1} var2={angka2} operand={operator} tot={total} />
    </div>
  );
}

export default App;
