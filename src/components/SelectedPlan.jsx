import "../styles/SelectedPlan.scss";
export default function SelectedPlan({ plan }) {
  const formattedStartDate = new Date(plan.startDate).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );
  const formattedFinishDate = new Date(plan.finishDate).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );
  return (
    <div className="planData">
      <div className="heading-line">
        <div>
          <h1>Week number: {plan.title}</h1>
          <p>Comment: {plan.comment}</p>
        </div>
        <button className="styledBtn">Delete plan</button>
      </div>
      <div className="grid">
        <p>Starting date: </p>
        <p>{formattedStartDate}</p>
        <p>Finish date: </p>
        <p>{formattedFinishDate}</p>
      </div>
    </div>
  );
}
