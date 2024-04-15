
import './App.css';
import React, { useEffect, useReducer } from 'react';
import Calculate from './Calculate';

export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialValue)

  useEffect(()=>{
    console.log('render oldu')
  },[count])
  return (
    <div className="App">
      <NumberContext.Provider value={{count:count,dispatch:dispatch}}>
      <Calculate/>
      </NumberContext.Provider>
     
      </div>
      );
}

      export default App;
