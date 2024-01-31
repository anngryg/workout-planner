import { useState } from "react";

import NewTraining from "./NewTraining";
import PlanData from "./PlanData";

export default function SelectedPlan({
  selectedPlan,
  onDeletePlan,
  onAddTraining,
  onDeleteTraining,
}) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  function handleAddBtnClick() {
    setIsBtnClicked(true);
  }

  function handleCancelBtnClick() {
    setIsBtnClicked(false);
  }

  let content;

  if (isBtnClicked === false) {
    content = (
      <PlanData
        onDeletePlan={onDeletePlan}
        onDeleteTraining={onDeleteTraining}
        selectedPlan={selectedPlan}
        handleAddBtnClick={handleAddBtnClick}
      />
    );
  } else if (isBtnClicked === true) {
    content = (
      <div>
        <NewTraining
          onAdd={onAddTraining}
          handleCancelBtnClick={handleCancelBtnClick}
        />
      </div>
    );
  }
  return <>{content}</>;
}
