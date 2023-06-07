import { useState } from "react";


const Counter = () => {
	const [counter, setCounter] =useState(0);

	return (
		<>
		<h1>{counter}</h1>
		<button onClick={()=>sumar(counter, setCounter)}>Sumar</button>
		<button onClick={()=>reset(counter, setCounter)}>Reset</button>
		<button onClick={()=>restar(counter,setCounter)}>Restar</button>
		</>
	)
};

const sumar = (counter, setCounter) =>{
	setCounter(counter + 1)
}
const restar = (counter, setCounter) =>{
	setCounter(counter - 1)
}
const reset = (counter, setCounter) =>{
	setCounter(0)
}


export default Counter;