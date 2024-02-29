import "../../styles/Sidebar.scss";
import { auth } from "../../config/firebase";
import SidebarContent from "./SidebarContent";

export default function Sidebar({
  onAddNewPlan,
  plans,
  onSelectPlan,
  isUserLoggedIn,
  goToMain,
}) {
  const loggedUserId = auth?.currentUser?.uid;
  let usersPlans = plans.filter((plan) => {
    return plan.userId === loggedUserId;
  });
  let content = <h1>Workout Planner</h1>;

  if (isUserLoggedIn === true) {
    content = (
      <SidebarContent
        onAddNewPlan={onAddNewPlan}
        usersPlans={usersPlans}
        onSelectPlan={onSelectPlan}
        goToMain={goToMain}
      />
    );
  }

  return <aside className="sidebar">{content}</aside>;
}
