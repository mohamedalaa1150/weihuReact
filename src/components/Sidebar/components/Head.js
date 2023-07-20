import { RiLoader2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

export default function Head() {
  return (
    <div className="flex items-center justify-between">
      <span
        className="
      text-2xl 
      bg-gradient-to-br from-indigo-500 to-indigo-800 
      p-[7px] text-slate-200 rounded-xl 
      mr-3"
      >
        <RiLoader2Line />
      </span>
      <span className="flex-1 font-bold text-2xl text-black">weihu</span>
      <span className="text-xl hover:text-indigo-500  ease-in-out duration-150 cursor-pointer">
        <CiLogout />
      </span>
    </div>
  );
}
