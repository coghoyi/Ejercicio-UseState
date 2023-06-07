import { useState } from "react";


const App = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={sumar}>Sumar</button> 
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>Restar</button>
     
    </div>
  );
};

export default App;

