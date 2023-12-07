import "../styles/Button.scss";

export default function Button({ btnLabel, onClickFunction, ...props }) {
  return (
    <button className="styledBtn" onClick={onClickFunction} {...props}>
      {btnLabel}
    </button>
  );
}
