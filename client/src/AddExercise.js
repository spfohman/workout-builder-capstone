import React, { useState } from "react";

function AddExercise({ addExercises }) {
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    rep_count: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewExercise({ ...newExercise, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewExercise = {
      name: newExercise.name,
      description: newExercise.description,
      rep_count: newExercise.rep_count,
    };
    fetch("/api/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewExercise),
    })
      .then((response) => response.json())
      .then(addExercises);
    setNewExercise({
      name: "",
      description: "",
      rep_count: 0,
    });
  }
  return (
    <div>
      <h2>Add new exercises:</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Exercise name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newExercise.name}
            required
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="name">Exercise description:</label>
          <textarea
            type="textarea"
            name="description"
            placeholder="Description"
            value={newExercise.description}
            onChange={handleChange}
          ></textarea>
        </p>
        <br />
        <p>
          <label htmlFor="name">Exercise rep count:</label>
          <input
            type="integer"
            name="rep_count"
            placeholder="Rep count"
            value={newExercise.rep_count}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddExercise;
