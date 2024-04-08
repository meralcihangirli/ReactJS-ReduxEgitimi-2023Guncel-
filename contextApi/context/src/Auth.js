import { useContext } from "react";
import AuthContext from './context/auth-context';

function Auth() {
    const { status,login } = useContext(AuthContext)
    console.log(status)
    // const auth=useContext(AuthContext)
    // console.log(auth.status)
    return <div>
        <h1>Giriş Yaptın mı?</h1>
        {status ? <p>Evet</p> : <p>Hayır</p>}
        <button onClick={login}>Giriş Yap</button>
    </div>;
}

export default Auth;