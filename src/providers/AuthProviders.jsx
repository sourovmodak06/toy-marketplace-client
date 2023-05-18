import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate = (displayName,photoURL) => {
        return updateProfile(auth.currentUser, {displayName,photoURL})
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }


    const googleProvider = new GoogleAuthProvider();
    const googleCreateUser = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        } 
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        signIn,
        googleCreateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;