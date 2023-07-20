import {
  RiAttachment2,
  RiMore2Line,
  RiNotificationBadgeLine,
} from "react-icons/ri";

import { team1, team2, team3, team4, team5 } from "../components/Images";
import HeadBody from "../components/HeadBody";
import { TeamItemSmall } from "../components/TeamItem";
import { useState } from "react";

export default function Done() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="border-2 border-gray-200 rounded-3xl px-4 pt-4 pb-1 h-fit">
      <HeadBody name="Done" isOpen={isOpen} onOpen={handleOpen} num={4} />
      <div
        className={`overflow-hidden ease-in-out duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        {/* Box one */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-cyan-200 to-cyan-100 text-cyan-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-cyan-50 py-[5px] px-[10px] rounded-lg border-[1px] border-cyan-700/25 cursor-pointer text-sm">
                #mobileapp
              </span>
              <span className="bg-cyan-50 py-[5px] px-[10px] rounded-lg border-[1px] border-cyan-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-cyan-700/25 cursor-pointer p-1 rounded-lg hover:bg-cyan-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Affitto product full service
            </h3>
            <ul className="box-list-checked font-bold text-[13px] ml-5 mb-3">
              <li className="done mb-[5px]">Branding</li>
              <li className="done mb-[5px]">Mobile app design & development</li>
              <li className="done mb-[5px]">Landing page & development</li>
              <li className="done mb-[5px]">Dashboard design & development</li>
              <li className="done ">Marketing</li>
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
                <TeamItemSmall img={team3} />
                <TeamItemSmall img={team4} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-cyan-700/25 cursor-pointer hover:bg-cyan-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>7</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-cyan-700/25 cursor-pointer hover:bg-cyan-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Box two */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-rose-200 to-rose-100 text-rose-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-rose-50 py-[5px] px-[10px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer text-sm">
                #products
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
              Design Mobile app product page redesign
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team4} />
                <TeamItemSmall img={team5} />
                <TeamItemSmall img={team2} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer hover:bg-rose-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-rose-700/25 cursor-pointer hover:bg-rose-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
