import { useEffect, useReducer, useState } from "react";

import "./App.css";
import { MdNightlight } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";

const initialScore = 
  {
    Field: "React",
    level: "mid",
    count: 0,
    theme: "light",
    color: "red",
  }
;

const reducer = (state, action) => {
  switch (action.type) {
    case "Changecountplus":
      return { ...state, count: action.newcount  };
    case "Changecount":
      return { ...state, count: action.newcount };
    case "Reset":
      return { ...state, count: 0 };
    case "ChangeField":
      return { ...state, Field: action.newField };
    case "CHANGE_LEVEL":
      return { ...state, level: action.newlevel };
    case "CHANGE_THEME":
      return { ...state, theme: action.newTheme ,color: action.newcolor};
    
    default:
      return state;
  }
};
function App() {
  /*
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
 */

  const [Data, dispatch] = useReducer(reducer, initialScore);

  return (
    <div className={Data.theme} >
      <h1 style={{ color: Data.color }}>My level is{Data.Field}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "ChangeField", newField: "Anagular" });
        }}
      >
        Change Field
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({ type: "Changecountplus", newcount: Data.count + 1 })
        }
      >
        {" "}
        Counter {Data.count}+
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: "CHANGE_LEVEL", newlevel: "High" })}
      >
        My level is {Data.level}
      </button>

      <br />
      <button
        onClick={() =>
          dispatch({ type: "Changecount", newcount: Data.count - 1 })
        }
      >
      
        Counter {Data.count}-
      </button>
      <br />
      <button onClick={() => dispatch({ type: "Reset", newcount: 0 })}>
        rest counter
      </button>
      <br />
      
      <button
        onClick={() => dispatch({ type: "CHANGE_THEME", newTheme: "dark" ,newcolor:"White" })}
      >
        dark
      </button>
      <br />

    
    </div>
  );
}

export default App;
