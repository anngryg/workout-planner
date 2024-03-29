import { useState } from "react";
import Input from "../ButtonsAndInput/Input";
import DeleteBtn from "../ButtonsAndInput/DeleteBtn";
import React from "react";
import "../../styles/NewTraining.scss";
import CancelButton from "../ButtonsAndInput/CancelBtn";
import Button from "../ButtonsAndInput/Button";

export default function NewTraining({ onAdd, handleCancelBtnClick }) {
  const [newTraining, setNewTraining] = useState({
    trainingName: "",
    exerciseList: [],
    exerciseTitle: "",
    exerciseDescription: "",
  });
  function onInputHandler(event) {
    const { id, value } = event.target;
    setNewTraining((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  function onAddExercise() {
    if (
      newTraining.trainingName.trim() === "" ||
      newTraining.exerciseTitle.trim() === ""
    ) {
      return;
    }
    const newExercise = {
      id: Math.random(),
      exerciseTitle: newTraining.exerciseTitle,
      exerciseDescription: newTraining.exerciseDescription,
    };
    setNewTraining((prevData) => ({
      ...prevData,
      exerciseList: [...prevData.exerciseList, newExercise],
      exerciseTitle: "",
      exerciseDescription: "",
    }));
  }

  function deleteExercise(exerciseId) {
    setNewTraining((prevData) => ({
      ...prevData,
      exerciseList: prevData.exerciseList.filter(
        (exercise) => exercise.id !== exerciseId
      ),
    }));
  }

  function handleSaveTraining() {
    const training = {
      trainingName: newTraining.trainingName,
      exerciseList: newTraining.exerciseList,
    };
    if (training.trainingName === "" || training.exerciseList.length === 0) {
      alert("Please fill out the gaps");
    } else {
      onAdd(training);
      setNewTraining({
        trainingName: "",
        exerciseList: [],
        exerciseTitle: "",
        exerciseDescription: "",
      });
    }
  }

  return (
    <div className="newTraining">
      <CancelButton onCancelBtnClick={handleCancelBtnClick} />
      <div className="main-part">
        <div className="list">
          <h4>EXERCISES</h4>
          <h5>{newTraining.trainingName.toUpperCase()}</h5>
          <ul>
            {newTraining.exerciseList.map((exercise) => (
              <li key={exercise.id} className="exercise">
                <div>
                  <p>
                    {exercise.exerciseTitle.toUpperCase()}
                    <br />
                    <small>{exercise.exerciseDescription}</small>
                  </p>
                </div>
                <DeleteBtn
                  label="x"
                  exerciseId={exercise.id}
                  onDeleteBtnClick={() => deleteExercise(exercise.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="inputs">
          <Input
            label="Training name"
            type="text"
            id="trainingName"
            maxLength="40"
            onChange={onInputHandler}
            value={newTraining.trainingName}
          />
          <Input
            label="Exercise name"
            type="text"
            id="exerciseTitle"
            maxLength="40"
            value={newTraining.exerciseTitle}
            onChange={onInputHandler}
          />
          <br></br>
          <label>Description (eg. weight, kilometers)</label>
          <textarea
            id="exerciseDescription"
            rows="3"
            value={newTraining.exerciseDescription}
            onChange={onInputHandler}></textarea>

          <button className="addExerciseBtn" onClick={onAddExercise}>
            + Add Exercise
          </button>
        </div>
      </div>
      <Button btnLabel="Save" onClick={handleSaveTraining} />
    </div>
  );
}
