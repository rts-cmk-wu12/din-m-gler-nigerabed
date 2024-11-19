import Image from "next/image";

export default function BoligCard({bolig}) {
    console.log(bolig);

    function formatPrice(millionNumber) {
        const inThousands = millionNumber / 1000; // Convert to thousands
        return inThousands.toLocaleString('en-US', { style: 'currency', currency: 'DKK' });
    }
    
  return (
    <section className="w-[25em] p-[2em]">
      <div className="border-b-2 pb-[1em]">
        <Image src={bolig.images[0].url} height={250} width={300} alt="bolig" />
      
        <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
        <p className="text-xs">{bolig.postalcode} {bolig.city}</p>
        <span>
        {bolig.type}. <span className="text-xs">Ejerudgift : {bolig.netto} kr</span>
        </span>
      </div>
      <div className="flex justify-between mt-[1em]">
        <div className="flex">
          <span className="bg-green-600 h-[1.5em] w-[1em] mr-[1em] text-center">{bolig.energylabel}</span>
          <span className="text-xs">{bolig.rooms} værelser • {bolig.livingspace} m²</span>
        </div>
        <span> {formatPrice(bolig.price)} </span>
      </div>
    </section>
  );
}
