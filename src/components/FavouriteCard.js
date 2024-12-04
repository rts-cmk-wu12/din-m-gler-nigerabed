import Button from "./Button";

export default function FavouriteCard() {
//   const BgColors = {
//     A: "#008000", // Grøn
//     B: "#FFD700", // Gul
//     C: "#FF7F00", // Orange
//     D: "#FF0000", // Rød
//   };

//   const energyLabelColor = BgColors[bolig.energylabel];

  return (
    <section>
      <div>
        <img src="" alt="" />
        <div>
          <div className="pl-[2em] pt-[1em] border-b-2 pb-[1em]">
            <div>
              <address className="font-semibold mb-[1em]">address</address>
              <p className="text-xs">City</p>
              <span>
                Udgift
                <span className="text-xs">Ejerudgift : 00000 kr</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[1em]">
        <div>
          <div className="flex">
            <span
              className="bg-green-600 h-[1.5em] w-[1em] mr-[1em] text-center"
            //   style={{ backgroundColor: energyLabelColor }}
            >
              {}
            </span>
            <span className="text-xs">
              {} værelser • 0000 m²
            </span>
          </div>
          <span>kr. 000 </span>
        </div>
        <Button text={"Fjern fra favoritter"}/>
      </div>
    </section>
  );
}
