import Image from "next/image";
import email from "../assets/images/email.png";
import call from "../assets/images/call.png";
import user from "../assets/images/user.png";
import logo from "../assets/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="h-[2.5em] w-[100%] bg-[#162A41] text-white flex justify-around">
          <div className="flex justify-around items-center h-full w-[18em]">
            <Image src={email} height={150} width={150} alt="vector" />

            <Image src={call} height={100} width={100} alt="call" />
          </div>
          <div className="flex items-center justify-between w-[5em]">
            <Image src={user} height={20} width={20} alt="user" />
            <span>Log ind</span>
          </div>
        </div>
        <div className="flex justify-around items-center h-[5em] px-[10em]">
          <Link href="/">
            <Image src={logo} height={250} width={250} alt="logo" />
          </Link>
          <nav className="text-[1em]">
            <ul className="flex">
              <li>
                <Link href="/boligTilSalg" className="mr-8">
                  Boliger til salg
                </Link>
              </li>
              <li>
                <a href="" className="mr-8">
                  Mæglere
                </a>
              </li>
              <li>
                <a href="" className="mr-8">
                  Mine favoritter
                </a>
              </li>
              <li>
                <a href="">Kontakt os</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
