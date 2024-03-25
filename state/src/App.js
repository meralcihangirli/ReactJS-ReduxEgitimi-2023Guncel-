
import './App.css';
import {useState} from 'react';

function App() {
  const [value, setValue] = useState(0) 

const handleClick=()=>{
 // console.log('Java')
 setValue(value+1);
};

  return (
    <div className="App">
  <button onClick={handleClick} >Kurs Ekle</button>
    <div>Kurs Sayısı:{value}</div>
    </div>
  );
}

export default App;
