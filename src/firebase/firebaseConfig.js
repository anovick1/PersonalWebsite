// firebaseConfig.js
// Contains the config details of firebase, this should NOT be committed to your repo
// if the repo is public
// You could optionally use .env file to store these data

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD87_9hBqiA4oqr3_2QtPb6bFLxeWD3rG8',
  authDomain: 'personal-website-ca966.firebaseapp.com',
  projectId: 'personal-website-ca966',
  storageBucket: 'personal-website-ca966.appspot.com',
  messagingSenderId: '397205230782',
  appId: '1:397205230782:web:1e6a65210825ed6c2bbaef',
  measurementId: 'G-BTXPGQMFP8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
