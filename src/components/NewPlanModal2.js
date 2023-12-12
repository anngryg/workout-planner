import CancelBtn from "./CancelBtn";
import Button from "./Button";
import Input from "./Input";

export default function NewPlanModal2({ onCloseNewPlanModal, from2to3 }) {
  return (
    <div className="newPlanModal">
      <div className="planForm">
        <CancelBtn onCloseNewPlanModal={onCloseNewPlanModal} />
        <Input
          label="Training name"
          type="text"
          id="trainingTitle"
          maxLength="40"
        />
        <Button btnLabel="Next ➣" onClickFunction={from2to3} />
      </div>
    </div>
  );
}
