import Input from "./Input.js";
import Button from "./Button.js";
import CancelBtn from "./CancelBtn.js";
import "../styles/NewPlanModal2.scss";
export default function NewPlanModal2({ onCloseNewPlanModal }) {
  return (
    <div className="newPlanModal">
      <CancelBtn onCloseNewPlanModal={onCloseNewPlanModal} />
      <div className="planForm">
        <div className="inputModule">
          <Input label="Training name" type="text" id="title" maxLength="40" />
          <Button btnLabel="Add" />
        </div>

        <Button btnLabel="Save" />
      </div>
    </div>
  );
}
