import "./App.css";
import Header from "./Header/Header";
import Tasks from "./Pages/Tasks/Tasks";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="task-page w-full bg-[#f9f8f6]">
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
