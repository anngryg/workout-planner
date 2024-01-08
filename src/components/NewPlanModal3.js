import Input from "./Input.js";
import "../styles/NewPlanModal3.scss";
import { useState } from "react";
import DeleteBtn from "./DeleteBtn";

export default function NewPlanModal3({ formData, setFormData }) {
  const [currentExercise, setCurrentExercise] = useState({
    id: Math.random(),
    exerciseTitle: "",
    exerciseDescription: "",
  });

  function onAddExercise(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      training: {
        ...prevFormData.training,
        exerciseList: [...prevFormData.training.exerciseList, currentExercise],
      },
    }));
    setCurrentExercise({
      id: Math.random(),
      exerciseTitle: "",
      exerciseDescription: "",
    });
    event.preventDefault();
  }

  function onInputHandler(event) {
    const { id, value } = event.target;
    setCurrentExercise((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  function deleteExercise(id) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      training: {
        ...prevFormData.training,
        exerciseList: prevFormData.training.exerciseList.filter(
          (exercise) => exercise.id !== id
        ),
      },
    }));
  }

  return (
    <>
      <div className="content">
        <div className="list">
          <h4>Entered exercises</h4>
          {formData.training.exerciseList.map((item) => (
            <div key={item.id} className="exercise">
              <p>
                {item.exerciseTitle}
                <br />
                <small>{item.exerciseDescription}</small>
              </p>
              <DeleteBtn
                label="x"
                onDeleteBtnClick={deleteExercise}
                exerciseId={item.id}
              />
            </div>
          ))}
        </div>
        <div className="inputs">
          <Input
            label="Exercise name"
            type="text"
            id="exerciseTitle"
            maxLength="40"
            value={currentExercise.exerciseTitle}
            onChange={onInputHandler}
          />
          <br></br>
          <label>
            Description and additional information{" "}
            <small>
              (eg. number of series, repetitions, weight, kilometers)
            </small>
          </label>
          <textarea
            id="exerciseDescription"
            rows="3"
            value={currentExercise.exerciseDescription}
            onChange={onInputHandler}></textarea>
          <button className="styledBtn" onClick={onAddExercise}>
            + Add Exercise
          </button>
        </div>
      </div>
    </>
  );
}
