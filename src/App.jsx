import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState("Task One")


  return (
         <div> 
          <button onClick={() => setCount("Task Two")}>{count}</button>
          <br />
          <button onClick={() => setCount("Task One")}>rest</button>
          
        </div>
    
  )
}

export default App
