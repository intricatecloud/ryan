import React from 'react';
import './App.css';
// import './firebaseui-styling.global.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';

// var firebase = require("firebase/app");

// require("firebase/auth");
// require("firebase/firestore");




import firebase from "firebase/app"

import "firebase/auth";
import "firebase/firestore";

// function App() {
//   return (
//     <section className="section">
//       <div className="container has-text-centered">
//         <h1 className="title"> Twitter for wentaoxu</h1>
//         <div className="subtitle"> A place for wentaoxu to login </div>
//         <button> sign in </button>
//       </div>
//     </section>
//   )
// }

// export default App;



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQIujFnXcw1Yir_8eF46EY14lvNn0C4I",
  authDomain: "ryan-68783.firebaseapp.com",
  databaseURL: "https://ryan-68783-default-rtdb.firebaseio.com",
  projectId: "ryan-68783",
  storageBucket: "ryan-68783.appspot.com",
  messagingSenderId: "561334277695",
  appId: "1:561334277695:web:af0f15bad34ae7d20e8a8a",
  measurementId: "G-PN6HCNTX7N"
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


class SignInScreen extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default SignInScreen.render();