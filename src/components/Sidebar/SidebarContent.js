import Button from "../ButtonsAndInput/Button";
import React from "react";
export default function SidebarContent({
  onAddNewPlan,
  usersPlans,
  onSelectPlan,
  goToMain,
}) {
  const compareByStartDate = (plan1, plan2) => {
    return new Date(plan2.startDate) - new Date(plan1.startDate);
  };
  const sortedPlans = usersPlans.slice().sort(compareByStartDate);
  return (
    <>
      <button className="WorkoutPlannerBtn" onClick={goToMain}>
        Workout Planner
      </button>
      <Button btnLabel="+ Add" onClick={onAddNewPlan} />
      <h2>Choose plan</h2>
      <ul>
        {sortedPlans.map((plan) => {
          return (
            <li key={plan.id}>
              <button onClick={() => onSelectPlan(plan.id)}>
                {plan.title}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
