"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export default function SearchByPriceRange() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState(0);
  const [priceRangeDebounce] = useDebounce(priceRange, 500);

  function handleOnchange(e) {
    setPriceRange(e.target.value); 
  }

  useEffect(() => { 
    router.push("boligTilSalg?priceFrom=" + priceRangeDebounce);
  }, [ priceRangeDebounce, router]);

  return (
    <div className="flex flex-col justify-end w-[25em] ml-[5em]">
    <p>Pris-interval</p>
    <input type="range" min="0" max="12000000" className="" onChange={handleOnchange}/>
    <div className="flex justify-between items-center">
        <p>0kr.</p>
        <p>12.000.000 kr.</p>
    </div>
</div>
  );
}
