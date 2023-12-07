import NewPlanModal1 from "./NewPlanModal1";
import NewPlanModal2 from "./NewPlanModal2";
import { useState } from "react";

export default function NewPlanModal({ onCloseNewPlanModal }) {
  const [isNext, setNext] = useState(false);
  function NextOnClickHandler() {
    setNext(true);
  }
  if (isNext === false) {
    return (
      <NewPlanModal1
        NextOnClickHandler={NextOnClickHandler}
        onCloseNewPlanModal={onCloseNewPlanModal}
      />
    );
  } else {
    return <NewPlanModal2 onCloseNewPlanModal={onCloseNewPlanModal} />;
  }
}
