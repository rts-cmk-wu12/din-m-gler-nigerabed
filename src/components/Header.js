"use client"
import Image from "next/image";
import email from "../assets/images/email.png";
import call from "../assets/images/call.png";
import user from "../assets/images/user.png";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; 


import { signOut } from "next-auth/react";

export default function Header() {
  const path = usePathname()
 
 
  return (
    <>
      <header className="sticky top-0 bg-white z-[999]">
        <div className="h-[2.5em] w-[100%] bg-[#162A41] text-white flex justify-around">
          <div className="flex justify-around items-center h-full w-[18em]">
            <Image src={email} height={150} width={150} alt="vector" />

            <Image src={call} height={100} width={100} alt="call" />
          </div>
          <Link href="/login">
          <div className="flex items-center justify-between w-[5em] mt-[.4em]">
            <Image src={user} height={20} width={20} alt="user" />
          <span>Log ind</span>
            
          </div>
          </Link>
        </div>
        <div className="flex justify-around items-center h-[5em] px-[10em]">
          <Link href="/">
            <Image src={logo} height={250} width={250} alt="logo" />
          </Link>
          <nav className="text-[1em]">
            <ul className="flex">
              <li>
                <Link href="/boligTilSalg" className={`${path === "/boligTilSalg" ? "text-red-500" : "text-black"} mr-8`}>
                  Boliger til salg
                </Link>
              </li>
              <li>
                <Link href="/alleMedarbejder" className={`${path === "/alleMedarbejder" ? "text-red-500" : "text-black"} mr-8`}>
                  Mæglere
                </Link>
              </li>
              <li>
                <Link href="/alleFavouritter" className={`${path === "/alleMedarbejder" ? "text-red-500" : "text-black"} mr-8`}>
                  Mine favoritter
                </Link>
              </li>
              <li>
                <Link href="/kontaktOs" className={`${path === "kontaktOs" ? "text-red-500" : "text-black"} mr-8`}>Kontakt os</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
