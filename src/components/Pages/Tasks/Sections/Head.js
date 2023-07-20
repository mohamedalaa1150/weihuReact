import { format } from "date-fns";
import { RiAddLine, RiFilter3Line } from "react-icons/ri";
import { team1, team2, team3, team4, team5 } from "../components/Images";

import TeamItem from "../components/TeamItem";
import ButtonWhite, { ButtonBlack } from "../components/Buttons";

export default function Head() {
  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  return (
    <div className="m-5 py-4 px-5 flex justify-between items-center border-2 rounded-2xl border-gray-200">
      <div className="mr-20">
        <span className="block text-xl font-bold leading-none text-black">
          {month}
        </span>
        <span className="block text-md mt-2 font-medium leading-none">
          Today is {format(date, "eeee, MMMM do, yyyy")}
        </span>
      </div>
      <div className="flex flex-1 justify-between items-center mr-5 px-5 border-r-2 border-l-2 border-gray-200">
        <div className="flex items-center">
          <span className="mr-2 font-bold" style={{ fontSize: "24px" }}>
            Board -
          </span>
          <span className="cursor-pointer flex items-center">
            <select
              defaultValue="daily"
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="daily">Daily tasks</option>
              <option value="not">Not started</option>
              <option value="undarway">Underway</option>
              <option value="done">Done</option>
            </select>
          </span>
        </div>
        <ul className="flex">
          <TeamItem img={team1} size="10" />
          <TeamItem img={team2} size="10" />
          <TeamItem img={team3} size="10" />
          <TeamItem img={team4} size="10" />
          <TeamItem img={team5} size="10" />
        </ul>
      </div>
      <div className="flex gap-3">
        <ButtonWhite icon={<RiFilter3Line />} text="Filters" />
        <ButtonBlack icon={<RiAddLine />} text="Create task" />
      </div>
    </div>
  );
}
