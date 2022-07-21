import React from "react";
import { useNavigate } from "react-router-dom";

function WorkoutList({
  workouts,
  workoutID,
  handleDeleteWorkout,
  handleLikeWorkout,
}) {
  const navigate = useNavigate();

  function handleClick(workout) {
    workoutID(workout);
    navigate("/EachWorkout");
  }

  function handleEditClick(workout) {
    workoutID(workout);
    navigate("/editworkout");
  }

  function handleDeleteClick(workout) {
    const confirmBox = window.confirm("Are you sure you want to delete");
    if (confirmBox === true) {
      fetch(`/api/workouts/${workout}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      handleDeleteWorkout(workout);
    }
  }

  function updateLikes(workout) {
    const addLike = {
      likes: workout.likes + 1,
    };

    fetch(`/api/workouts/${workout.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLike),
    })
      .then((response) => response.json())
      .then(handleLikeWorkout);
  }

  const listOfWorkouts = workouts.map((workout) => (
    <div key={workout.id}>
      <p>Name: {workout.name}</p>
      <p>Description: {workout.desc}</p>
      <button onClick={() => updateLikes(workout)}> 👍 </button>
      <p> {workout.likes} likes </p>
      <button onClick={() => handleClick(workout.id)}>This Workout</button>
      <button onClick={() => handleEditClick(workout.id)}>Edit Workout</button>
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
