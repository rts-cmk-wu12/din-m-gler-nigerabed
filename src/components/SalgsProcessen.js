import Image from "next/image";
import phone from "../assets/images/phone.png";
import apple from "../assets/images/Apple.png";
import play from "../assets/images/Play.png";

export default function SalgsProcessen() {
  return (
    <section className="bg-[#162A41] mt-[5em] px-[23em] text-white flex pt-[3em]">
      <div className="mr-[6em]">
        <h2 className="text-lg font-bold mb-[1em]">
          Hold dig opdateret <br />
          på salgsprocessen
        </h2>
        <span className="text-xs">
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den{" "}
          <br />
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på <br /> interessen for din bolig i alle vores
          salgskanaler.
        </span>
        <div className="flex mt-[1em]">
          <Image src={play} height={150} width={100} alt="play" className="mr-[1em]"/>
          <Image src={apple} height={150} width={100} alt="apple" />
        </div>
      </div>
      <Image src={phone} height={250} width={240} alt="phone" className="" />
    </section>
  );
}
