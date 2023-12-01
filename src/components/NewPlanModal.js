import "../styles/NewPlanModal.scss";
import { useState } from "react";

export default function NewPlanModal() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const outputDate = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;

  const [dates, setDate] = useState({
    startDate: outputDate,
    finishDate: outputDate,
  });

  function onInputHandler(event) {
    const { name, value } = event.target;

    setDate((prevDate) => {
      return {
        ...prevDate,
        [name]: value,
      };
    });
  }
  return (
    <div className="newPlanModal">
      <label for="title">Week number</label>
      <br />
      <input type="number" name="title" id="title"></input>
      <br />
      <label for="startDate">Start date:</label>
      <br />
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={dates.startDate}
        min="2023-08-01"
        max="2028-12-31"
        onChange={onInputHandler}
      />
      <br />
      <label for="finishDate">Finish date:</label>
      <br />
      <input
        type="date"
        id="finishDate"
        name="finishDate"
        value={dates.finishDate}
        min={dates.startDate}
        max="2028-12-31"
        onChange={onInputHandler}
      />
    </div>
  );
}
