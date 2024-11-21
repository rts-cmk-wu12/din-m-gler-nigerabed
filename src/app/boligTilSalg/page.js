import BoligCard from "@/components/BoligCard";

export default async function boligTilSalg() {
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const allBoligDataata = await response.json();
    console.log("Bolig Dataaaa", allBoligDataata);

  return (
    <>
      <div className="relative bg-[url('/architecture.jpg')] h-[8em] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#162A41] opacity-80"></div>

        <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold text-[2.5em] z-10">
          Boliger til salg
        </h2>
      </div>
      <div>
        <h3>Søg efter dit drømmehus</h3>
      </div>
      <div className="grid grid-cols-2 place-content-around px-[15em] pt-[2em]">
        {allBoligDataata.map((bolig) => (
          <BoligCard key={bolig.id} bolig={bolig} />
        ))}
      </div>
    </>
  );
}
