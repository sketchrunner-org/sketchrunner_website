import firebase from 'firebase';
import {browserHistory} from 'react-router';

const config = {
  apiKey: "AIzaSyB6UQS2-k79PYnLK8GBAaS0m_h49Hpskow",
  authDomain: "runner-aba33.firebaseapp.com",
  databaseURL: "https://runner-aba33.firebaseio.com",
  storageBucket: "runner-aba33.appspot.com",
  messagingSenderId: "261787940022"
}
firebase.initializeApp(config)
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops ❌', error))
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
    .then(console.log('User signed up ✅'))
    .then(browserHistory.push('/')) // TODO: weird, goBack() works but push('/path') doesn't – probably something to do with react-router-redux & the middlewares 🤔
    .then(history.go(0)) // 👈 soft reload the page with the added path
    // .then(window.location = "http://www.google.com") // <-- yeah obviously that works but that's a noNO
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
