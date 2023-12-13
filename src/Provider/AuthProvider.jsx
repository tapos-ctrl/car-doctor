import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseConfig/firebase.config";



export const AuthContext = createContext()



const AuthProvider = ({children}) => {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)




    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        signOut(auth)
    }



    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return unsubscribe
    },[])



    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.any
}

export default AuthProvider;