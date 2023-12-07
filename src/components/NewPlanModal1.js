import "../styles/NewPlanModal.scss";
import "./Input.js";
import { useState } from "react";
import Input from "./Input.js";
import Button from "./Button.js";
import CancelBtn from "./CancelBtn.js";

export default function NewPlanModal1({
  onCloseNewPlanModal,
  NextOnClickHandler,
}) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const outputDate = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;

  const [data, setData] = useState({
    title: "",
    comment: "",
    startDate: outputDate,
    finishDate: outputDate,
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
        <Input
          label="Week number"
          type="number"
          id="title"
          value={data.title}
          onChange={onInputHandler}
        />
        <Input
          label="Your comment"
          type="text"
          id="comment"
          maxLength="40"
          value={data.comment}
          onChange={onInputHandler}
        />
        <Input
          label="Start date"
          type="date"
          id="startDate"
          className="dateInput"
          value={data.startDate}
          min="2023-08-01"
          max="2028-12-31"
          onChange={onInputHandler}
        />
        <Input
          label="Finish date"
          type="date"
          id="finishDate"
          className="dateInput"
          min={data.startDate}
          max="2028-12-31"
          value={data.finishDate}
          onChange={onInputHandler}
        />
        <Button btnLabel="Next ➣" onClickFunction={NextOnClickHandler} />
      </div>
    </div>
  );
}
