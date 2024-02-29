import { useEffect, useState } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar/Sidebar.js";
import NoPlanSwitcher from "./components/NoPlanSelected/NoPlanSwitcher.js";
import NewPlanModal from "./components/NewPlanModal/NewPlanModal.js";
import SelectedPlan from "./components/SelectedPlan/SelectedPlan.js";
import { db, auth } from "./config/firebase.js";
import {
  doc,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [plansList, setPlanList] = useState([]);
  const plansCollectionRef = collection(db, "plans");
  const [selectedPage, setSelectedPage] = useState(undefined);

  const getPlansList = async () => {
    try {
      const data = await getDocs(plansCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPlanList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPlansList();
  }, []);

  function handleAddNewPlan() {
    setSelectedPage(null);
  }

  function handleClosePlanModal() {
    setSelectedPage(undefined);
  }
  function handleSelectPlan(id) {
    setSelectedPage(id);
  }

  function goToMain() {
    setSelectedPage(undefined);
  }

  const handleSavePlan = async (planData) => {
    try {
      await addDoc(plansCollectionRef, {
        id: Math.random(),
        title: planData.title,
        comment: planData.comment,
        startDate: planData.startDate,
        finishDate: planData.finishDate,
        trainingList: planData.trainingList,
        userId: auth?.currentUser?.uid,
      });
      setSelectedPage(undefined);
      getPlansList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlan = async () => {
    let id = selectedPage;
    try {
      const planDoc = doc(db, "plans", id);
      await deleteDoc(planDoc);
      setSelectedPage(undefined);
      getPlansList();
    } catch (err) {
      console.error(err);
    }
  };

  const selectedPlan = plansList.find((plan) => plan.id === selectedPage);

  let content = (
    <SelectedPlan
      selectedPlan={selectedPlan}
      onDeletePlan={handleDeletePlan}
      getPlansList={getPlansList}
    />
  );

  if (selectedPage === null) {
    content = (
      <NewPlanModal
        onCancelBtnClick={handleClosePlanModal}
        onSavePlan={handleSavePlan}
      />
    );
  } else if (selectedPage === undefined) {
    content = (
      <NoPlanSwitcher
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    );
  }

  return (
    <main>
      <Sidebar
        onAddNewPlan={handleAddNewPlan}
        plans={plansList}
        onSelectPlan={handleSelectPlan}
        isUserLoggedIn={isUserLoggedIn}
        goToMain={goToMain}
      />
      {content}
    </main>
  );
}
