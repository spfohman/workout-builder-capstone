import "./App.css";
import React, { useEffect, useState } from "react";
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
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("/api/exercises")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);
  function addExercises(newExercise) {
    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises);
  }
  return (
    <div className="App">
      <UserProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/userHome" element={<UserHome />} />
            <Route
              path="/addExercise"
              element={<AddExercise addExercises={addExercises} />}
            />
            <Route
              path="/createWorkout"
              element={<CreateWorkout exercises={exercises} />}
            />
            <Route path="/workoutList" element={<WorkoutList />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </UserProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
