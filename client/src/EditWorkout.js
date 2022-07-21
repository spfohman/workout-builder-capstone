import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditWorkout({ handleEditWorkout, singleWorkout, workoutID }) {
  const [workoutErrors, setWorkoutErrors] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: singleWorkout[0].name,
    desc: singleWorkout[0].desc,
  });
  const navigate = useNavigate();

  function handleClick() {
    navigate("/workoutlist");
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewWorkout({ ...newWorkout, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const addNewWorkout = {
      name: newWorkout.name,
      desc: newWorkout.desc,
    };

    fetch(`/api/workouts/${singleWorkout[0].id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewWorkout),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          handleEditWorkout(data);

          navigate("/workoutlist");
        } else {
          setWorkoutErrors(data.error);

          console.log(data.error);
        }
      });
  }
  const errorPs = workoutErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));

  return (
    <div>
      {errorPs}
      <form onSubmit={handleSubmit}>
        <fieldset>
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
      <button onClick={handleClick}>back to workout list</button>
    </div>
  );
}
export default EditWorkout;
