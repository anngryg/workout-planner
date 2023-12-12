import Input from "./Input.js";
import { useState } from "react";
export default function NewTraining(props) {
  const [exercise, setExercise] = useState({
    exerciseTitle: "",
    exerciseDescription: "",
  });

  function onInputHandler(event) {
    const { name, value } = event.target;
    setExercise((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function onAddExercise(event) {
    props.onAddExercise(exercise);
    event.preventDefault();
  }

  return (
    <div className="inputs">
      <Input
        label="Exercise name"
        type="text"
        name="exerciseTitle"
        maxLength="40"
        value={exercise.exerciseTitle}
        onChange={onInputHandler}
      />
      <br></br>
      <label>
        Description and additional information{" "}
        <small>(eg. number of series, repetitions, weight, kilometers)</small>
      </label>
      <textarea
        name="exerciseDescription"
        rows="3"
        value={exercise.exerciseDescription}
        onChange={onInputHandler}></textarea>
      <button className="styledBtn" onClick={onAddExercise}>
        + Add Exercise
      </button>
    </div>
  );
}
