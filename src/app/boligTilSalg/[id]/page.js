import Image from "next/image";

import AnsvaligMælgerCard from "@/components/AnsvaligMælgerCard";

import ModalImageGallery from "@/components/ModalImageGallery";


export default async function BoligDetails({ params,searchParams }) {

  const response = await fetch(
    `https://dinmaegler.onrender.com/homes/${params.id}`
  );
  const BoligDetailsData = await response.json();
  //console.log("BoligDetailsData", BoligDetailsData.agent);
  return (
    <>
  
      <Image
        src={BoligDetailsData.images[0].url}
        height={800}
        width={500}
        alt="bolig"
        className="h-[40em] w-full "
      />
   <ModalImageGallery  image={searchParams.image} BoligDetailsData={BoligDetailsData} />
   
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
        <div className="z-[-1]">
            <h3 className="text-lg font-semibold mb-[1em]">Ansvalig mægler</h3>
          <AnsvaligMælgerCard agent={BoligDetailsData.agent} />
        </div>
      </section>
    </>
  );
}
