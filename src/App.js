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

  function handleAddNewPlan() {
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
    content = <NewPlanModal onCloseNewPlanModal={handleCloseProjectModal} />;
  } else if (selectedOption.selectedPlanId === undefined) {
    content = <NoPlanSelected />;
  }
  return (
    <main>
      <Sidebar onAddNewPlan={handleAddNewPlan} />
      {content}
    </main>
  );
}

export default App;
