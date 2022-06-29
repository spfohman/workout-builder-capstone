import React, { useState } from "react";

function CreateWorkout({ exercises, addWorkout }) {
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    desc: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewWorkout({ ...newWorkout, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewWorkout = {
      name: newWorkout.name,
      description: newWorkout.description,
    };
    fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewWorkout),
    })
      .then((response) => response.json())
      .then(addWorkout);
    setNewWorkout({
      name: "",
      desc: "",
    });
  }
  const exerciseList = exercises.map((exercise) => (
    <div key={exercise.id}>
      <p>Name: {exercise.name}</p>
      <p>Description: {exercise.description}</p>
      <p>Rep count: {exercise.rep_count}</p>
      <label>
        Add to workout:
        <input
          type="checkbox"
          name="exercise"
          // value={newExercise.name}
          onChange={handleChange}
        />
      </label>
      <hr />
    </div>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {exerciseList}
        <p>
          <label htmlFor="name">Workout name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newWorkout.name}
            required
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="name">Workout description:</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newWorkout.desc}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateWorkout;
