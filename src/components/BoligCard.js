import Image from "next/image";

import group4 from "../assets/images/Group4.png"

export default function BoligCard({ bolig }) {
  // console.log(bolig);
  const BgColors = {
    "A": "#008000",  // Grøn
    "B": "#FFD700",  // Gul
    "C": "#FF7F00",  // Orange
    "D": "#FF0000",  // Rød
};

const energyLabelColor = BgColors[bolig.energylabel];

  return (
    <section className=" relative p-[2em]">
      <Image
        src={bolig.images[0].url}
        height={250}
        width={200}
        alt="bolig"
        className="h-[15em] w-[100%]"
      />
      <div  className="absolute top-[3em] right-[4em] h-[2.5em] w-[2.5em] rounded-full bg-white flex justify-center items-center">

      <Image src={group4}
        height={30}
        width={30}
        alt="love"
       />
      </div>
      <div className="pl-[2em] pt-[1em] border-b-2 pb-[1em]">
        <div>
          <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
          <p className="text-xs">
            {bolig.postalcode} {bolig.city}
          </p>
          <span>
            {bolig.type}.{" "}
            <span className="text-xs">Ejerudgift : {bolig.netto} kr</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-[1em]">
        <div className="flex">
          <span className="bg-green-600 h-[1.5em] w-[1em] mr-[1em] text-center"  style={{backgroundColor: energyLabelColor}}>
            {bolig.energylabel}
          </span>
          <span className="text-xs">
            {bolig.rooms} værelser • {bolig.livingspace} m²
          </span>
        </div>
        <span>kr. {bolig.price.toLocaleString("da-DK")} </span>
      </div>
    </section>
  );
}
