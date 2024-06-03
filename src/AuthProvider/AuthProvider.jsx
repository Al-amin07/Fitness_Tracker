import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
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

import auth from "../Firebase/Firebase.config";
import axios from "axios";
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosCommon = useAxiosCommon();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, img_url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img_url,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const fun = (x, y) => {
    setUserName(x);
    setUserImage(y);
    // console.log(x, y);
  };

  const saveUser = async (currentUser) => {
    console.log(currentUser);
    const newUser = {
      email: currentUser?.email,
      name:  currentUser?.displayName,
      image:  currentUser?.photoURL ,
      role: "member",
      status: "verified",
      time: Date.now(),
    };
    console.log(newUser);
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/user`,
      newUser
    );
    console.log(data);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,async (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        // saveUser(currentUser);
        const email = currentUser?.email;
        console.log(email);
        const { data } = await axiosCommon.post('/jwt', {email})
        // console.log(data);
        if(data.token){
          localStorage.setItem('access-token', data.token)
        }
        // console.log('CUrrent User', currentUser);
      }else{
        localStorage.removeItem('access-token')
      }
    });

    return () => {
      return unSubscribe();
    };
  }, [user, axiosCommon]);

  const authInfo = {
    user,
    loading,
    setLoading,
    register,
    login,
    logOut,
    googleLogin,
    githubLogin,
    updateUserProfile,
    setUserName,
    setUserImage,
    fun,
    saveUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
