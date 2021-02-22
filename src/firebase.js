import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'showme-f171b.firebaseapp.com',
  projectId: 'showme-f171b',
  storageBucket: 'showme-f171b.appspot.com',
  messagingSenderId: '827032492503',
  appId: '1:827032492503:web:d9d121a7c243220c6a1392',
  measurementId: 'G-MEHPJL67EC',
});

export const auth = firebase.auth();
export const db = firebase.firestore();
