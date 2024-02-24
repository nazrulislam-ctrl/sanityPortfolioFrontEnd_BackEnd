import { NavLink } from "react-router-dom";

export default function NewsCard({newsInfo}) {
 const{newsTitle,thumbnail,_id, category}= newsInfo;
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={thumbnail}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {newsTitle}
        </h1>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #{category}
          </span>
         
        </div>
        <NavLink to={`/news/${_id}`}>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
        </NavLink>
      </div>
    </div>
  );
}
