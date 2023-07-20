import { RiGroupLine, RiUser4Line } from "react-icons/ri";
import ListItem, { ListItemMenu } from "./ListItem";

export default function Records({ active, setActive }) {
  return (
    <ul className="list-none mt-14">
      <h3 className="ml-4 uppercase font-bold mb-1">Records</h3>
      <ListItemMenu
        name="Team"
        icon={<RiGroupLine />}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Clients"
        icon={<RiUser4Line />}
        noti={0}
        active={active}
        setActive={setActive}
      />
    </ul>
  );
}
