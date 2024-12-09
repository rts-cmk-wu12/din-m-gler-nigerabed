
import KontactAgentForm from "@/components/KontactAgentForm";
import MedarbejderCard from "@/components/MedarbejderCard";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function alleMedarbejder() {
  const response = await fetch("https://dinmaegler.onrender.com/agents");
  const allAgentsDataata = await response.json();
  // console.log("Bolig Dataaaa", allAgentsDataata);

  return (
    <>
      <PageTitle title={"Alle Medarbejdere"} />
     
      <div className="grid grid-cols-3 place-content-around px-[15em] pt-[2em] mb-[2em]">
        {allAgentsDataata.map((agent) => (
          <Link href={`/alleMedarbejder/${agent.id}`}>
            <MedarbejderCard key={agent.id} agent={agent} />
          </Link>
        ))}
      </div>
    </>
  );
}
