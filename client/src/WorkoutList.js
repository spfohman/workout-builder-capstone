import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WorkoutList({ workouts, workoutID, handleDeleteWorkout }) {
  // const [deleteWorkout, setDeleteWorkout] = useState(true);

  const navigate = useNavigate();
  function handleClick(value) {
    workoutID(value);
    navigate("/EachWorkout");
  }
  function handleDeleteClick(workout) {
    const confirmBox = window.confirm("Are you sure you want to delete");
    if (confirmBox === true) {
      console.log(workout);
      console.log("true");
      fetch(`/api/workouts/${workout}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      handleDeleteWorkout(workout);
    } else {
      console.log("false");
    }
  }
  const listOfWorkouts = workouts.map((workout) => (
    <div key={workout.id}>
      <p>Name: {workout.name}</p>
      <p>Description: {workout.desc}</p>
      <button onClick={() => handleClick(workout.id)}>This Workout</button>
      <button>Edit Workout</button>
      <button onClick={() => handleDeleteClick(workout.id)}>
        Delete Workout
      </button>
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
