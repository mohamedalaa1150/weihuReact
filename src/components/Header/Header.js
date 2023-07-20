import "./Header.css";
import {
  RiKeyboardLine,
  RiNotification3Line,
  RiQuestionLine,
  RiSearchLine,
} from "react-icons/ri";
function Header() {
  return (
    <div className="text-gray-600 p-5 flex justify-between items-center border-b-2 border-gray-200 ">
      <div>
        <span className="block text-md font-medium leading-none mt-1">
          Welcome,
        </span>
        <span className="block text-lg font-bold leading-none text-black">
          Mohamed Alaa
        </span>
      </div>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 ml-4">
          <RiSearchLine />
        </span>
        <input
          className="outline-none py-2 px-10 rounded-xl min-w-[800px] placeholder:text-gray-600"
          type="search"
          placeholder="Find something"
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-4">
          <RiKeyboardLine />
        </span>
      </div>
      <div className="flex gap-4">
        <span className="p-[12px] text-md bg-white shadow-sm rounded-full cursor-pointer ease-in-out duration-200 hover:text-indigo-500">
          <RiQuestionLine />
        </span>
        <span className="p-[12px] text-md bg-white shadow-sm rounded-full cursor-pointer ease-in-out duration-200 hover:text-indigo-500">
          <RiNotification3Line />
        </span>
      </div>
    </div>
  );
}

export default Header;
