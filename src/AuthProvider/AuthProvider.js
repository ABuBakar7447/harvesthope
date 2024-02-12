

import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import axios from "axios";
import { app } from "@/firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //loading state should be true

    


    const createuser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logout = () =>{
        // setLoading(true); //logout donot need to setloading state
        return signOut(auth);
    }

    const updateUserProfile = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
          
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // setLoading(false)
            if(currentUser){
                axios.post('https://hope-harvest-server.vercel.app/jwt',{email:currentUser.email})
                .then(data =>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            

        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createuser,
        signIn,
        logout,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;