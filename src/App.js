import { useState } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar.js";
import NoPlanSelected from "./components/NoPlanSelected.js";
import NewPlanModal from "./components/NewPlanModal.js";
import SelectedPlan from "./components/SelectedPlan.js";

function App() {
  const [plansState, setPlansState] = useState({
    selectedPlanId: undefined,
    plans: [],
    trainings: [],
  });
  const selectedPlan = plansState.plans.find(
    (plan) => plan.id === plansState.selectedPlanId
  );
  let content = (
    <SelectedPlan
      selectedPlan={selectedPlan}
      onDeletePlan={handleDeletePlan}
      onAddTraining={handleAddTraining}
      onDeleteTraining={handleDeleteTraining}
    />
  );

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

  function handleAddTraining(training) {
    setPlansState((prevState) => {
      const selectedPlanIndex = prevState.plans.findIndex(
        (plan) => plan.id === prevState.selectedPlanId
      );
      if (selectedPlanIndex !== -1) {
        const newTraining = {
          id: Math.random(),
          trainingName: training.trainingName,
          exerciseList: training.exerciseList,
        };
        const updatedPlans = [...prevState.plans];
        updatedPlans[selectedPlanIndex] = {
          ...updatedPlans[selectedPlanIndex],
          trainingList: [
            ...updatedPlans[selectedPlanIndex].trainingList,
            newTraining,
          ],
        };
        return {
          ...prevState,
          selectedPlanId: undefined,
          plans: updatedPlans,
          trainings: [newTraining, ...prevState.trainings],
        };
      }
      return prevState;
    });
  }
  function handleDeleteTraining(trainingId) {
    setPlansState((prevState) => {
      const selectedPlanIndex = prevState.plans.findIndex(
        (plan) => plan.id === prevState.selectedPlanId
      );
      if (selectedPlanIndex !== -1) {
        const updatedPlans = [...prevState.plans];
        const updatedTrainingList = updatedPlans[
          selectedPlanIndex
        ].trainingList.filter((training) => training.id !== trainingId);
        updatedPlans[selectedPlanIndex] = {
          ...updatedPlans[selectedPlanIndex],
          trainingList: updatedTrainingList,
        };
        return {
          ...prevState,
          plans: updatedPlans,
        };
      }
      return prevState;
    });
  }

  function handleAddNewPlan() {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: null,
      };
    });
  }

  function handleDeletePlan() {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: undefined,
        plans: prevState.plans.filter(
          (plan) => plan.id !== prevState.selectedPlanId
        ),
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

  function handleSelectPlan(id) {
    setPlansState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: id,
      };
    });
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
