import Input from "./Input.js";
import Button from "./Button.js";
import CancelBtn from "./CancelBtn.js";
import "../styles/NewPlanModal3.scss";
import { useState } from "react";

export default function NewPlanModal2({ onCloseNewPlanModal }) {
  const [data, setData] = useState({
    exerciseTitle: "",
    description: "",
  });

  function onInputHandler(event) {
    const { id, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  return (
    <div className="newPlanModal">
      <CancelBtn onCloseNewPlanModal={onCloseNewPlanModal} />

      <div className="planForm">
        <div className="content">
          <div className="list">
            <h4>Entered exercises</h4>
            <ul>
              <li>xd</li>
            </ul>
          </div>
          <div className="inputs">
            <Input
              label="Exercise name"
              type="text"
              id="exerciseTitle"
              maxLength="40"
              value={data.exerciseTitle}
              onChange={onInputHandler}
            />
            <br></br>
            <label for="description">
              Description and additional information{" "}
              <small>
                (eg. number of series, repetitions, weight, kilometers)
              </small>
            </label>
            <textarea
              id="description"
              rows="4"
              cols="50"
              value={data.description}
              onChange={onInputHandler}></textarea>
            <button>+Add</button>
          </div>
        </div>
        <Button btnLabel=" ✓ Save " />
      </div>
    </div>
  );
}
