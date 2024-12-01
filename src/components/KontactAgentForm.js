import Button from "./Button";
import { Input } from "@nextui-org/react";

export default function KontactAgentForm({ agent }) {
  return (
    <form action="" className="p-[2em] border-solid border-neutral-200 border-2">
      <h1 className="font-semibold">Kontakt {agent.name}</h1>

      <div className="h-[.2em] w-[2.5em] bg-black my-[.4em]"></div>
      <div className="flex">
        <label htmlFor="" className="mr-[1em]">
          Navn
          <input
            type="text"
            placeholder="Indtast navn"
            className="placeholder:text-slate-400 block bg-white w-[20em] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[1em]"
            name="search"
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="text"
            placeholder="Indtast email"
            className="placeholder:text-slate-400 block bg-white w-[20em] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-[1em]"
          />
        </label>
      </div>
      <label htmlFor="">
        Emne
        <input
          type="text"
          name=""
          id=""
          placeholder="Hvad drejer din henvendelse sig om?"
          className="placeholder:text-slate-400 block bg-white w-[41em] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-[1em]"
        />
      </label>
      <label htmlFor="">
        Besked
        <textarea
          name=""
          id=""
          placeholder="Skriv din besked her..."
          className="placeholder:text-slate-400 block bg-white w-[41em] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-[1em]"
        ></textarea>
      </label>
      <Button text={"Send besked"} />
    </form>
  );
}
