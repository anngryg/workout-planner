import "../styles/CancelBtn.scss";
export default function CancelBtn({ onCancelBtnClick }) {
  return (
    <button className="cancelBtn" onClick={onCancelBtnClick}>
      x
    </button>
  );
}
