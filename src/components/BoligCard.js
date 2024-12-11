"use client";
import Image from "next/image";
import Link from "next/link";

import love from "../assets/images/love.png";
import loveblack from "../assets/images/loveblack.png";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";



export default function BoligCard({ bolig, isfavorite = false }) {
  const [favouriteHomes, setFavouriteHome] = useState([]);
  const [isFull, setIsFull] = useState(false)

  const token = getCookie("dm_token");
  const userId = getCookie("dm_userid");
 

  useEffect(() => {

    const fetchData = async () => {
         
      const userRes = await fetch("https://dinmaegler.onrender.com/users/me", {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
        })
      });

      const userData = await userRes.json();
        setFavouriteHome(userData.homes);
    };

    fetchData(); 
  
  }, [token]);

  // console.log(bolig);
  const BgColors = {
    A: "#008000", // Grøn
    B: "#FFD700", // Gul
    C: "#FF7F00", // Orange
    D: "#FF0000", // Rød
  };

  const energyLabelColor = BgColors[bolig.energylabel];


  const handlePushFavouriteData = async () => {
    setIsFull(!isFull)

    let updatedHomes;

    if (isfavorite) {
      // Unfavourite the home by removing its ID
      updatedHomes = favouriteHomes.filter((homeId) => homeId !== bolig.id);
      console.log("Unfavourited:", bolig.id);
    } else {
      // Favourite the home by adding its ID
      updatedHomes = [...favouriteHomes, bolig.id];
      console.log("Favourited:", bolig.id);
    }

    setFavouriteHome(updatedHomes); // Update local state

    // Push updated homes to the server
    const response = await fetch("https://dinmaegler.onrender.com/users/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ homes: updatedHomes }), // Send updated list
    });

    const result = await response.json();
    console.log(`Success: ${result.message || "Data pushed successfully"}`);
  };
  

  return (
    <section className="p-[2em] ">
      <Link href={`/boligTilSalg/${bolig.id}`}>
        <Image
          src={bolig.images[0].url}
          height={250}
          width={200}
          alt="bolig"
          className="h-[15em] w-[100%]"
        />
      </Link>

      <div className="h-[2em] w-[2em] rounded-full flex justify-center items-center bg-white">
        <Image
          src={isFull ?  loveblack : love}
          height={30}
          width={30}
          alt="love"
          onClick={handlePushFavouriteData}
        
        />
      </div>
      
      <div className="pl-[2em] pt-[1em] border-b-2 pb-[1em]">
        <div>
          <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
          <p className="text-xs">
            {bolig.postalcode} {bolig.city}
          </p>
          <span>
            {bolig.type}.
            <span className="text-xs">Ejerudgift : {bolig.netto} kr</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-[1em]">
        <div className="flex">
          <span
            className="bg-green-600 h-[1.5em] w-[1em] mr-[1em] text-center"
            style={{ backgroundColor: energyLabelColor }}
          >
            {bolig.energylabel}
          </span>
          <span className="text-xs">
            {bolig.rooms} værelser • {bolig.livingspace} m²
          </span>
        </div>
        <span>kr. {bolig.price.toLocaleString("da-DK")} </span>
      </div>
    </section>
  );
}
