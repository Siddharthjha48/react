import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from 'react';
import Card from './components/card';
import './App.css';




const App =  () =>{
  let [counter,setCounter] = useState(15);
  

  return (
   <>
   
<Card props = "batlii" btnText ="5.0"/>
<Card props = "batliii2" btnText= "4.7"/>
<Card props = "batlii3" btnText= "4.5"/>
   </>

  )
}

export default App;






