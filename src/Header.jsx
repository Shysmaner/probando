import { signOutWithGoogle } from "./firebase/signOutWithGoogle";

export function Header() {
    return (
        <header>
            <button onClick={signOutWithGoogle}>Cerrar Sesión</button>
        </header>
    )
}