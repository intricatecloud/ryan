import logo from './logo.svg';
import './App.css';


function SignedInComponent() {
  return (
    <section className = "section">
      <div className = "container has-text-centered">
        Hello username!
        You're now signed in
      </div>
    </section>
  )
}

function App(){
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title"> Twitter for wentaoxu</h1>
        <div className="subtitle"> A place for wentaoxu to login </div>
      <button> sign in </button>
      </div>
    </section>
  )
}

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

export default App;
