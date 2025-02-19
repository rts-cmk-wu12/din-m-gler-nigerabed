"use client";
import Button from "./Button";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function FavouriteCard({ bolig }) {
  const BgColors = {
    A: "#008000", // Grøn
    B: "#FFD700", // Gul
    C: "#FF7F00", // Orange
    D: "#FF0000", // Rød
  };

  const energyLabelColor = BgColors[bolig.energylabel];

  const [favouriteHomes, setFavouriteHome] = useState([]);
  const token = getCookie("dm_token");
  const userId = getCookie("dm_userid");

  let userData;
  useEffect(() => {
    const fetchData = async () => {
      const userRes = await fetch("https://dinmaegler.onrender.com/users/me", {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
        }),
      });

      userData = await userRes.json();
      setFavouriteHome(userData.homes);
    };

    fetchData();
  }, [token]);

  const handleDeletefavourite = async () => {
    let updatedHomes;

    // Unfavourite the home by removing its ID
    updatedHomes = favouriteHomes.filter((homeId) => homeId !== bolig.id);
    console.log("Unfavourited:", bolig.id);

    setFavouriteHome(updatedHomes); // Update local state

    // Push updated homes to the server
    const response = await fetch(
      "https://dinmaegler.onrender.com/users/" + userId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ homes: updatedHomes }), // Send updated list
      }
    );

    const result = await response.json();
    console.log(`Success: ${result.message || "Data pushed successfully"}`);
    redirect("/alleFavouritter")
  };

  return (
    <>
      <section className="flex justify-between items-start pl-[2em] pt-[1em] border-b-2 pb-[1em] w-[60%] m-auto mt-[3em]">
        <div className="flex">
          <Image
            src={bolig.images[0].url}
            height={250}
            width={200}
            alt="bolig"
            className="h-[15em] w-[20em]"
          />
          <div>
            <div className="pl-[2em] ">
              <div>
                <address className="font-semibold mb-[1em]">
                  {bolig.adress1}
                </address>
                <p className="text-sm">
                  {bolig.postalcode} {bolig.city}
                </p>
                <span>
                  <span className="font-semibold"> {bolig.type} </span>
                  <span className="text-sm block">
                    {" "}
                    Ejerudgift : {bolig.netto} kr
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end h-[8em] ml-[3em]">
          <div className="flex justify-between w-[20em]">
            <div className="">
              <span
                className="bg-green-600 h-[2em] w-[2em] mr-[1em] text-center"
                style={{ backgroundColor: energyLabelColor }}
              >
                {bolig.energylabel}
              </span>
              <span className="text-xs">
                {bolig.rooms} værelser • {bolig.livingspace} m²
              </span>
            </div>
            <span className="font-semibold">
              kr. {bolig.price.toLocaleString("da-DK")}{" "}
            </span>
          </div>
          <div onClick={handleDeletefavourite}>
            <Button text={"Fjern fra favoritter"} />
          </div>
        </div>
      </section>
    </>
  );
}
