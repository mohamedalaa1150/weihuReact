import MoreMenu from "./MoreMenu";
import SelectTeam from "./SelectTeam";
import { ButtonSubmit } from "./Buttons";

import { useState } from "react";
import {
  RiAddLine,
  RiArrowDropRightFill,
  RiMore2Line,
  RiStickyNoteLine,
} from "react-icons/ri";

export default function HeadBody({ name, isOpen, onOpen }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <div
      className={`flex items-center justify-between ease-in-out duration-100 ${
        isOpen ? "border-b-2 border-gray-200" : ""
      } pb-3`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`mr-1 text-xl cursor-pointer ease-in-out duration-300 hover:text-indigo-500 ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={onOpen}
        >
          <RiArrowDropRightFill />
        </span>
        <span className="text-lg font-bold">{name}</span>
      </div>
      <div className="flex items-center justify-between gap-1">
        <div className="">
          <div
            className="cursor-pointer ease-in-out duration-300 hover:text-indigo-500 hover:bg-indigo-100 p-1 hover:rounded-lg "
            onClick={(e) => setOpenForm(!openForm)}
          >
            <RiAddLine />
          </div>
          <form
            className={`${
              openForm ? "block" : "hidden"
            } absolute  top-[56px] left-1/2 -translate-x-1/2 z-50 shadow-xl rounded-2xl py-6 px-10 bg-white`}
          >
            <h3 className="text-2xl font-bold text-center uppercase mb-5 text-indigo-500">
              Create New Task
            </h3>

            <div className="group relative mb-5">
              <span className=" absolute text-gray-300 top-1/2 -translate-y-1/2 ml-2 text-xl group-focus-within:text-gray-700">
                <RiStickyNoteLine />
              </span>
              <input
                className="border-2 border-gray-200 w-full rounded-lg pr-3 pl-8 py-1 focus-within:placeholder:text-transparent outline-none group-focus-within:border-gray-700 group-focus-within:border-[2px] placeholder:text-gray-300"
                type="text"
                placeholder="Type Title"
              />
            </div>
            <div className="relative mb-5 flex items-center justify-between gap-2">
              <span className="text-lg font-bold mr-2">Note:</span>
              <input
                className="flex-1 focus:border-2 focus:border-gray-700 border-2 border-gray-200 rounded-lg px-3 py-1 focus-within:placeholder:text-transparent outline-none placeholder:text-gray-300 "
                type="text"
                placeholder="Type Here"
              />
              <input
                className="w-[100px] border-2 focus:border-2 focus:border-gray-700 border-gray-200 rounded-lg px-3 py-1 focus-within:placeholder:text-transparent outline-none  placeholder:text-gray-300 "
                type="text"
                placeholder="HighLight"
              />
            </div>
            <div className="relative mb-5 flex items-center justify-between gap-2">
              <span className="text-lg mr-2 font-bold">Progress</span>
              <input
                className="flex-1 slider track"
                type="range"
                value={step}
                min={1}
                max={100}
                onChange={(e) => setStep(Number(e.target.value))}
              />
              <span className="font-bold p-2 rounded-lg bg-indigo-100 text-indigo-400 mx-2">
                {step}%
              </span>
            </div>
            <div className=" w-[300px] ml-auto mr-auto mb-5">
              <SelectTeam />
            </div>
            <div className="flex justify-center">
              <ButtonSubmit icon={<RiAddLine />} text="Create task" />
            </div>
          </form>
        </div>
        <div className="relative">
          <div
            className="cursor-pointer ease-in-out duration-300 hover:text-indigo-500 hover:bg-indigo-100 p-1 hover:rounded-lg"
            onClick={(e) => setOpenMenu(!openMenu)}
          >
            <RiMore2Line />
          </div>
          <MoreMenu open={openMenu} />
        </div>
      </div>
    </div>
  );
}
