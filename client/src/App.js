import "./App.css";
import { UserProvider } from "./UserProvider";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signUp" element={<Signup />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
