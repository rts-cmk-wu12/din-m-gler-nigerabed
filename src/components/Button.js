import { button } from "@nextui-org/react";


export default function Button({text}){
    return(
        <button className="bg-[#162A41] text-white h-[2.3em] w-[10em] rounded-[.2em] ml-[.5em] mt-[1em]">{text}</button>
    )
}