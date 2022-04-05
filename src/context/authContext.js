import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('there is not auth Provider')
    return context
}

export function AuthProvider({ children }) {

    const signup = (email, passwpord) =>
        createUserWithEmailAndPassword(auth, email, passwpord)


    return (
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    )
}