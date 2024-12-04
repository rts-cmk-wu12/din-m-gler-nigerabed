"use client";
import { useState } from "react";
import arrow from "../assets/images/Arrow.png";
import Image from "next/image";

export default function NyhedsBrev() {
    const [subscribed, setSubscribed] = useState(false); // State to track subscription status
    const [message, setMessage] = useState(""); // State to track the message
 

  async function handleEmailSubmit(e) {
    e.preventDefault();
   
    const response = await  fetch("https://dinmaegler.onrender.com/subscribers", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body":JSON.stringify(
            {
                "email": e.target.email.value
              }
        ) 
    })
    const brevData = await response.json();
      console.log("Brev Dataaaa", brevData);


      if (response.ok) {
        setSubscribed(true); // Set subscription state to true
        setMessage("Tak for din tilmelding!"); // Display success message
        e.target.reset(); // Clear the input field
      } else {
        setSubscribed(false);
        setMessage("Du er allerele tilmeldt"); // Display error message
      }


  }

  return (
    <section className="relative bg-[url('/architecture.jpg')] h-[10em] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#162A41] opacity-80"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white font-bold z-10">
        <p className="text-lg mr-[3em] w-[25em] pl-[3em]">
          Tilmeld dig vores nyhedsbrev og <br />
          hold dig opdateret på boligmarkedet
        </p>
        <form action="" onSubmit={handleEmailSubmit}>
          <label className="relative">
            <button type="submit">
            <Image
              src={arrow}
              height={20}
              width={20}
              alt="arrow"
              className="absolute top-[3.2em] right-[2em]"
            />
            </button>
            <input
              type="text"
              placeholder="Indtast din email adresse"
              className="text-sm py-4 pl-2 text-black w-[20em] mt-[.7em] block bg-white border border-slate-300 rounded-[.2em] 
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
              name="email"
            />
          </label>
        </form>
      </div>
      {message && (
        <div className="absolute bottom-0  right-[16em] text-center mb-[.5em]">
          <p
            className={`${
              subscribed ? "text-green-400" : "text-red-400"
            } font-semibold`}
          >
            {message}
          </p>
        </div>
      )}
    </section>
  );
}
