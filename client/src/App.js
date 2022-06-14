import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "./UserProvider";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Home />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer></Footer>
      </UserProvider>
    </div>
  );
}

export default App;
