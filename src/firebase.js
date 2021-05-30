/* eslint-disable import/no-extraneous-dependencies */
import 'firebase/firestore'
import 'firebase/auth'

import Firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyB-tEoDgC5wUXSHgS8R0AIjFbzjaMg98vA',
  authDomain: 'todo-list-8e7f1.firebaseapp.com',
  projectId: 'todo-list-8e7f1',
  storageBucket: 'todo-list-8e7f1.appspot.com',
  messagingSenderId: '460816870258',
  appId: '1:460816870258:web:4661ff6f36e830af7f0beb',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
