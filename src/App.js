import { useState } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar.js";
import NoPlanSelected from "./components/NoPlanSelected.js";
import NewPlanModal from "./components/NewPlanModal.js";
import SelectedPlan from "./components/SelectedPlan.jsx";

function App() {
  const [plansState, setPlansState] = useState({
    selectedPlanId: undefined,
    plans: [],
  });

  function handleAddNewPlan() {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: null,
      };
    });
  }
  function handleClosePlanModal() {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: undefined,
      };
    });
  }
  const selectedPlan = plansState.plans.find(
    (plan) => plan.id === plansState.selectedPlanId
  );
  let content = <SelectedPlan plan={selectedPlan} />;
  function handleSelectPlan(id) {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: id,
      };
    });
  }
  if (plansState.selectedPlanId === null) {
    content = (
      <NewPlanModal
        onCancelBtnClick={handleClosePlanModal}
        onSavePlan={handleSavePlan}
      />
    );
  } else if (plansState.selectedPlanId === undefined) {
    content = <NoPlanSelected />;
  }

  function handleSavePlan(planData) {
    setPlansState((prevState) => {
      const newPlan = {
        ...planData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedPlanId: undefined,
        plans: [...prevState.plans, newPlan],
      };
    });
  }
  return (
    <main>
      <Sidebar
        onAddNewPlan={handleAddNewPlan}
        plans={plansState.plans}
        onSelectPlan={handleSelectPlan}
      />
      {content}
    </main>
  );
}

export default App;
