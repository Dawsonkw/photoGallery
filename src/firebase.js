// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB_o_bIM8WW28YWp-_1QUB-DBUJgE1mLBA",

  authDomain: "photogallery-62eb0.firebaseapp.com",

  projectId: "photogallery-62eb0",

  storageBucket: "photogallery-62eb0.appspot.com",

  messagingSenderId: "265866028874",

  appId: "1:265866028874:web:b3e393b3857d08b3d143b3",

  measurementId: "G-N1QY9SL2DD"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export { app, storage }