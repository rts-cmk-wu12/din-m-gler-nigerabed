import logo from "../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import icon1 from "../assets/images/Icon1.png";
import icon2 from "../assets/images/Icon2.png";
import icon3 from "../assets/images/Icon3.png";

export default function Footer() {
  return (
    <footer className="bg-[#E5E5E5]">
      <div className="grid grid-cols-2 grid-rows-2">
      <article className="col-span-2 mt-[4em] pl-[8em] ml-[10em]">
        <Link href="/">
          <Image src={logo} height={250} width={250} alt="logo"/>
        </Link>
        <p className="text-sm mt-[1em]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br />
          suffered alteration in some form, by injected humour, or randomised
          words.
        </p>
      </article>
      <section className="bg-white shadow-2xl row-start-2 col-start-1 row-span-2 z-10 p-[2em] mb-[4em] w-[20em] ml-[20em]">
        
          <div className="flex my-[1em]">
            <Image src={icon1} height={40} width={40} alt="icon" className="h-[3em]" />
            <div className="ml-[1em]">
              <span className="text-[.7em]">Ring til os</span>
              <p>+45 7070 4000</p>
            </div>
          </div>
          <div className="flex my-[1em]">
            <Image src={icon2} height={40} width={40} alt="icon" />
            <div className="ml-[1em]">
              <span className="text-[.7em]">Send en mail</span>
              <p>4000@dinmaegler.com</p>
            </div>
          </div>
          <div className="flex my-[1em]">
            <Image src={icon3} height={40} width={40} alt="icon" />
            <div className="ml-[1em]">
              <span className="text-[.7em]">Butik</span>
              <p>Stændertorvet 78, 4000 Roskilde</p>
            </div>
          </div>
          <p className="text-sm mt-[1.5em]">
            Din Mægler Roskilde, er din <br />
            boligibutik i lokalområdet.
          </p>
        
      </section>
      <section className="col-start-2">
      
          <ul>
            <h3 className="font-bold mb-[1em]">Quick Links</h3>
            <li className="text-[.8em] mb-[.5em]">
              <Link href="/boligTilSalg">Boliger til salg</Link>
            </li>
            <li className="text-[.8em] mb-[.5em]">
              <Link href="/mælgere">Mælgere</Link>
            </li>
            <li className="text-[.8em] mb-[.5em]">
              <Link href="">Kontakt os</Link>
            </li>
            <li className="text-[.8em] mb-[.5em]">
              <Link href="">Log ind/ bliv bruger</Link>
            </li>
          </ul>
    
      </section>
      <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-3 z-[0]">
        <div className="col-start-2 p-[2em]">
            <span>Medlem af</span>
            <p >DMS</p>
            <span>Dansk Mægler Sammenslutning</span>
            </div>
      </section>
      </div>
      <section className="bg-[#162A41] h-[3em] text-white flex justify-center items-center ">
        <span className="text-xs">Layout By Jit Banik 2020</span>
      </section>
    </footer>
  );
}
