"use client";
import Image from "next/image";
import Link from "next/link";
import love from "../assets/images/love.png";
import loveblack from "../assets/images/loveblack.png";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function BoligCard({ bolig }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favouriteHomes, setFavouriteHomes] = useState([]);
  const token = getCookie("dm_token");
  const userId = getCookie("dm_userid");

  // Fetch the current user's favorite homes when the component loads
  useEffect(() => {
    const fetchFavorites = async () => {
      if (token) {
        const res = await fetch("https://dinmaegler.onrender.com/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setFavouriteHomes(data.homes || []);
        setIsFavorite(data.homes?.includes(bolig.id) || false);
      }
    };

    fetchFavorites();
  }, [token, bolig.id]);

  // Toggle favorite status
  const handleToggleFavorite = async (e) => {
    e.preventDefault()
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favouriteHomes.filter((id) => id !== bolig.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favouriteHomes, bolig.id];
    }

    setIsFavorite(!isFavorite);
    setFavouriteHomes(updatedFavorites); // Update local list of favorites

    // Send the updated favorites list to the server
    if (userId) {
      await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ homes: updatedFavorites }),
      });
    }
  };

  return (
    <section className="p-[2em]">
      <Link href={`/boligTilSalg/${bolig.id}`}>
        <Image
          src={bolig.images[0].url}
          height={250}
          width={200}
          alt="bolig"
          className="h-[15em] w-[100%]"
        />
      

      <div className="h-[2em] w-[2em] rounded-full flex justify-center items-center bg-white">
        <Image
          src={isFavorite ? loveblack : love}
          height={30}
          width={30}
          alt="love"
          onClick={handleToggleFavorite}
        />
      </div>

      <div className="pl-[2em] pt-[1em] border-b-2 pb-[1em]">
        <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
        <p className="text-xs">
          {bolig.postalcode} {bolig.city}
        </p>
        <span>
          {bolig.type}.
          <span className="text-xs">Ejerudgift : {bolig.netto} kr</span>
        </span>
      </div>
      </Link>
    </section>
  );
}
