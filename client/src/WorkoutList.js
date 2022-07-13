import React from "react";

function WorkoutList({ workouts }) {
  const listOfWorkouts = workouts.map((workout) => (
    <div key={workout.id}>
      <p>Name: {workout.name}</p>
      <p>Description: {workout.desc}</p>
      <button>This Workout</button>
      {/* <ul>
        <li>Exercises: {workout.exercises}</li>
      </ul> */}
      <hr></hr>
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
