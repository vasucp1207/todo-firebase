import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const  firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCSpK4J-zhXdhlVfwOjTNSUJieouPC0iTg",
        authDomain: "todo-app-25b75.firebaseapp.com",
        projectId: "todo-app-25b75",
        storageBucket: "todo-app-25b75.appspot.com",
        messagingSenderId: "413471356431",
        appId: "1:413471356431:web:5a83853eed1ccc2ec0d57a",
        measurementId: "G-RFCZJ91H2W"
})

const db = firebaseApp.firestore();
export default db