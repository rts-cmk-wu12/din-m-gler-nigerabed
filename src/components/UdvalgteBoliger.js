import Link from "next/link";
import BoligCard from "./BoligCard";

export default async function UdvalgteBoliger() {
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const allBoligDataata = await response.json();
  // console.log("Bolig Dataaaa", allBoligDataata);
  const firstFourBolig = allBoligDataata.slice(0, 4);
  // console.log(firstFourBolig);

  return (
    <section className="bg-[#F8F8FB] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center h-[10em]">
        <h2 className="font-bold text-[1.3em] mb-[.5em]">Udvalgte Boliger</h2>
        <span className="text-xs text-center">
          There are many variations of passages of Lorem Ipsum available but the
          this in <br />
          majority have suffered alteration in some
        </span>
      </div>
      <div className="grid grid-cols-2 place-content-around px-[15em]">
        {firstFourBolig.map((bolig) => (
            <div key={bolig.id} >
                <BoligCard bolig={bolig} />
            </div>
        ))}
      </div>
      <Link href="/boligTilSalg">
        <button className="bg-[#162A41] text-white h-[2.3em] w-[10em] rounded-[.2em] ml-[.5em] mt-[1em] mb-[4em]">Se alle boliger</button>
      </Link>
    </section>
  );
}
