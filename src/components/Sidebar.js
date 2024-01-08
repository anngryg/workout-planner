import "../styles/Sidebar.scss";
import "./Button";
import SidebarButton from "./Button";
export default function Sidebar({ onAddNewPlan, plans, onSelectPlan }) {
  return (
    <aside className="sidebar">
      <h1>Workout Planner</h1>
      <SidebarButton btnLabel="+ Add new plan" onClick={onAddNewPlan} />
      <h2>Your plans</h2>
      <ul>
        {plans.map((plan) => {
          return (
            <li key={plan.id}>
              <button onClick={() => onSelectPlan(plan.id)}>
                {plan.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
