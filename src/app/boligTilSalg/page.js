import BoligCard from "@/components/BoligCard";
import PageTitle from "@/components/PageTitle";
import SearchByBoligType from "@/components/SearchByBoligType";
import SearchByPriceRange from "@/components/SearchByPriceRange";
import { cookies } from "next/headers";


export default async function boligTilSalg({ searchParams }) {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("dm_token");
  // fetch from users/me to add favourite in BoligCard component

 const userRes = await fetch("https://dinmaegler.onrender.com/users/me",{
  method: 'get', 
  headers: new Headers({
      'Authorization': 'Bearer '+ token.value
  })
 });
 const userData = await userRes.json(); 





  const type = searchParams.type;
  const priceFrom = searchParams.priceFrom;

  let url = `https://dinmaegler.onrender.com/homes`;

  if (type && type !== "All") {
    url = `https://dinmaegler.onrender.com/homes?type_eq=${type}`;
  } else if (priceFrom) {
    url = `https://dinmaegler.onrender.com/homes?price_gte=${priceFrom}`;
  }

  const response = await fetch(url);
  const allBoligDataata = await response.json();

  return (
    <>
      <PageTitle title={"Boliger til salg"} />

      <div className="px-[17em] mt-[3em] flex">
        <div>
          <h3 className="font-semibold mb-[1em]">
            <span className="border-b-[3px] border-[#162A41]">Søg</span> efter
            dit drømmehus
          </h3>
          <label htmlFor="options" className="font-normal">
            {" "}
            Ejendomstype
          </label>
          <SearchByBoligType />
        </div>
        <SearchByPriceRange />
      </div>
      <div className="grid grid-cols-2 place-content-around px-[15em] pt-[2em]">
        {allBoligDataata.map((bolig) => (
         
            <BoligCard key={bolig.id} bolig={bolig} isfavorite={userData.homes.includes(bolig.id)} />
          
        ))}
      </div>
    </>
  );
}
