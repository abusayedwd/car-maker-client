import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, lazy, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext =  createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)
        const googleProvider = new GoogleAuthProvider();

        const createUser = (email,password) => {
                setLoading(true)
                return createUserWithEmailAndPassword(auth,email,password)
        }
        const signIn = (email, password) => {
                setLoading(true)
                return signInWithEmailAndPassword(auth, email, password)
        }
        const logOut = () => {
                setLoading(true)
               return signOut(auth)
        }

         const googleSignIn = () => {
                setLoading(true)
                return signInWithPopup(auth, googleProvider)
         }

        useEffect( () => {
                const unsibscribe = onAuthStateChanged(auth, currentUser => {
                            setUser(currentUser);
                            setLoading(false)
                            console.log('current users', currentUser)
                        if(currentUser && currentUser.email){
                           const userLogged = {
                                email: currentUser.email
                           }     
                            fetch('http://localhost:5000/jwt', {
                                method:'POST',
                                headers:{
                                  "content-type":'application/json'
                                },
                                body:JSON.stringify(userLogged)
                              })
                              .then(res => res.json())
                              .then(data => {
                                console.log('jwt respons',data)
      
                                localStorage.setItem('car-token', data.token)
                                 
                              })
                        }
                        else{
                                localStorage.removeItem('car-token');
                        }
                             
                        
                    })
                    return () => {
                            return unsibscribe() ;
                    }
            }, [])


        const authInfo = {
                user,
                loading,
                createUser,
                signIn,
                logOut,
                googleSignIn
        }
        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;