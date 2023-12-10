import NewPlanModal1 from "./NewPlanModal1";
import NewPlanModal2 from "./NewPlanModal2";
import NewPlanModal3 from "./NewPlanModal3";
import { useState } from "react";

export default function NewPlanModal({ onCloseNewPlanModal }) {
  const [windowNum, setNum] = useState(1);

  function from1to2() {
    setNum(2);
  }

  function from2to3() {
    setNum(3);
  }

  if (windowNum === 1) {
    return (
      <NewPlanModal1
        onCloseNewPlanModal={onCloseNewPlanModal}
        from1to2={from1to2}
      />
    );
  } else if (windowNum === 2) {
    return (
      <NewPlanModal2
        onCloseNewPlanModal={onCloseNewPlanModal}
        from2to3={from2to3}
      />
    );
  } else if (windowNum === 3) {
    return <NewPlanModal3 onCloseNewPlanModal={onCloseNewPlanModal} />;
  }
}
