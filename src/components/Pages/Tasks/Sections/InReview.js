import { RiMore2Line } from "react-icons/ri";
import { team1, team2, team4, team5 } from "../components/Images";

import HeadBody from "../components/HeadBody";
import TeamItem from "../components/TeamItem";
import { useState } from "react";
import ButtonsCard from "../components/ButtonsCard";

export default function InReview() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="border-2 border-gray-200 rounded-3xl px-4 pt-4 pb-1 h-fit">
      <HeadBody name="In Review" isOpen={isOpen} onOpen={handleOpen} num={3} />
      <div
        className={`overflow-hidden ease-in-out duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        {/* Box one */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-pink-200 to-pink-100 text-pink-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-pink-50 py-[5px] px-[10px] rounded-lg border-[1px] border-pink-700/25 cursor-pointer text-sm">
                #prudcts
              </span>
              <span className="bg-pink-50 py-[5px] px-[10px] rounded-lg border-[1px] border-pink-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-pink-700/25 cursor-pointer p-1 rounded-lg hover:bg-pink-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Orypto product landing page create in webflow
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItem img={team1} size="7" />
                <TeamItem img={team2} size="7" />
                <TeamItem img={team4} size="7" />
                <TeamItem img={team5} size="7" />
              </ul>
              <ButtonsCard color="pink" notiNum="12" attachNum="8" />
            </div>
          </div>
        </div>
        {/* Box two */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-sky-200 to-sky-100 text-sky-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-sky-50 py-[5px] px-[10px] rounded-lg border-[1px] border-sky-700/25 cursor-pointer text-sm">
                #prudcts
              </span>
              <span className="bg-sky-50 py-[5px] px-[10px] rounded-lg border-[1px] border-sky-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-sky-700/25 cursor-pointer p-1 rounded-lg hover:bg-sky-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Natverk video platform web app design and develop
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItem img={team1} size="7" />
                <TeamItem img={team2} size="7" />
                <TeamItem img={team4} size="7" />
              </ul>
              <ButtonsCard color="sky" notiNum="12" attachNum="8" />
            </div>
          </div>
        </div>
        {/* Box three */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-orange-200 to-orange-100 text-orange-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-orange-50 py-[5px] px-[10px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer text-sm">
                #website
              </span>
              <span className="bg-orange-50 py-[5px] px-[10px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-orange-700/25 cursor-pointer p-1 rounded-lg hover:bg-orange-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Redesign grab website landing and login pages
            </h3>
            <p className="text-[12px] font-medium">
              Note: We have a meeting <strong>3:12 AM</strong>
            </p>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItem img={team1} size="7" />
                <TeamItem img={team2} size="7" />
              </ul>
              <ButtonsCard color="orange" notiNum="12" attachNum="8" />
            </div>
          </div>
        </div>
        {/* Box four */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-purple-200 to-purple-100 text-purple-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-purple-50 py-[5px] px-[10px] rounded-lg border-[1px] border-purple-700/25 cursor-pointer text-sm">
                #mobileapp
              </span>
              <span className="bg-purple-50 py-[5px] px-[10px] rounded-lg border-[1px] border-purple-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-purple-700/25 cursor-pointer p-1 rounded-lg hover:bg-purple-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Create Odyah app prototype for Get notification in figma
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItem img={team4} size="7" />
                <TeamItem img={team5} size="7" />
              </ul>
              <ButtonsCard color="purple" notiNum="12" attachNum="8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
