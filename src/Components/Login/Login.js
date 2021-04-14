import React from 'react';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        
        const  googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then((result) => {

            const { displayName, email } = result.user;
            const signedInUser = { name:displayName, email:email }
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode );

        });

    }

    

    return (
        <div className="container">
            <Header></Header>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;