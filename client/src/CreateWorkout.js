import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateWorkout({ exercises, addWorkouts }) {
  const [checked, setChecked] = useState(false);
  const [workoutErrors, setWorkoutErrors] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    desc: "",
    exercise_ids: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? parseInt(e.target.value) : e.target.value;
    if (name === "exercise_ids") {
      setNewWorkout({
        ...newWorkout,
        [name]: [...newWorkout.exercise_ids, value],
      });
      // setChecked(true);
    } else {
      setNewWorkout({ ...newWorkout, [name]: value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const addNewWorkout = {
      name: newWorkout.name,
      desc: newWorkout.desc,
      exercise_ids: newWorkout.exercise_ids,
    };
    fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewWorkout),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          addWorkouts(data);
          // setNewWorkout(data);
          navigate("/workoutlist");

          setChecked(false);
        } else {
          setWorkoutErrors(data.error);
          setNewWorkout({
            name: "",
            desc: "",
            exercise_ids: [],
          });
          console.log(data.error);
        }
      });
    //   .then(addWorkout);
    //
  }
  const errorPs = workoutErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  const exerciseList = exercises.map((exercise) => (
    <div key={exercise.id}>
      <p>Name: {exercise.name}</p>
      <p>Description: {exercise.description}</p>
      <p>Rep count: {exercise.rep_count}</p>
      <label>
        Add to workout:
        <input
          type="checkbox"
          name="exercise_ids"
          value={exercise.id}
          // checked={checked}
          onChange={handleChange}
        />
      </label>
      <hr />
    </div>
  ));
  return (
    <div>
      {errorPs}
      <form onSubmit={handleSubmit}>
        <fieldset>
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
              name="desc"
              placeholder="Description"
              value={newWorkout.desc}
              onChange={handleChange}
            ></input>
          </p>
          <br></br>
          {errorPs}
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
export default CreateWorkout;
