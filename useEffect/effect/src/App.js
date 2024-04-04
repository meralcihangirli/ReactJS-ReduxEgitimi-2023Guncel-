import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [meral, setMeral] = useState(0);
  const [merve, setMerve] = useState(0);
useEffect(() => {
  console.log('ilk kez render edildiginde çalışır daha da çalışmaz');
},[]);

useEffect(() => {
  console.log('Herzaman çalışır');
});

useEffect(() => {
  console.log('ilk kez render edildiginde çalışır ve meral degerinde bir degisiklik oldugunda çalışır ');
},[meral]);

useEffect(() => {
  console.log('ilk kez render edildiginde çalışır ve merve degerinde bir degisiklik oldugunda çalışır ');
},[merve]);

useEffect(() => {
  console.log('ilk kez render edildiginde çalışır, meral veya merve degerinde bir degisiklik oldugunda çalışır ');
},[meral,merve]);

  return (
    <div className="App">
      <div className='first-div'>
        <button onClick={() => setMeral(meral + 1)}>Meral ++</button>
        <div>Meral:{meral}</div>
      </div>
      <div>
        <button onClick={() => setMerve(merve + 1)}>Merve ++</button>
        <div>Merve:{merve}</div>
      </div>
    </div>
  );
}

export default App;
