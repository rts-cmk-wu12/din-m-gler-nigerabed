"use client";
import { useRouter } from "next/navigation";import { useState } from "react";
;

export default function SearchFieldHero({search_text}) {
  const router = useRouter();
  const [searchText, setSearchText] =useState(search_text);

  async function handleSearch(e) {
    e.preventDefault();
    router.push("./boligSearchPage?search_text=" +searchText);
  }
  return (
    <form action="" onSubmit={handleSearch} className="flex">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="search"
        className=" placeholder:text-slate-400 block bg-white w-[25em] border
                 border-slate-300 rounded-[.3em] py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500
                  focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search by area.."
        name="search"
        
      />

      <button
        type="submit"
        className="bg-[#162A41] text-white h-[2.3em] w-[5em] rounded-[.2em] ml-[.5em]"
      >
        Søg
      </button>
    </form>
  );
}
