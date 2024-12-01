import AnsvaligMælgerCard from "@/components/AnsvaligMælgerCard";
import KontactAgentForm from "@/components/KontactAgentForm";
import PageTitle from "@/components/PageTitle";

export default async function AgentsDetailsPage({ params }) {
  const response = await fetch(
    `https://dinmaegler.onrender.com/agents/${params.id}`
  );
  const allagentsDetails = await response.json();
  //   console.log("allagents Dataaaa", allagentsDetails);
  return (
    <>
      <PageTitle title={"Kontakt en medarbejder"} />
      <section className="flex justify-center p-[2em] mt-[2em]">
        <div className="mr-[2em] border-neutral-200 border-2 p-[2em]">
          <AnsvaligMælgerCard
            key={allagentsDetails.id}
            agent={allagentsDetails}
          />
          <div>
            <h3 className="font-semibold">{allagentsDetails.name}</h3>
            <div className="h-[.2em] w-[2.5em] bg-black mt-[.4em]"></div>
            <p className="text-sm my-[1.5em]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority <br />
              have suffered alteration in some form, by injected humour, or
              randomised words <br />
              which don't look even slightly believable. <br /> <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority <br /> have suffered alteration in some form by
              injected humour.
            </p>
          </div>
          <KontactAgentForm agent={allagentsDetails} />
        </div>
        <div>
            <div className="bg-[#EEF7FF] p-[2em]">
                <h3 className=" border-b-2 mb-[2em] pb-[1em] w-[15em] font-semibold">Search Property</h3>
                <input type="text"
                placeholder="Search"
                name="search"
                 className="placeholder:text-slate-400 block bg-white w-[17em] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
            </div>
            <div className="bg-[#162A41] text-white flex flex-col justify-center items-center  py-[3em] text-xl mt-[1em]">
                <h2 className="font-bold ">Find The Best <br /> Property <br /> For Rent Or Buy</h2>
                <div className="h-[.2em] w-[2.5em] bg-gray-400 mt-[.4em]"></div>
                <span className="text-sm my-[1em]">Call Us Now</span>
                <p>{allagentsDetails.phone}</p>
            </div>
        </div>
      </section>
    </>
  );
}
