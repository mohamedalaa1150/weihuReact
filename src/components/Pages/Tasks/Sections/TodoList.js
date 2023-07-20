import {
  RiAttachment2,
  RiMore2Line,
  RiNotificationBadgeLine,
} from "react-icons/ri";

import { team1, team2, team3, team4, team5 } from "../components/Images";

import HeadBody from "../components/HeadBody";
import { TeamItemSmall } from "../components/TeamItem";
import { useState } from "react";

export default function TodoList() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="border-2 border-gray-200 rounded-3xl px-4 pt-4 pb-1 h-fit">
      <HeadBody name="Todo List" isOpen={isOpen} onOpen={handleOpen} num={1} />
      <div
        className={`overflow-hidden ease-in-out duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        {/* Box one */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-sky-200 to-sky-100 text-sky-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-sky-50 py-[5px] px-[10px] rounded-lg border-[1px] border-sky-700/25 cursor-pointer text-sm">
                #website
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
              Search inspirations for Upcoming project
            </h3>
            <p className="text-[12px] font-medium">
              Note: They like our behance project <strong>Mise</strong>
            </p>
            <div className="flex items-center justify-between text-[12px] mt-4 mb-2">
              <span>Progress</span>
              <span className="font-bold">40%</span>
            </div>
            <div className="w-full bg-sky-700/25 rounded-full h-2.5">
              <div
                className="bg-sky-700 h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="mt-4 flex items-center justify-between ">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
                <TeamItemSmall img={team3} />
                <TeamItemSmall img={team4} />
                <TeamItemSmall img={team5} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-sky-700/25 cursor-pointer hover:bg-sky-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-sky-700/25 cursor-pointer hover:bg-sky-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box two */}
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
              Ginko mobile app design
            </h3>
            <ul className="box-list-checked font-bold text-[13px] ml-5 mb-3">
              <li className="done mb-[5px]">Create user flow</li>
              <li className="done mb-[5px]">Make wirframe</li>
              <li className="mb-[5px]">Design onboarding screens</li>
              <li className="mb-[5px]">Make prototype</li>
            </ul>
            <p className="text-[12px] font-medium">
              Note: We have a meeting <strong>2:34 AM</strong>
            </p>
            <div className="flex items-center justify-between text-[12px] mt-4 mb-2">
              <span>Progress</span>
              <span className="font-bold">15%</span>
            </div>
            <div className="w-full bg-purple-700/25 rounded-full h-2.5">
              <div
                className="bg-purple-700 h-2.5 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
                <TeamItemSmall img={team3} />
                <TeamItemSmall img={team4} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-purple-700/25 cursor-pointer hover:bg-purple-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>7</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-purple-700/25 cursor-pointer hover:bg-purple-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box three */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-rose-200 to-rose-100 text-rose-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-rose-50 py-[5px] px-[10px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer text-sm">
                #mobileapp
              </span>
              <span className="bg-rose-50 py-[5px] px-[10px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-rose-700/25 cursor-pointer p-1 rounded-lg hover:bg-rose-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Make user flow of akua mobile banking app
            </h3>
            <div className="flex items-center justify-between text-[12px] mt-4 mb-2">
              <span>Progress</span>
              <span className="font-bold">30%</span>
            </div>
            <div className="w-full bg-rose-700/25 rounded-full h-2.5">
              <div
                className="bg-rose-700 h-2.5 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer hover:bg-rose-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>14</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer hover:bg-rose-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
