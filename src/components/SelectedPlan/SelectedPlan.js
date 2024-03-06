import { useState } from "react";
import React from "react";

import NewTraining from "./NewTraining";
import PlanData from "./PlanData";
import { db } from "../../config/firebase.js";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function SelectedPlan({
  selectedPlan,
  onDeletePlan,
  getPlansList,
}) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  function handleAddBtnClick() {
    setIsBtnClicked(true);
  }

  function handleCancelBtnClick() {
    setIsBtnClicked(false);
  }

  let content;

  const handleAddTraining = async (addedTraining) => {
    let id = selectedPlan.id;
    const newTraining = {
      id: Math.random(),
      trainingName: addedTraining.trainingName,
      exerciseList: addedTraining.exerciseList,
    };
    const planDoc = doc(db, "plans", id);
    try {
      const planDocSnapshot = await getDoc(planDoc);
      const currentTrainingList = planDocSnapshot.data().trainingList || [];
      const updatedTrainingList = [...currentTrainingList, newTraining];
      await updateDoc(planDoc, { trainingList: updatedTrainingList });
      getPlansList();
      setIsBtnClicked(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTraining = async (trainingId) => {
    let id = selectedPlan.id;
    const planDoc = doc(db, "plans", id);
    try {
      const planDocSnapshot = await getDoc(planDoc);
      const currentTrainingList = planDocSnapshot.data().trainingList;
      const updatedTrainingList = currentTrainingList.filter(
        (training) => training.id !== trainingId
      );
      await updateDoc(planDoc, { trainingList: updatedTrainingList });
      getPlansList();
    } catch (err) {
      console.error(err);
    }
  };

  if (isBtnClicked === false) {
    content = (
      <PlanData
        onDeletePlan={onDeletePlan}
        onDeleteTraining={handleDeleteTraining}
        selectedPlan={selectedPlan}
        handleAddBtnClick={handleAddBtnClick}
      />
    );
  } else if (isBtnClicked === true) {
    content = (
      <div>
        <NewTraining
          onAdd={handleAddTraining}
          handleCancelBtnClick={handleCancelBtnClick}
        />
      </div>
    );
  }
  return <>{content}</>;
}
