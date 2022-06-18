import "./App.css";
import React from "react";
import { UserProvider } from "./UserProvider";
import Footer from "./Footer";
import Home from "./Home";
import UserHome from "./UserHome";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AddExercise from "./AddExercise";
import CreateWorkout from "./CreateWorkout";
import WorkoutList from "./WorkoutList";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/userhome" element={<UserHome />} />
            <Route path="/addExercise" element={<AddExercise />} />
            <Route path="/createWorkout" element={<CreateWorkout />} />
            <Route path="/workoutList" element={<WorkoutList />} />
            <Route path="/login" element={<Login />} />

            <Route path="/signUp" element={<Signup />} />

            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </UserProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
