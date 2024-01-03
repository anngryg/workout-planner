import { useState } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar.js";
import NoPlanSelected from "./components/NoPlanSelected.js";
import NewPlanModal from "./components/NewPlanModal.js";

function App() {
  const [selectedOption, setSelectedOption] = useState({
    selectedPlanId: undefined,
    plans: [],
  });

  function handleAddNewPlan(event) {
    event.preventDefault();
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        selectedPlanId: null,
      };
    });
  }
  function handleCloseProjectModal() {
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        selectedPlanId: undefined,
      };
    });
  }
  let content;
  if (selectedOption.selectedPlanId === null) {
    content = (
      <NewPlanModal
        onCancelBtnClick={handleCloseProjectModal}
        onSavePlan={handleSavePlan}
      />
    );
  } else if (selectedOption.selectedPlanId === undefined) {
    content = <NoPlanSelected />;
  }

  function handleSavePlan(planData) {
    setSelectedOption((prevState) => {
      const newPlan = {
        ...planData,
        id: Math.random(),
      };
      return {
        ...prevState,
        plans: [...prevState.plans, newPlan],
      };
    });
  }
  console.log(selectedOption);
  return (
    <main>
      <Sidebar onAddNewPlan={handleAddNewPlan} />
      {content}
    </main>
  );
}

export default App;
