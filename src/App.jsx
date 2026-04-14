import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [Task, setTask] = useState("Task One")
  const [count, setCount] = useState(0)


 // 👇 نخزن الثيم من localStorage أول ما يفتح الموقع
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // 👇 كل ما يتغير الثيم نخزنه
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
         <div className={theme}> 
          <button onClick={() => setTask("Task Two")}>{Task}</button>
          <br />
          <button onClick={() => setTask("Task One")}>rest Task</button>
                    <br />
          <button onClick={() => setCount(count + 1)}>{count}+</button>
                    <br />
            <button onClick={() => setCount(count - 1)}>{count}-</button>
                    <br />  
          <button onClick={() => setCount(0)}>rest counter</button>
                    <br />
          <button onClick={() => setTheme("light")}>light</button>
          <button onClick={() => setTheme("dark")}>dark</button>
          
        </div>
    
  )
}

export default App
