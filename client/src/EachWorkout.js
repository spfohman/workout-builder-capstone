import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

function EachWorkout({ singleWorkout }) {
  const exer = singleWorkout.map((item) =>
    item.exercises.map((ex) => (
      <div key={ex.id}>
        <li>
          <input type="checkbox"></input>Name: {ex.name}
        </li>
        <p>Rep count: {ex.rep_count}</p>
        <p>Description: {ex.description}</p>
        <hr />
      </div>
    ))
  );

  const renderWorkout = singleWorkout.map((item) => (
    <div key={item.id}>
      <fieldset>
        <p>Name: {item.name}</p>
        <p>Description: {item.desc}</p>
        <hr />
        <ul key={item.id}>Exercises: {exer}</ul>
        <p>Timer:</p>
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
