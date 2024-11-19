import BoligCard from "@/components/BoligCard";


export default async function boligTilSalg() {
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const allBoligDataata = await response.json();
//   console.log("Bolig Dataaaa", allBoligDataata);
  
  return(

   <>
   {allBoligDataata.map(bolig=> <BoligCard key={bolig.id} bolig={bolig} />)}
   </>
  )
}
