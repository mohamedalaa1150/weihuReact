export default function TeamItem({ img }) {
  return (
    <li className="ml-[-15px]">
      <img
        className={`w-10 rounded-full border-[3px] border-white`}
        src={img}
        alt="-"
      />
    </li>
  );
}

export function TeamItemSmall({ img }) {
  return (
    <li className="ml-[-15px]">
      <img
        className={`w-7 rounded-full border-[3px] border-white`}
        src={img}
        alt="-"
      />
    </li>
  );
}
