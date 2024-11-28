import arrow from "../assets/images/Arrow.png";
import Image from "next/image";
import MedarbejderCard from "./MedarbejderCard";
import Link from "next/link";
import Button from "./Button";

export default async function Medarbejdersection() {
  const response = await fetch("https://dinmaegler.onrender.com/agents");
  const allAgentsData = await response.json();
  // console.log("allBoligDataaaa", allBoligData);
  const firstThreeMedarbejder = allAgentsData.slice(0, 3);
  // console.log(firstThreeMedarbejder);

  return (
    <>
      <section className="relative bg-[url('/architecture.jpg')] h-[10em] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#162A41] opacity-80"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-bold z-10">
          <p className="text-lg mr-[3em] w-[25em] pl-[3em]">
            Tilmeld dig vores nyhedsbrev og <br />
            hold dig opdateret på boligmarkedet
          </p>
          <label className="relative">
            <Image
              src={arrow}
              height={20}
              width={20}
              alt="arrow"
              className="absolute top-[2em] right-[1em]"
            />
            <input
              type="text"
              placeholder="Indtast din email adresse"
              className="text-sm py-4 pl-2 w-[20em] mt-[.7em] block bg-white border border-slate-300 rounded-[.2em] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
            />
          </label>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center h-[10em]">
        <h2 className="font-bold text-[1.3em] mb-[.5em]">
          Mød vores engagerede medarbejdere
        </h2>
        <span className="text-[.8em] text-center">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.{" "}
          <br />
          Kontakt en af vores medarbejdere.
        </span>
      </div>
      <div className="grid grid-cols-3 place-content-around px-[22em]">
          {firstThreeMedarbejder.map((agent) => (

            
            <MedarbejderCard key={agent.id} agent={agent} />
          ))}
      </div>
      <div className="flex justify-center items-center mt-[2em]">
        <Link href="/alleMedarbejder">
        <Button text={"Se alle mælger"}/>
          {/* <button className="bg-[#162A41] text-white h-[2.3em] w-[10em] rounded-[.2em] ml-[.5em] mt-[1em]">
            Se alle mælger
          </button> */}
        </Link>
      </div>
    </>
  );
}
