import Button from "./Button";
import Image from "next/image";
export default function FavouriteCard({bolig}) {
  const BgColors = {
    A: "#008000", // Grøn
    B: "#FFD700", // Gul
    C: "#FF7F00", // Orange
    D: "#FF0000", // Rød
  };

  const energyLabelColor = BgColors[bolig.energylabel];

  return (
    <section className="flex m-[3em] justify-center items-start pl-[2em] pt-[1em] border-b-2 pb-[1em]">
      <div className="flex">
      <Image
        src={bolig.images[0].url}
        height={250}
        width={200}
        alt="bolig"
        className="h-[15em] w-[20em]"
      />
        <div>
          <div className="pl-[2em] ">
            <div>
              <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
              <p className="text-sm">{bolig.postalcode} {bolig.city}</p>
              <span>
               
                <span className="font-semibold"> {bolig.type} </span>
                <span className="text-sm block"> Ejerudgift : {bolig.netto} kr</span>
                   
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end h-[8em] ml-[3em]">
        <div className="flex justify-between w-[20em]">
          <div className="">
            <span
              className="bg-green-600 h-[2em] w-[2em] mr-[1em] text-center"
              style={{ backgroundColor: energyLabelColor }}
            >
              {bolig.energylabel}
            </span>
            <span className="text-xs">
            {bolig.rooms} værelser • {bolig.livingspace} m²
            </span>
          </div>
          <span className="font-semibold">kr. {bolig.price.toLocaleString("da-DK")} </span>
        </div>
        <Button text={"Fjern fra favoritter"}/>
      </div>
    </section>
  );
}
