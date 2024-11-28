import Image from "next/image";

export default function BoligCard({ bolig }) {
  // console.log(bolig);
  const BgColors = {
    "A": "#008000",  // Grøn
    "B": "#FFD700",  // Gul
    "C": "#FF7F00",  // Orange
    "D": "#FF0000",  // Rød
};

const energyLabelColor = BgColors[bolig.energylabel];

//   function formatPrice(millionNumber) {
//     const inThousands = millionNumber / 10; // Convert to thousands
//     return inThousands.toLocaleString("en-US", {
//       style: "currency",
//       currency: "DKK",
//     });
//   }

  return (
    <section className="p-[2em]">
      <Image
        src={bolig.images[0].url}
        height={250}
        width={200}
        alt="bolig"
        className="h-[15em] w-[100%]"
      />
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
