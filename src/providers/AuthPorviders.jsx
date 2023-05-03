import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();




const AuthPorviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [reload, setReload] = useState(null)


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  const singinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const singinWithGithub =  () => {
    return signInWithPopup(auth, githubProvider)
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

  const userProfileUpdate = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl 
    })
  }




  const authInfo = {
    user,
    createUser,
    signIn,
    singinWithGoogle, 
    singinWithGithub,
    logOut,
    userProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorviders;
