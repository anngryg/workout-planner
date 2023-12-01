import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import NewPlanInputWindow from "./components/NewPlanModal";
function App() {
  return (
    <main>
      <Sidebar />
      <NewPlanInputWindow />
    </main>
  );
}

export default App;
