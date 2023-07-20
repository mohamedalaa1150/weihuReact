export default function MoreMenu({ open }) {
  return (
    <div
      className={`${
        open ? "opacity-100 z-20" : "opacity-0 -z-10"
      } flex flex-col opacity-0 bg-white p-2 border-2 border-gray-200 rounded-xl absolute right-0 mt-2 overflow-auto ease-in-out duration-300`}
    >
      <a className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="/">
        Sort
      </a>
      <a className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="/">
        Empty
      </a>
      <a className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="/">
        Setting
      </a>
    </div>
  );
}
