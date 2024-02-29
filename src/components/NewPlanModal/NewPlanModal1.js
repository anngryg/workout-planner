import "../../styles/NewPlanModal.scss";
import "../ButtonsAndInput/Input.js";
import Input from "../ButtonsAndInput/Input.js";

export default function NewPlanModal1({ formData, setFormData }) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const outputDate = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;

  function onInputHandler(event) {
    const { id, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  return (
    <>
      <Input
        label="Week title"
        type="text"
        id="title"
        value={formData.title}
        onChange={onInputHandler}
      />
      <Input
        label="Your comment"
        type="text"
        id="comment"
        maxLength="40"
        value={formData.comment}
        onChange={onInputHandler}
      />
      <Input
        label="Start date"
        type="date"
        id="startDate"
        className="dateInput"
        value={formData.startDate}
        min={outputDate}
        max="2028-12-31"
        onChange={onInputHandler}
      />
      <Input
        label="Finish date"
        type="date"
        id="finishDate"
        className="dateInput"
        min={formData.startDate}
        max="2028-12-31"
        value={formData.finishDate}
        onChange={onInputHandler}
      />
    </>
  );
}
