import Input from "./Input";

export default function NewPlanModal2({ formData, setFormData }) {
  function onInputHandler(event) {
    const value = event.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        training: {
          trainingTitle: value,
          exerciseList: [...prevData.training.exerciseList],
        },
      };
    });
  }

  return (
    <>
      <Input
        label="Training name"
        type="text"
        id="trainingTitle"
        maxLength="40"
        onChange={onInputHandler}
        value={formData.training.trainingTitle}
      />
    </>
  );
}
