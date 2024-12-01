import Image from "next/image";
import social1 from "../assets/images/Social1.png";
import love from "../assets/images/Love.png";
import call1 from "../assets/images/call1.png";
import paperPlane1 from "../assets/images/paper-plane1.png";

export default async function AnsvaligMælgerCard({ agent }) {
  return (
    <>
      <section >
        <div className="flex justify-center mb-[2em] p-[2em] border-neutral-200 border-2">
          <div className="relative">
            <Image
              src={agent.image.url}
              height={100}
              width={200}
              alt="agent"
              className="h-[15em] w-[15em] max-w-fit object-cover"
            />
            <Image
              src={social1}
              height={200}
              width={400}
              alt="social1"
              className="h-[2em] w-[6em] absolute bottom-[2.5em]"
            />
          </div>

          <div className="ml-[3em]">
            <div className="flex justify-between">
              <h2 className="font-semibold">{agent.name}</h2>
              <Image src={love} height={30} width={30} alt="love" />
            </div>
            <span className="text-sm">Statsautoriseret ejendomsmægler</span>
            <div className="h-[.1em] w-[4em] bg-slate-400 mt-[1em]"></div>

            <div className="flex justify-start items-center my-[1em]">
              <Image
                src={call1}
                height={30}
                width={10}
                alt="call1"
                className="h-[1em] w-[1em]"
              />
              <span className="ml-[.5em] text-sm">{agent.phone}</span>
            </div>
            <div className="flex justify-start items-center">
              <Image
                src={paperPlane1}
                height={20}
                width={20}
                alt="paperPlane1"
                className="h-[1em] w-[1em]"
              />
              <span className="ml-[.5em] text-sm">{agent.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
