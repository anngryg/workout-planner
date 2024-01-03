import "../styles/DeleteBtn.scss";
export default function DeleteBtn({ onDeleteBtnClick, exerciseId }) {
  return (
    <button className="deleteBtn" onClick={() => onDeleteBtnClick(exerciseId)}>
      x
    </button>
  );
}
