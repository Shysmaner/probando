import { loginWithGoogle } from "./firebase/loginWithGoogle";

export function LogIn(){
    return (
        <div>
            <button onClick={loginWithGoogle}>Iniciar Sesión</button>
        </div>
    )
}