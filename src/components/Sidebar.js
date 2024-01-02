import "../styles/Sidebar.scss";
import "./Button";
import SidebarButton from "./Button";
export default function Sidebar({ onAddNewPlan }) {
  return (
    <aside className="sidebar">
      <h1>Workout Planner</h1>
      <SidebarButton btnLabel="+ Add new plan" onClick={onAddNewPlan} />
      <ul></ul>
    </aside>
  );
}
