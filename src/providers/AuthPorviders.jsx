import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthPorviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const [reload, setReload] = useState(null);

  const [loading, setLoding] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singinWithGoogle = () => {
    setLoding(true)
    return signInWithPopup(auth, googleProvider);
  };

  const singinWithGithub = () => {
    setLoding(true)
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggerUser) => {
      setUser(loggerUser);
      setLoding(false)
    });

    return () => {
      unsubscribe();
    };
  }, [reload]);

  const userProfileUpdate = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

 

  const authInfo = {
    user,
    loading,
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
