import NewPlanModal1 from "./NewPlanModal1";
import NewPlanModal2 from "./NewPlanModal2";
import NewPlanModal3 from "./NewPlanModal3";
import "../styles/NewPlanModal.scss";
import CancelBtn from "./CancelBtn";
import Button from "./Button";
import { useState } from "react";

export default function NewPlanModal({ onCancelBtnClick, onSavePlan }) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    startDate: "",
    finishDate: "",
    training: {
      trainingTitle: "",
      exerciseList: [],
    },
  });

  function pageDisplay() {
    if (page === 0) {
      return <NewPlanModal1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <NewPlanModal2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <NewPlanModal3 formData={formData} setFormData={setFormData} />;
    }
  }

  function handleSave() {
    if (formData.title.trim() === "") {
      alert("Please add Week number");
    } else if (formData.startDate.trim() === "") {
      alert("Please add start date");
    } else if (formData.finishDate.trim() === "") {
      alert("Please add finish date");
    } else {
      onSavePlan(formData);
    }
  }

  return (
    <div className="newPlanModal">
      <CancelBtn onCancelBtnClick={onCancelBtnClick} />
      <div className="planForm">
        {pageDisplay()}
        <div className="buttons">
          <Button
            style={{ display: page === 0 ? "none" : "block" }}
            btnLabel="🡸 Back"
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          />
          <Button
            style={{ display: page === 2 ? "none" : "block" }}
            btnLabel="Next 🡺"
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          />
          <Button
            style={{ display: page !== 2 ? "none" : "block" }}
            btnLabel="Save ✔"
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
