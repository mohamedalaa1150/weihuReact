export default function TeamItem({ img, size }) {
  return (
    <li className="ml-[-15px]">
      <img
        className={`w-${size} rounded-full border-[3px] border-white`}
        src={img}
        alt="-"
      />
    </li>
  );
}
