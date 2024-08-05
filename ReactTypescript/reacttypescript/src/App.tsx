import React from 'react';
import './App.css';
// import Home from './components/Home';
// import Instructor from './components/Instructor';
// import InstructorList from './components/InstructorList';
// import Request from './components/Request';
// import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExemple from './components/ReducerExemple';
import ContextExemple from './components/ContextExemple';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExemple from './components/RefExemple';


function App() {

  const instructor = {
    firstName: 'Meral',
    lastName: 'Cihangirli',
  }

  const instructorList = [{
    firstName: 'A',
    lastName: 'Cihangirli',
  },
  {
    firstName: 'B',
    lastName: 'Cihangirli',
  }, {
    firstName: 'C',
    lastName: 'Cihangirli',
  }
  ]

  return (
    <div className="App">
      {/* <Home name="Meral Cihangirli" courseNumber={15} isThere={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
      <EventActions /> */}
      <LoginCheck />
      <ReducerExemple />
      <ThemeContextProvider> <ContextExemple /></ThemeContextProvider>
      <RefExemple />
    </div>
  );
}

export default App;
