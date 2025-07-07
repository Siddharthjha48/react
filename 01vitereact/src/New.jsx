import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from 'react';
import './App.css';




const App =  () =>{
  let [counter,setCounter] = useState(15);

  const add = function addValue(){
    setCounter(counter+1);
  }
  const sub = function subValue(){
    setCounter(counter-1);

  }
  return (
    <>
    <h1>Hello {counter}</h1>
    <button onclick = {add}>Add value </button>
    <button onclick = {subtract}>Subtract value</button>
    </>

  )
}
export default New;
