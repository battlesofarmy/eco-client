"use client";

import { createContext, useEffect, useState } from "react"
import auth from "./FireBase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import api from "./axiosCongif";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
      }

    // Check if user logged in or not
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    //         setLoading(false);
    //         setUser(currentUser);
    //         console.log("obsurb: ", currentUser);
    //     });

    //     return()=>{
    //         unSubscribe();
    //     }
    // },[])
    // Check user Current State (log or out)


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};
      setLoading(false); 
      console.log("obsurb: ", currentUser);
  
      // if(currentUser){
      //   api.post('/jwt', loggedUser, {withCredentials: true})
      //   .then(res=> console.log('response taken: ', res.data))
      //   .then(err=>console.log(err))
      // }

    }); 
  
    return ()=>{
      unSubscribe();
    }
  
  },[user])
  

    const authInfo = {user, createUser, signInUser, logOut, loading};
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
