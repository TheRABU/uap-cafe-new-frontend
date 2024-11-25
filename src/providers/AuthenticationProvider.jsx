import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Store user in localStorage
  const persistUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      persistUser(result.user);
      setLoading(false);
    });
  };

  // sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      setUser(null);
      persistUser(null);
      setLoading(false);
    });
  };

  // update profile
  const handleUpdateProfile = (user, name) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: user.photoURL,
    })
      .then(() => {
        const updatedUser = { ...user, displayName: name };
        setUser(updatedUser);
        persistUser(updatedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      persistUser(result.user);
      setLoading(false);
    });
  };

  // github login
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
      persistUser(result.user);
      setLoading(false);
    });
  };

  // Listen for auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      persistUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    handleUpdateProfile,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
