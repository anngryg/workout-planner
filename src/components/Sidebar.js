import "../styles/Sidebar.scss";
import Button from "./Button";
export default function Sidebar({ onAddNewPlan, plans, onSelectPlan }) {
  return (
    <aside className="sidebar">
      <h1>Workout Planner</h1>
      <Button btnLabel="+ Add new plan" onClick={onAddNewPlan} />
      {plans.length > 0 ? <h2>Your plans</h2> : undefined}
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
