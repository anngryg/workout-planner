import DeleteBtn from "../ButtonsAndInput/DeleteBtn";
import "../../styles/PlanData.scss";
export default function PlanData({
  onDeletePlan,
  onDeleteTraining,
  selectedPlan,
  handleAddBtnClick,
}) {
  const formattedStartDate = new Date(
    selectedPlan.startDate
  ).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedFinishDate = new Date(
    selectedPlan.finishDate
  ).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="planData">
      <div className="heading-line">
        <div>
          <h1>{selectedPlan.title}</h1>
          <p>Comment: {selectedPlan.comment}</p>
        </div>
        <button className="styledBtn" onClick={onDeletePlan}>
          Delete plan
        </button>
      </div>
      <div className="grid">
        <p>Starting date: </p>
        <p>{formattedStartDate}</p>
        <p>Finish date: </p>
        <p>{formattedFinishDate}</p>
      </div>
      {selectedPlan.trainingList ? <h2>Trainings</h2> : null}
      <div className="trainings">
        {selectedPlan.trainingList
          ? selectedPlan.trainingList.map((training) => (
              <div key={training.id} className="training-module">
                <div>
                  <h2>{training.trainingName.toUpperCase()}</h2>
                  <ol>
                    {training.exerciseList.map((exercise) => (
                      <li key={exercise.id} className="exercise">
                        <div>
                          <p>
                            {exercise.exerciseTitle.toUpperCase()}
                            <br />
                            <small>{exercise.exerciseDescription}</small>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <DeleteBtn
                    label="x"
                    trainingId={training.id}
                    onDeleteBtnClick={() => onDeleteTraining(training.id)}
                  />
                </div>
              </div>
            ))
          : null}

        <button
          className="add-training"
          title="Add training"
          onClick={handleAddBtnClick}>
          +
        </button>
      </div>
    </div>
  );
}
