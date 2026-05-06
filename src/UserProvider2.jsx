import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser)=>{
            setUser(firebaseUser);
        });

        return ()=> unsubscribe();
    }, []);


    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}