import BoligCard from "@/components/BoligCard";
import PageTitle from "@/components/PageTitle";
import SearchByBoligType from "@/components/SearchByBoligType";
import Link from "next/link";

// async function fetchBolig(url) {
//   const response = await fetch(url);
//   return response.json();
// }

export default async function boligTilSalg({ searchParams }) {
  const category = searchParams.type;

  const url =
    category && category != "All"
      ? `https://dinmaegler.onrender.com/homes?type_eq=${category}`
      : `https://dinmaegler.onrender.com/homes`;

  const response = await fetch(url);
  const allBoligDataata = await response.json();

  //const allBoligDataata = await fetchBolig(url);

  return (
    <>
      <PageTitle title={"Boliger til salg"} />

      <div className="px-[17em] mt-[3em]">
        <h3 className="font-semibold mb-[1em]">
          <span className="border-b-[3px] border-[#162A41]">Søg</span> efter dit
          drømmehus
        </h3>
        <label htmlFor="options" className="font-normal">
          {" "}
          Ejendomstype
        </label>
        <SearchByBoligType />
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
