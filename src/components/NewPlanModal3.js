import NewTraining from "./NewTraining.js";
import Button from "./Button.js";
import CancelBtn from "./CancelBtn.js";
import "../styles/NewPlanModal3.scss";
import { useState } from "react";

export default function NewPlanModal3({ onCloseNewPlanModal }) {
  const [exercises, setExercises] = useState([]);

  function addExercise(newExercise) {
    setExercises((prevExercises) => {
      return [...prevExercises, newExercise];
    });
  }

  function handleDeleteExercise() {
    setExercises((prevExercises) => {
      return prevExercises.filter((exercise, index) => {
        return index !== IdleDeadline;
      });
    });
  }

  return (
    <div className="newPlanModal">
      <CancelBtn onCloseNewPlanModal={onCloseNewPlanModal} />
      <div className="planForm">
        <div className="content">
          <div className="list">
            <h4>Entered exercises</h4>
            {exercises.map((item) => {
              return (
                <>
                  <div className="exercise">
                    <p>
                      {item.exerciseTitle}
                      <br></br>
                      <small>{item.exerciseDescription}</small>
                    </p>
                    <CancelBtn onCloseNewPlanModal={handleDeleteExercise} />
                  </div>
                </>
              );
            })}
          </div>
          <NewTraining onAddExercise={addExercise} />
        </div>
        <Button btnLabel=" ✓ Save " />
      </div>
    </div>
  );
}
