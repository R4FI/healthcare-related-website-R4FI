import { useEffect, useState } from "react"
import initAuth from "../Components/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
initAuth();
const useFirebase = ()=>{
    const [user,SetUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   const signInUsingGoogle = () =>{

            signInWithPopup(auth,googleProvider)
            .then (result => {
                // console.log(result.user);
                SetUser(result.user);
            })
   }
   const logOut = () => {
       signOut (auth)
       .then(()=>{
           SetUser({});
       })
   } 


   useEffect( ()=>{
       onAuthStateChanged(auth,user =>{
           if(user){
                SetUser(user);
           }
           else{

           }
       })
   },
   [])
   return {
       user,
       logOut,
       signInUsingGoogle
   }
}
export default useFirebase;