
import MedarbejderCard from "./MedarbejderCard";
import Link from "next/link";
import Button from "./Button";
import NyhedsBrev from "./NyhedsBrev";

export default async function Medarbejdersection() {
  const response = await fetch("https://dinmaegler.onrender.com/agents");
  const allAgentsData = await response.json();
  // console.log("allBoligDataaaa", allBoligData);
  const firstThreeMedarbejder = allAgentsData.slice(0, 3);
  // console.log(firstThreeMedarbejder);

  return (
    <>
     <NyhedsBrev/>
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
