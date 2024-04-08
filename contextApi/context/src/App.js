
import './App.css';
import AuthContext from './context/auth-context'
import Auth from './Auth'
import { useState } from 'react';

function App() {

  const [authStatus, setAuthStatus] = useState(false)
  const loginAuth=()=>{
    setAuthStatus(true);
  }

  return (
   <AuthContext.Provider value={{status:authStatus,login:loginAuth}}>
    <Auth></Auth>
    </AuthContext.Provider>
  );
}

export default App;
