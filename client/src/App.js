import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserProvider";
import Footer from "./Footer";
import Home from "./Home";
import UserHome from "./UserHome";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import AddExercise from "./AddExercise";
import CreateWorkout from "./CreateWorkout";
import WorkoutList from "./WorkoutList";
import EachWorkout from "./EachWorkout";
import EditWorkout from "./EditWorkout";

function App() {
  const [exercises, setExercises] = useState([]);
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [singleWorkout, setSingleWorkout] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  function handleEditWorkout(editWorkout) {
    const workoutToUpdate = allWorkouts.map((workout) => {
      if (workout.id === editWorkout.id) {
        return editWorkout;
      } else {
        return workout;
      }
    });
    setAllWorkouts(workoutToUpdate);
  }
  function handleDeleteWorkout(deletedWorkout) {
    const workoutToUpdate = allWorkouts.filter((workout) => {
      return workout.id !== deletedWorkout;
    });
    setAllWorkouts(workoutToUpdate);
  }
  const exercisesToDisplay = exercises.filter((exercise) => {
    return exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
                  exercisesToDisplay={exercisesToDisplay}
                  searchTerm={searchTerm}
                  onSearch={setSearchTerm}
                  addWorkouts={addWorkouts}
                />
              }
            />
            <Route
              path="/eachWorkout"
              element={
                <EachWorkout
                  workoutID={workoutID}
                  singleWorkout={singleWorkout}
                />
              }
            />
            <Route
              path="/editWorkout"
              element={
                <EditWorkout
                  workoutID={workoutID}
                  handleEditWorkout={handleEditWorkout}
                  singleWorkout={singleWorkout}
                />
              }
            />
            <Route
              path="/workoutList"
              element={
                <WorkoutList
                  workouts={allWorkouts}
                  workoutID={workoutID}
                  handleEditWorkout={handleEditWorkout}
                  handleDeleteWorkout={handleDeleteWorkout}
                />
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
