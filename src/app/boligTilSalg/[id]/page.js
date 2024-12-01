import Image from "next/image";
import group1 from "../../../assets/images/Group1.png";
import group2 from "../../../assets/images/Group2.png";
import group3 from "../../../assets/images/Group3.png";
import group4 from "../../../assets/images/Group4.png";
import AnsvaligMælgerCard from "@/components/AnsvaligMælgerCard";

export default async function BoligDetails({ params }) {
  const response = await fetch(
    `https://dinmaegler.onrender.com/homes/${params.id}`
  );
  const BoligDetailsData = await response.json();
  console.log("BoligDetailsData", BoligDetailsData.agent);
  return (
    <>
      <Image
        src={BoligDetailsData.images[0].url}
        height={800}
        width={500}
        alt="bolig"
        className="h-[30em] w-[100%] object-cover"
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
            <span className="ml-[2em]">{BoligDetailsData.built}</span>
          </div>
          <div className="flex justify-between">
            <span>Ombygget:</span>
            <span className="ml-[2em]">{BoligDetailsData.remodel}</span>
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
      <section className="flex justify-center items-start mt-[5em] mb-[7em] px-[15em]">
        <article className="text-xs w-[35em] mr-[2em]">
            <h3 className="text-lg font-semibold mb-[1em]">Beskrivelse</h3>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more or less normal distribution of
          letters as opposed to using Content here content here making it look
          like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default. <br /> <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </article>
        <div className="">
            <h3 className="text-lg font-semibold mb-[1em]">Ansvalig mægler</h3>
          <AnsvaligMælgerCard agent={BoligDetailsData.agent} />
        </div>
      </section>
    </>
  );
}
