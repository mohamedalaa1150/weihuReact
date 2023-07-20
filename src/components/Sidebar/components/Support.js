import { RiCustomerServiceLine, RiSettings2Line } from "react-icons/ri";
import ListItem from "./ListItem";

export default function Support({ active, setActive }) {
  return (
    <ul className="list-none mt-14 mb-5">
      <ListItem
        name="Settings"
        icon={<RiSettings2Line />}
        noti={0}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Support"
        icon={<RiCustomerServiceLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
    </ul>
  );
}
