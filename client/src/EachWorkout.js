import React from "react";
import { useNavigate } from "react-router-dom";

function EachWorkout({ workout }) {
  console.log(workout);

  const renderWorkout = workout.map((item) => (
    <div key={item.id}>
      <fieldset>
        <p>Name: {item.name}</p>
        <p>Description: {item.desc}</p>
        <p>Exercises: {item.exercise_ids}</p>
        <button>start</button>
        <button>pause</button>
        <button>stop</button>
        <p>⏲ </p>
      </fieldset>
    </div>
  ));

  const navigate = useNavigate();
  function handleClick() {
    navigate("/workoutlist");
  }

  return (
    <div>
      <h1>do this workout</h1>
      {renderWorkout}
      <button onClick={handleClick}>back to workout list</button>
    </div>
  );
}

export default EachWorkout;
