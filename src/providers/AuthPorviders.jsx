import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthPorviders = ({ children }) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggerUser => {
        console.log('logged in user inside auth', loggerUser)
        setUser(loggerUser)
    })

    return () => {
        unsubscribe()
    }

  } , [])




  const authInfo = {
    user,
    createUser,
    signIn, 
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorviders;
