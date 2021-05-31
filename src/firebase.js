/* eslint-disable import/no-extraneous-dependencies */
import 'firebase/firestore'
import 'firebase/auth'

import Firebase from 'firebase/app'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

const firebase = Firebase.initializeApp(config)

export { firebase }
