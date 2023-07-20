import { RiAttachment2, RiNotificationBadgeLine } from "react-icons/ri";

export default function ButtonsCard({ color, notiNum, attachNum }) {
  return (
    <div className="font-medium flex items-center justify-between gap-2">
      <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-{color}-700/25 cursor-pointer hover:bg-{color}-200 duration-300">
        <span>
          <RiNotificationBadgeLine />
        </span>
        <span>{notiNum}</span>
      </div>
      <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-{color}-700/25 cursor-pointer hover:bg-{color}-200 duration-300">
        <span>
          <RiAttachment2 />
        </span>
        <span>{attachNum}</span>
      </div>
    </div>
  );
}
