import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if(count == 0) {
      return 0
    }
    else{

      setCount(count - 1)
    }
  }
  function reset(){
    setCount(0);
  }


  return (
    <>
    <div className = "container">
   <div >
  <h1>Count: {count}</h1>
  <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
</div>
</div>


      
    </>
  )
}

export default App
