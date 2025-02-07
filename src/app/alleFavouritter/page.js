import FavouriteCard from "@/components/FavouriteCard";
import PageTitle from "@/components/PageTitle";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function alleFavouritter() {
  const cookieStore = await cookies();
  const token = cookieStore.get("dm_token");
  if (token === undefined || token === "") {
    // console.log("helooooo", token);

    redirect("/login");
  }
  // fetch from users/me
  const userRes = await fetch("https://dinmaegler.onrender.com/users/me", {
    method: "get",
    headers: new Headers({
      Authorization: "Bearer " + token.value,
    }),
  });
  const userData = await userRes.json();

  // fetch all homes
  const response = await fetch("https://dinmaegler.onrender.com/homes");
  const fetchedBoligData = await response.json();
  let favouriteBoligs = fetchedBoligData.filter((bolig) =>
    userData.homes.includes(bolig.id)
  );

  return (
    <>
      <PageTitle title={"Alle Favorit Boliger"} />

      {favouriteBoligs.map((bolig) => (
        <FavouriteCard bolig={bolig} key={bolig.id}/>
      ))}
    </>
  );
}
