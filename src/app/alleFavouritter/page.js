import FavouriteCard from "@/components/FavouriteCard";
import { cookies } from "next/headers";

export default async function alleFavouritter(){
    const cookieStore = await cookies(); 
    const token = cookieStore.get("dm_token");
    // fetch from users/me
   // TODO: fetch from api
   const userRes = await fetch("https://dinmaegler.onrender.com/users/me",{
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Bearer '+ token.value
    })
   });
   const userData = await userRes.json(); 

    // fetch all homes
    const response = await fetch("https://dinmaegler.onrender.com/homes");
    const fetchedBoligData = await response.json();
    let favouriteBoligs=fetchedBoligData.filter(bolig=>userData.homes.includes(bolig.id));

    return(
        <>

            {favouriteBoligs.map(bolig =><FavouriteCard bolig={bolig}/>)}
        
        </>

    )
}