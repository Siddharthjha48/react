import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-screen h-screen transition-colors duration-1200" style = {{backgroundColor: color}}>
   <button onClick={() => setColor("red")}
    style ={{backgroundColor : "red"}} className=" text-white px-4 py-2 rounded  ml-10 mt-140">
  Red
</button>
   <button onClick={() => setColor("blue")}
   style ={{backgroundColor : "blue"}} className=" text-white px-4 py-2 rounded  ml-10 mt-140">
 Blue
</button>
   <button 
   onClick={() => setColor("green")}
   style ={{backgroundColor : "green"}} className=" text-white px-4 py-2 rounded  ml-10 mt-140">
  Green
</button>
   <button onClick={() => setColor("yellow")}
    style ={{backgroundColor : "yellow"}} className=" text-black px-4 py-2 rounded  ml-10 mt-140">
  Yellow
</button>
   <button onClick={() => setColor("grey")}
   style ={{backgroundColor : "grey"}} className=" text-white px-4 py-2 rounded  ml-10 mt-140">
  grey
</button>
</div>

   
      </>
  )
}

export default App
