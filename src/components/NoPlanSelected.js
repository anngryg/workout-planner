import "./Button.js";
import Button from "./Button.js";
import "../styles/NoPlanSelected.scss";

export default function NoPlanSelected() {
  return (
    <div className="container">
      <h2>Log in with Google to track your progress!</h2>
      <Button btnLabel="Log in" />
      <h3>Select existing plan or create a new one</h3>
    </div>
  );
}
