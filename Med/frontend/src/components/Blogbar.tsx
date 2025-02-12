export default function Blogbar() {
    const categories = ["For You", "Following", "React", "Web Development", "Programming"];
  
    return (
      <div className="border-b border-gray-300 w-full">
        <div className="flex gap-6 px-4 py-3 text-sm text-slate-600 font-light items-center">
          {/* Plus Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-500 cursor-pointer hover:text-black transition-all"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
  
          {/* Category Links */}
          {categories.map((item, index) => (
            <div
              key={index}
              className="hover:text-black hover:font-medium cursor-pointer transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }