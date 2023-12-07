import "../styles/CancelBtn.scss";
export default function CancelBtn({ onCloseNewPlanModal }) {
  return (
    <button className="cancelBtn" onClick={onCloseNewPlanModal}>
      x
    </button>
  );
}
