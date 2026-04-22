
import { createContext, useReducer } from "react";


const Data= createContext();


const initialData = { 
  Field: "React",
  level: "mid",
  count: 0,
  color: "blue",
  theme: "light", };
const reducer = (state, action) => {
  switch (action.type) {
    case "Changecountplus":
      return { ...state, count: action.newcount };
    case "Changecount":
      return { ...state, count: action.newcount };
    case "Reset":
      return { ...state, count: 0 };
    case "CHANGE_FIELD":
      return { ...state, Field: action.newValue };
    case "CHANGE_LEVEL":
      return { ...state, level: action.newLevel };
    case "CHANGE_THEME":
      return { ...state, theme: action.newTheme, color: action.newcolor };

    default:
      return state;
  }
};

export function DataProvider({ children }) {
const [firstState, dispatch] = useReducer(reducer, initialData);


const changeField = () => {
dispatch({ type: "CHANGE_FIELD", newValue: "Angular" });
};
const changeLevel = () => {
dispatch({ type: "CHANGE_LEVEL", newLevel: "Senior" });
};
 const changeCountplus = () => {
dispatch({ type: "Changecountplus", newcount:  firstState.count + 1 });
};
 const changeCount = () => {
dispatch({ type: "Changecount", newcount: firstState.count - 1 });
};
 const changeReset = () => {
dispatch({ type: "Reset", newcount: firstState.count });
};
const changeTheme = () => {
dispatch({   type: "CHANGE_THEME",
            newTheme:  firstState.theme === "light" ? "dark" : "light",
            newcolor:  firstState.color === "blue" ? "white" : "blue", });
};  
return (
<Data.Provider value={{ ...firstState, changeField,changeLevel,changeCountplus,changeReset,changeCount,changeTheme}}>
{children}
</Data.Provider>
);
}
export default Data;
