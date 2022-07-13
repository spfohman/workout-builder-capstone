import React from "react";
import { useNavigate } from "react-router-dom";

function WorkoutList({ workouts, workoutID }) {
  const navigate = useNavigate();
  function handleClick(value) {
    workoutID(value);
    navigate("/EachWorkout");
  }

  const listOfWorkouts = workouts.map((workout) => (
    <div key={workout.id}>
      <p>Name: {workout.name}</p>
      <p>Description: {workout.desc}</p>
      <button onClick={() => handleClick(workout.id)}>This Workout</button>

      <hr />
    </div>
  ));
  return (
    <>
      <div>
        <h1>A list of all workouts</h1>
        {listOfWorkouts}
      </div>
    </>
  );
}
export default WorkoutList;
