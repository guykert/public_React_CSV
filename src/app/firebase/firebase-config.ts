// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, updateDoc, deleteDoc  } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfgPXs-8oDmOAYmXPu_H6nxxihGOuCzNw",
    authDomain: "curso-react-f5364.firebaseapp.com",
    databaseURL: "https://curso-react-f5364-default-rtdb.firebaseio.com",
    projectId: "curso-react-f5364",
    storageBucket: "curso-react-f5364.appspot.com",
    messagingSenderId: "802945952762",
    appId: "1:802945952762:web:5e801aeab7b4d710be5243"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    app,
    doc, //Referencia a documento en Firestore
    setDoc, // Setea Datos en la base de Firestore,
    collection,
    updateDoc ,
    deleteDoc,
}

