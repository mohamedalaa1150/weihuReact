import {
  RiDashboardLine,
  RiCalendar2Line,
  RiDraftLine,
  RiFilePptLine,
  RiFileChartLine,
} from "react-icons/ri";
import ListItem from "./ListItem";

export default function MainSide({ active, setActive }) {
  return (
    <ul className="list-none mt-5">
      <h3 className="ml-4 uppercase font-bold mb-1">Main</h3>
      <ListItem
        name="Dashboard"
        icon={<RiDashboardLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Schedule"
        icon={<RiCalendar2Line />}
        noti={0}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Note"
        icon={<RiDraftLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Products"
        icon={<RiFilePptLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
      <ListItem
        name="Report"
        icon={<RiFileChartLine />}
        noti={0}
        active={active}
        setActive={setActive}
      />
    </ul>
  );
}
