import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

function EachWorkout({ workout }) {
  const exer = workout.map((item) =>
    item.exercises.map((ex) => (
      <div>
        {" "}
        {console.log(ex)}
        <li key={ex.id}>
          <input key={ex.id} type="checkbox"></input>Name: {ex.name}
        </li>
        <p>Rep count: {ex.rep_count}</p>
        <p>Description: {ex.description}</p>
      </div>
    ))
  );

  const renderWorkout = workout.map((item) => (
    <div key={item.id}>
      <fieldset>
        <p>Name: {item.name}</p>
        <p>Description: {item.desc}</p>
        <ul key={item.id}>Exercises: {exer}</ul>
        <Timer />
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
