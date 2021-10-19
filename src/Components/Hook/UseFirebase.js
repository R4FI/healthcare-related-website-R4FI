import { initializeAuth } from "@firebase/auth";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeAuth();
const useFirebase = () =>{

    const [user ,setUser] = useState({});
    const [error ,setError] = useState('');
     const auth = getAuth()
        const googleProvider = GoogleAuthProvider();
    const signGoogle = () =>{
                signInWithPopup(auth,googleProvider)
                .then(result=> {
                    setUser(result.user)
                })
                .catch (error=>{
                    setError(error.message)
                })
    }

    return {
        user,
        error,
        signGoogle
    }
}
export default useFirebase;