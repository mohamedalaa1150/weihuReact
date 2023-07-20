import { RiCheckboxCircleLine, RiFlashlightLine } from "react-icons/ri";

import ListItem from "./ListItem";

export default function TasksAndActivites({ active, setActive }) {
  return (
    <ul className="main-list list-none mt-8 mb-10">
      <ListItem
        name="Tasks"
        icon={<RiCheckboxCircleLine />}
        noti={16}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Activites"
        icon={<RiFlashlightLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
    </ul>
  );
}
