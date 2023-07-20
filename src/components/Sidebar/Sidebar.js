import { useState } from "react";

import Head from "./components/Head";
import TasksAndActivites from "./components/TasksAndActivites";
import MainSide from "./components/MainSide";
import Records from "./components/Records";
import Support from "./components/Support";
import CardInfo from "./components/CardInfo";

import "./Sidebar.css";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("Tasks");
  return (
    <div
      className="
    w-[350px] 
    text-gray-600
    p-5 
    border-r-[2px] border-gray-200 
    bg-gradient-to-b from-indigo-100/[60%] via-purple-100/[60%] to-pink-100/[60%]
    flex flex-col
    "
    >
      <Head />
      <TasksAndActivites active={activeLink} setActive={setActiveLink} />
      <div className="line bg-gray-200"></div>
      <MainSide active={activeLink} setActive={setActiveLink} />
      <Records active={activeLink} setActive={setActiveLink} />
      <Support active={activeLink} setActive={setActiveLink} />
      <CardInfo />
    </div>
  );
}
export default Sidebar;
