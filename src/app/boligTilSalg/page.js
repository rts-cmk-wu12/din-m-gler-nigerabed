import BoligCard from "@/components/BoligCard";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function boligTilSalg() {
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const allBoligDataata = await response.json();
  // console.log("Bolig Dataaaa", allBoligDataata);

  return (
    <>
     
      <PageTitle title={"Boliger til salg"} />
      <div className="px-[17em] mt-[3em]">
        <h3 className="font-semibold mb-[1em]"><span className="border-b-[3px] border-[#162A41]">Søg</span> efter dit drømmehus</h3>
        <label htmlFor="options" className="font-normal"> Ejendomstype</label>
        <select id="options" name="options"  className="h-[2em] w-[20em] mt-[.7em] block bg-white border border-slate-300 rounded-[.2em] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ">
          <option value="option1">Ejendomstype</option>
          <option value="option2">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        
      </div>
      <div className="grid grid-cols-2 place-content-around px-[15em] pt-[2em]">
        {allBoligDataata.map((bolig) => (
          <Link href={`/boligTilSalg/${bolig.id}`}>
            <BoligCard key={bolig.id} bolig={bolig} />
          </Link>
        ))}
      </div>
    </>
  );
}
