import Input from "../ButtonsAndInput/Input";
import { useState, React } from "react";
import DeleteBtn from "../ButtonsAndInput/DeleteBtn";
import "../../styles/NewPlanModal2.scss";

export default function NewPlanModal2({ setFormData, formData }) {
  const [newTraining, setNewTraining] = useState({
    trainingName: "",
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

    const newTrainingEntry = {
      id: Math.random(),
      trainingName: newTraining.trainingName,
      exerciseList: [newExercise],
    };

    setFormData((prevData) => {
      const existingTraining = prevData.trainingList.find(
        (training) => training.trainingName === newTraining.trainingName
      );

      if (existingTraining) {
        const updatedTrainingList = prevData.trainingList.map((training) =>
          training.trainingName === newTraining.trainingName
            ? {
                ...training,
                exerciseList: [...training.exerciseList, newExercise],
              }
            : training
        );

        return {
          ...prevData,
          trainingList: updatedTrainingList,
        };
      } else {
        const updatedTrainingList = [
          ...prevData.trainingList,
          newTrainingEntry,
        ];

        return {
          ...prevData,
          trainingList: updatedTrainingList,
        };
      }
    });

    setNewTraining({
      ...newTraining,
      exerciseTitle: "",
      exerciseDescription: "",
    });
  }

  function deleteExercise(trainingId, exerciseId) {
    setFormData((prevData) => {
      const updatedTrainingList = prevData.trainingList
        .map((training) => {
          if (training.id === trainingId) {
            const updatedExerciseList = training.exerciseList.filter(
              (exercise) => exercise.id !== exerciseId
            );
            // Jeśli lista ćwiczeń dla danego treningu jest pusta, usuwamy ten trening z listy treningów
            if (updatedExerciseList.length === 0) {
              return null;
            }
            return {
              ...training,
              exerciseList: updatedExerciseList,
            };
          }
          return training;
        })
        .filter(Boolean);
      return {
        ...prevData,
        trainingList: updatedTrainingList,
      };
    });
  }

  return (
    <div className="content">
      <div className="list">
        <h4>EXERCISES</h4>
        {formData.trainingList.map((training) => (
          <div key={training.id} className="training-entry">
            <h5>{training.trainingName.toUpperCase()}</h5>
            <ul>
              {training.exerciseList.map((exercise) => (
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
                    onDeleteBtnClick={() =>
                      deleteExercise(training.id, exercise.id)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
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
        <label>Description (eg.weight, kilometers)</label>
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
  );
}
