import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { MdNightlight } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";


import {useContext } from "react";
import Data from "./Context/Data.jsx";

/* 
const initialScore = {
  Field: "React",
  level: "mid",
  count: 0,
  color: localStorage.getItem("color") || "red",
  theme: localStorage.getItem("theme") || "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Changecountplus":
      return { ...state, count: action.newcount };
    case "Changecount":
      return { ...state, count: action.newcount };
    case "Reset":
      return { ...state, count: 0 };
    case "ChangeField":
      return { ...state, Field: action.newField };
    case "CHANGE_LEVEL":
      return { ...state, level: action.newlevel };
    case "CHANGE_THEME":
      return { ...state, theme: action.newTheme, color: action.newcolor };

    default:
      return state;
  }
}; */
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


/*   const [Data, dispatch] = useReducer(reducer, initialScore);
 */

/*   useEffect(() => {
    localStorage.setItem("theme", Data.theme);
    localStorage.setItem("color", Data.color);
  }, [Data.theme, Data.color]);
 */
  const {Field,level,count,color,theme,changeField,changeLevel,changeCount,changeCountplus,changeTheme,changeReset} = useContext(Data);
  return (
    <div className={theme}>
      <h1 style={{ color: color }}>My level is{Field}</h1>
      <br />
      <button
        onClick={() => {changeField()}}
      >
        Change Field
      </button>
      <br />
      <button
        onClick={() =>{
changeCountplus()       }}
      >
        Counter { count }+
      </button>
      <br />
      { <button
        onClick={() =>{
changeLevel()       }}    >
        My level is { level}
      </button>
 }
      <br />
     {  <button
        onClick={() =>{
          changeCount()}
        }
      >
        Counter { count}-
      </button> } 
      <br />
    {  <button onClick={() =>changeReset()}>
        rest counter
      </button> }

      <br />
      {<button
        onClick={() =>
          changeTheme()
        }
      >
        { theme === "light" ? <MdNightlight /> : <FaRegSun />}
      </button> }
      <br />
      <button>
        <Link to="/Home">Go to Home </Link>
      </button>
    </div>
  );
}

export default App;
