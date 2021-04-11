// var firebaseConfig = {
//   apiKey: "AIzaSyDwQIujFnXcw1Yir_8eF46EY14lvNn0C4I",
//   authDomain: "ryan-68783.firebaseapp.com",
//   projectId: "ryan-68783",
//   storageBucket: "ryan-68783.appspot.com",
//   messagingSenderId: "561334277695",
//   appId: "1:561334277695:web:efe6f1321d6873d40e8a8a",
//   measurementId: "G-4YY5MLLXS8"
// };
// firebase.initializeApp(firebaseConfig);

// class SignInScreen extends React.Component {

//   // The component's Local state.
//   state = {
//     isSignedIn: false // Local signed-in state.
//   };

//   // Configure FirebaseUI.
//   uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       // firebase.auth.FacebookAuthProvider.PROVIDER_ID
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: () => false
//     }
//   };

//   // Listen to the Firebase Auth state and set the local state.
//   componentDidMount() {
//     this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
//       (user) => this.setState({ isSignedIn: !!user })
//     );
//   }

//   // Make sure we un-register Firebase observers when the component unmounts.
//   componentWillUnmount() {
//     this.unregisterAuthObserver();
//   }

//   render() {
//     if (!this.state.isSignedIn) {
//       return (
//         <div>
//           <h1> MyApp </h1>
//           <p>Please sign-in:</p>
//           <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h1> MyApp </h1>
//         <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
//         <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
//       </div>
//     );
//   }
// }

// export default SignInScreen;




// import logo from './logo.svg';
// import './App.css';
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// import react-firebaseui
// from react-firebaseui import FireaseAuth
// import firebase

// function SignedInComponent() {
//   return (
//     <section className = "section">
//       <div className = "container has-text-centered">
//         Hello username!
//         You're now signed in
//       </div>
//     </section>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           daffsdfsdfdfs <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// var firebaseConfig = {
//   apiKey: "AIzaSyDwQIujFnXcw1Yir_8eF46EY14lvNn0C4I",
//   authDomain: "ryan-68783.firebaseapp.com",
//   projectId: "ryan-68783",
//   storageBucket: "ryan-68783.appspot.com",
//   messagingSenderId: "561334277695",
//   appId: "1:561334277695:web:efe6f1321d6873d40e8a8a",
//   measurementId: "G-4YY5MLLXS8"
// };
// firebase.initializeApp(firebaseConfig);

// export default SignedInComponent;
