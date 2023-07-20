import { RiArrowDownSLine } from "react-icons/ri";

export default function ListItem({ name, icon, noti, active, setActive }) {
  const isActive = active === name;
  return (
    <li
      className={`
    flex items-center 
    justify-between 
    py-[8px] px-[15px] 
    rounded-xl
    mt-2
    hover:bg-white hover:text-black ease-in-out duration-150 cursor-pointer
    ${isActive ? "bg-white shadow-md text-black" : ""}
    `}
      onClick={(e) => setActive(name)}
    >
      <span className={`pr-3 text-2xl ${isActive ? "text-indigo-600" : ""}`}>
        {icon}
      </span>
      <span className="flex-1 text-lg font-bold">{name}</span>{" "}
      <span
        className={`text-sm font-bold ${isActive ? "text-indigo-600" : ""}`}
      >
        {noti > 0 ? noti : ""}
      </span>
    </li>
  );
}

export function ListItemMenu({ name, icon, active, setActive }) {
  const isActive = active === name;
  return (
    <li
      className={`
    flex items-center 
    justify-between 
    py-[8px] px-[15px] 
    rounded-xl
    mt-2
    hover:bg-white hover:text-black ease-in-out duration-150 cursor-pointer
    ${isActive ? "bg-white shadow-md text-black" : ""}
    `}
      onClick={(e) => setActive(name)}
    >
      <span className={`pr-3 text-2xl ${isActive ? "text-indigo-600" : ""}`}>
        {icon}
      </span>
      <span className="flex-1 text-lg font-bold">{name}</span>
      <span className="">
        <RiArrowDownSLine />
      </span>
    </li>
  );
}
