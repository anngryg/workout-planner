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

  const [data, setData] = useState({
    title: "",
    comment: "",
    startDate: outputDate,
    finishDate: outputDate,
  });

  function onInputHandler(event) {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function logme() {
    console.log(data);
  }
  return (
    <div className="newPlanModal">
      <label for="title">Week number</label>
      <br />
      <input
        type="number"
        name="title"
        id="title"
        value={data.title}
        onChange={onInputHandler}></input>
      <br />
      <label for="comment">Your comment</label>
      <br />
      <input
        type="text"
        name="comment"
        id="comment"
        value={data.comment}
        onChange={onInputHandler}></input>
      <br />
      <label for="startDate">Start date</label>
      <br />
      <input
        className="dateInput"
        type="date"
        id="startDate"
        name="startDate"
        value={data.startDate}
        min="2023-08-01"
        max="2028-12-31"
        onChange={onInputHandler}
      />
      <br />
      <label for="finishDate">Finish date</label>
      <br />
      <input
        className="dateInput"
        type="date"
        id="finishDate"
        name="finishDate"
        value={data.finishDate}
        min={data.startDate}
        max="2028-12-31"
        onChange={onInputHandler}
      />
      <button onClick={logme}>Next ➣</button>
    </div>
  );
}
