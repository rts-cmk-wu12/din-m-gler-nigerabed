"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchByBoligType() {
  const router = useRouter();
  
  const [boligType, setBoligType] = useState("All");

  function handleOnchange(e) {
    setBoligType(e.target.value);
    // console.log("=======", e.target.value);
  }

  useEffect(() => {
    router.push("boligTilSalg?type=" + boligType);
  }, [boligType, router]);

  return (
    <select
      id="options"
      value={boligType}
      name="options"
      onChange={handleOnchange}
      className="h-[2em] w-[20em] mt-[.7em] block bg-white border border-slate-300 rounded-[.2em] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
    >
      <option value="All">All</option>
      <option value="Ejerlejlighed">Ejerlejlighed</option>
      <option value="Villa">Villa</option>
      <option value="Landejendom">Landejendom</option>
      <option value="Byhus">Byhus</option>
    </select>
  );
}
