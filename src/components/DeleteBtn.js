import "../styles/DeleteBtn.scss";
export default function DeleteBtn({ onDeleteBtnClick, exerciseId, label }) {
  return (
    <button className="deleteBtn" onClick={() => onDeleteBtnClick(exerciseId)}>
      {label}
    </button>
  );
}
