export default function HeroContainer() {
  return (
    <section className="relative bg-[url('/architecture.jpg')] h-[35em] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50 h-[35em]"></div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white font-bold text-[2.5em] z-10">Søg efter din drømmebolig</h1>
          <div className="bg-white h-[10em] w-[40em] mt-[2em]  p-[2em] z-10">
            <p className="font-semibold mb-[1em]">Søg blandt 158 boliger til salg i 74 butikker</p>
            <span className="text-xs">Hvad skal din næste bolig indeholde</span>
            <div className="w-full flex justify-start items-center">
                <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-[25em] border border-slate-300 rounded-[.3em] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." name="search"/>
                <button className="bg-[#162A41] text-white h-[2.3em] w-[5em] rounded-[.2em] ml-[.5em]">Søg</button>
            </div>
          </div>
        </div>
      
    </section>
  );
}
