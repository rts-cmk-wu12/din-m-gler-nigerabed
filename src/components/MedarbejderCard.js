import Image from "next/image";
import social from "../assets/images/Social.png";
export default function MedarbejderCard({ agent }) {
  
  return (
    <section className="mt-[2em] flex flex-col justify-center items-center">
      <Image
        src={agent.image.url}
        height={150}
        width={250}
        alt="social"
        className="w-[15em] object-contain"
      />
      <div className="text-center mt-[.5em]">
        <h3>{agent.name}</h3>
        <span className="text-[.7em] text-gray-500">Ejendomsmægler, MDMS</span>
        <div className="flex justify-center items-center mt-[1em]">
          <Image
            src={social}
            height={40}
            width={40}
            alt="social"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
