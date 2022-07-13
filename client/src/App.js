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
import EachWorkout from "./EachWorkout";

function App() {
  const [exercises, setExercises] = useState([]);
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [singleWorkout, setSingleWorkout] = useState([]);

  useEffect(() => {
    fetch("/api/exercises")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);
  useEffect(() => {
    fetch("/api/workouts")
      .then((response) => response.json())
      .then((data) => {
        setAllWorkouts(data);
      });
  }, []);
  function addExercises(newExercise) {
    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises);
  }
  function addWorkouts(newWorkout) {
    const updatedWorkouts = [...allWorkouts, newWorkout];
    setAllWorkouts(updatedWorkouts);
  }
  function workoutID(clickedWorkout) {
    const workoutPicked = allWorkouts.filter((workout) => {
      return workout.id === clickedWorkout;
    });
    setSingleWorkout(workoutPicked);
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
              element={
                <CreateWorkout
                  exercises={exercises}
                  addWorkouts={addWorkouts}
                />
              }
            />
            <Route
              path="/eachWorkout"
              element={
                <EachWorkout workoutID={workoutID} workout={singleWorkout} />
              }
            />
            <Route
              path="/workoutList"
              element={
                <WorkoutList workouts={allWorkouts} workoutID={workoutID} />
              }
            />

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
