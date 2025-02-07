import BoligCard from "@/components/BoligCard";
import PageTitle from "@/components/PageTitle";
import SearchFieldHero from "@/components/SearchFieldHero";
import Link from "next/link";

export default async function boligSearchPage({searchParams}) {
  const search_text = searchParams.search_text;
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const fetchedBoligData = await response.json();

 
  let allBoligData;
  if(search_text!==""){

    allBoligData =   fetchedBoligData.filter(bolig=> 
           bolig.postalcode === search_text  // filter by postcode
        || bolig.city.toLowerCase().includes(search_text)  // filter by city
        || bolig.adress1.toLowerCase().includes(search_text)  // filter by address
        || bolig.type.toLowerCase().includes(search_text)  // filter by bolig type
    )
  }else{
    allBoligData = fetchedBoligData;
  }


  return (
    <>
    <PageTitle title="Searched Bolig"/>
      <div className="pl-[17em] mt-[4em]">
        <SearchFieldHero search_text={search_text} />
      </div>
      <div className="grid grid-cols-2 place-content-around px-[15em] pt-[2em]">
        {allBoligData.map((bolig) => (
          <Link href={`/boligTilSalg/${bolig.id}`} key={bolig.id}>
            <BoligCard key={bolig.id} bolig={bolig} />
          </Link>
        ))}
        {allBoligData.length<1? <p>No result found for search criteria: "{search_text}"</p>: ""}
      </div>
    </>
  );
}
