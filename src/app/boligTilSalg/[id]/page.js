import Image from "next/image";
import group1 from "../../../assets/images/Group1.png";
import group2 from "../../../assets/images/Group2.png";
import group3 from "../../../assets/images/Group3.png";
import group4 from "../../../assets/images/Group4.png";

export default async function BoligDetails({ params }) {
  const response = await fetch(
    `https://dinmaegler.onrender.com/homes/${params.id}`
  );
  const BoligDetailsData = await response.json();
//   console.log("BoligDetailsData", BoligDetailsData);
  return (
    <>
      <Image
        src={BoligDetailsData.images[0].url}
        height={500}
        width={400}
        alt="bolig"
        className="h-[35em] w-[100%] object-cover"
      />
      <section className=" px-[15em] py-[2em]  ">
        <div className="flex justify-between items-center border-b-2 pb-[2em]">
          <div className="font-semibold text-lg">
            <h2>{BoligDetailsData.adress1}</h2>
            <span className="mr-[.3em]">{BoligDetailsData.postalcode}</span>
            <span>{BoligDetailsData.city}</span>
          </div>
          <div className="flex justify-around w-[10em] h-[2em]">
            <Image
              src={group1}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em] h-[1.5em] w-[2.5em]"
            />
            <Image
              src={group2}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em]  h-[1.5em] w-[2.5em]"
            />
            <Image
              src={group3}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em]  h-[1.5em] w-[2.5em]"
            />
            <Image
              src={group4}
              height={20}
              width={20}
              alt="group1"
              className="h-[1.5em] w-[2em]"
            />
          </div>
          <p className="font-semibold text-xl">Kr. {BoligDetailsData.price}</p>
        </div>
      </section>
      <section className="flex justify-around px-[10em] text-sm mb-[3em] leading-6">
        <article>
          <div className="flex justify-between">
            <span>Boligareal:</span>
            <span className="ml-[2em]">{BoligDetailsData.livingspace} m2</span>
          </div>
          <div className="flex justify-between">
            <span>Grundareal:</span>
            <span className="ml-[2em]">{BoligDetailsData.lotsize} m2</span>
          </div>
          <div className="flex justify-between  w-[15em]">
            <span>Rum/Værelser:</span>
            <span className="ml-[2em]">{BoligDetailsData.rooms}</span>
          </div>
          <div className="flex justify-between  w-[15em]">
            <span>Antal plan:</span>
            <span className="ml-[2em]">2</span>
          </div>
        </article>
        <article>
          <div className="flex justify-between">
            <span>Kælder:</span>
            <span className="ml-[2em]">{BoligDetailsData.basementsize}</span>
          </div>
          <div className="flex justify-between">
            <span>Byggeår:</span>
            <span className="ml-[2em]">{BoligDetailsData. built}</span>
          </div>
          <div className="flex justify-between">
            <span>Ombygget:</span>
            <span className="ml-[2em]">{BoligDetailsData. remodel}</span>
          </div>
          <div className="flex justify-between">
            <span>Energymæke:</span>
            <span className="ml-[2em] ">{BoligDetailsData.energylabel}</span>
          </div>
         
        </article>
        <article>
          <div className="flex justify-between w-[15em]">
            <span>Udbetailing:</span>
            <span className="ml-[2em]">Kr. {BoligDetailsData.payment}</span>
          </div>
          <div className="flex justify-between  w-[15em]">
            <span>Brutto:</span>
            <span className="ml-[2em]">Kr. {BoligDetailsData.cost}</span>
          </div>
          <div className="flex justify-between  w-[15em]">
            <span>netto:</span>
            <span className="ml-[2em]">Kr. {BoligDetailsData.netto}</span>
          </div>
          <div className="flex justify-between  w-[15em]">
            <span>Ejerudgifter:</span>
            <span className="ml-[2em]">Kr. {BoligDetailsData.gross}</span>
          </div>
         
        </article>
      </section>
    </>
  );
}
