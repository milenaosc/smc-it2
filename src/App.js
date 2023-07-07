import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div>
      <p>This will be a counter then a to-do app</p>
      <div>
        <div>Counter</div>
        <div>{counter}</div>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;
