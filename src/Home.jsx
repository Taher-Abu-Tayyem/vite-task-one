import {useContext } from "react";
import Data from "./Context/Data.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    const {Field,color,level,theme} = useContext(Data);

  return (
    <div className={theme} >
        <h1 style={{ color: color }}>
                Home Page  
        </h1>
              <h1 style={{ color: color }}>My level is {Field}</h1>
              <h1 style={{ color: color }}>My level is { level}</h1>
              <button>
        <Link style={{backgroundColor:"red", color: color,padding:"5px" }} to="/">Go to APP </Link>
      </button>


    </div>
  )
}
