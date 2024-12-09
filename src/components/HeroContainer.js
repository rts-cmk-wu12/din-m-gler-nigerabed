import SearchFieldHero from "./SearchFieldHero";
 
export default async function HeroContainer() {

  const response = await fetch(
    `https://dinmaegler.onrender.com/homes`
  );
  const BoligDetailsData = await response.json();
  return (
    <section className="relative bg-[url('/architecture.jpg')] h-[35em] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50 h-[35em]"></div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white font-bold text-[2.5em] z-10">Søg efter din drømmebolig</h1>
          <div className="bg-white h-[10em] w-[40em] mt-[2em]  p-[2em] z-10">
            <p className="font-semibold mb-[1em]"><span className="border-b-[3px] border-[#162A41]">Søg</span> blandt {BoligDetailsData.length} boliger til salg i 74 butikker</p>
            <span className="text-xs">Hvad skal din næste bolig indeholde</span>
            <div className="w-full flex justify-start items-center">
              <SearchFieldHero/>
            </div>
          </div>
        </div>
      
    </section>
  );
}
