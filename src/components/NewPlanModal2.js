import Input from "./Input";

export default function NewPlanModal2({ formData, setFormData }) {
  return (
    <>
      <Input
        label="Training name"
        type="text"
        id="trainingTitle"
        maxLength="40"
        onChange={(event) =>
          setFormData({ ...formData, trainingTitle: event.target.value })
        }
        value={formData.trainingTitle}
      />
    </>
  );
}
