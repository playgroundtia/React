import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyBjCAY7DQKPfXOT23g7pkCmA0UlBjR5nUQ',
  authDomain: 'comments-tmsystem.firebaseapp.com',
  databaseURL: 'https://comments-tmsystem.firebaseio.com',
  projectId: 'comments-tmsystem',
  storageBucket: '',
  messagingSenderId: '854997129102',
  appId: '1:854997129102:web:b2c15d5f6646b0d6'
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
export const auth = firebase.auth()
