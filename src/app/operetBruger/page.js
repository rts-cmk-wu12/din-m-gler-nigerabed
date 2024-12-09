import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";

export default function operetBruger() {
  return (
    <>
      <PageTitle title={"Account register"} />
      <section className="flex flex-col justify-center items-center w-full">
        <form className="w-[25em] p-[2em] border-solid border-neutral-200 border-2 my-[3em]">
          <h3 className="text-lg font-semibold mb-[1em] text-center">
          Opret bruger hos Din Mægler
          </h3>
          <label htmlFor="" className="text-sm block mt-[1em]">
            Fulde navn
            <input
              type="text"
              placeholder="fulde navn"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
              name="text"
            />
           
          </label>
          <label htmlFor="" className="text-sm block mt-[1em]">
            Email Address
            <input
              type="Email"
              placeholder="Email address"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
              name="identifier"
            />
            
          </label>
          <label htmlFor="" className="text-sm block mt-[1em]">
            Password
            <input
              type="Password"
              name="password"
              placeholder="Indtast password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
            />
          </label>
          <label htmlFor="" className="text-sm block mt-[1em]">
            Bekræft Password
            <input
              type="Password"
              name="Bekræft password"
              placeholder="Bekræft password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[1em]"
            />
          </label>
         
        
          <Button text={"Operet bruger"} width={100} unit={"%"} />

        </form>
      </section>
    </>
  );
}
