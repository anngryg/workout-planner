import "../styles/Sidebar.scss";
import "./SidebarButton";
import SidebarButton from "./SidebarButton";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Workout Planner</h1>
      <SidebarButton />
      <ul></ul>
    </aside>
  );
}
