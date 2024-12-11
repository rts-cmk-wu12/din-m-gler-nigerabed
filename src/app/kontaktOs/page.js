import KontactAgentForm from "@/components/KontactAgentForm";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import icon1 from "../../assets/images/Icon1.png";
import icon2 from "../../assets/images/Icon2.png";
import icon3 from "../../assets/images/Icon3.png";

export default function KontaktOs() {
  return (
    <>
      <PageTitle title="Kontakt Os" />
      <section className="mb-[4em]">
        <div className="m-[4em] px-[18em]">
          <h2 className="font-semibold text-[1.2em]">Vi sidder klar til at besvare dine spørgsmål</h2>
          <div className="h-[.2em] w-[5em] bg-black my-[.4em]"></div>
          <p className="text-sm mt-[1.5em]">
            Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
            med at sælge sin bolig. <br />
            Vores medarbejdere sider klar alle ugens dage til at svare på dine
            spørgsmål.
          </p>
        </div>
        <div className="flex justify-center items-center mt-[3em]">
          <KontactAgentForm checkbox= {true}/>
          <div className=" w-[20em] p-[1em] border-solid border-neutral-200 border-2 ml-[2em] flex flex-col justify-center items-center">
            <div className="border-b-2 pb-[.5em] m-[1em] w-full flex flex-col justify-center items-center">
              <Image
                src={icon1}
                height={40}
                width={40}
                alt="icon"
                className="h-[3em] w-[3em]"
              />
              <span className="text-[.7em] my-[.5em]">Ring til os</span>
              <p  className="text-sm">+45 7070 4000</p>
            </div>
            <div className="border-b-2 pb-[.5em] m-[1em] w-full flex flex-col justify-center items-center">
              <Image
                src={icon2}
                height={40}
                width={40}
                alt="icon"
                className="h-[3em] w-[3em]"
              />
              <span className="text-[.7em] my-[.5em]">Send en mail</span>
              <p  className="text-sm">4000@dinmaegler.com</p>
            </div>
            <div className=" m-[1em] w-full flex flex-col justify-center items-center">
              <Image
                src={icon3}
                height={40}
                width={40}
                alt="icon"
                className="h-[3em] w-[3em]"
              />
              <span className="text-[.7em] my-[.5em]">Butik</span>
              <p className="text-sm">Stændertorvet 78, <br /> 4000 Roskilde</p>
            </div>
          </div>
        </div>
      </section>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69945.08266829891!2d12.278565710048452!3d55.674518513085324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1733392425368!5m2!1sen!2sdk"
       width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
