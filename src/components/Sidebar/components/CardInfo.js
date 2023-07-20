import profileImg from "../../assets/imgs/profile.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

export default function CardInfo() {
  return (
    <div className="card-info flex items-center justify-between bg-white py-[10px] px-[15px] rounded-2xl shadow-sm mt-auto hover:shadow-md duration-300 cursor-pointer">
      <img className="w-10 h-10 rounded-full" src={profileImg} alt="Profile" />
      <div className="flex-1 ml-3">
        <span className="block text-xl font-bold leading-none ">
          Mohamed Alaa
        </span>
        <span className="block text-xs leading-none mt-1">
          mohamed@gmail.com
        </span>
      </div>
      <span className="arrow">
        <RiArrowRightSLine />
      </span>
    </div>
  );
}
