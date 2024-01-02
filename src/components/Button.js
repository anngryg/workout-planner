import "../styles/Button.scss";

export default function Button({ btnLabel, ...props }) {
  return (
    <button className="styledBtn" {...props}>
      {btnLabel}
    </button>
  );
}
