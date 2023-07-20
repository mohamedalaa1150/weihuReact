export default function ButtonWhite({ icon, text }) {
  return (
    <button
      className="
    text-[#0f0f0f] 
    py-2 
    px-4 
    flex 
    items-center 
    gap-[5px] 
    border-2 
    ease-in-out
    duration-200
    border-gray-200 
    rounded-lg
    hover:text-[#f9f8f6]
    hover:bg-indigo-500
    hover:border-indigo-500 
    hover:shadow-lg hover:shadow-indigo-100"
    >
      <span className="text-lg">{icon}</span> {text}
    </button>
  );
}

export function ButtonBlack({ icon, text }) {
  return (
    <button
      className="
    text-[#f9f8f6] 
    bg-[#0f0f0f]  
    py-2 
    px-4 
    flex 
    items-center 
    gap-[5px] 
    border-2 
    border-black 
    rounded-lg
    ease-in-out
    duration-200
    hover:text-[#0f0f0f]
    hover:bg-[#f9f8f6]
    hover:border-gray-200 "
    >
      <span>{icon}</span> {text}
    </button>
  );
}

export function ButtonSubmit({ icon, text }) {
  return (
    <button
      className="
    text-[#f9f8f6] 
    bg-indigo-500 
    py-2 
    px-4 
    flex 
    items-center 
    gap-[5px] 
    rounded-lg
    ease-in-out
    duration-200
    hover:text-[#f9f8f6]
    hover:bg-indigo-600
    hover:shadow-lg"
    >
      <span>{icon}</span> {text}
    </button>
  );
}
