import { useState } from "react";
import Button from "../button/Button";


const Counter = () => {
	const [counter, setCounter] =useState(0);

	return (
		<>
		<h1>{counter}</h1>
		<Button text='sumar' action={()=>sumar(counter, setCounter)}/>
		<Button text='restar' action={()=>restar(counter, setCounter)}/>
		<Button text='reset' action={()=>reset(setCounter)}/>
		</>
	)
};

const sumar = (counter, setCounter) =>{
	setCounter(counter + 1)
}
const restar = (counter, setCounter) =>{
	setCounter(counter - 1)
}
const reset = (setCounter) =>{
	setCounter(0)
}


export default Counter;