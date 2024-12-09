import { button } from "@nextui-org/react";


export default function Button({text,width=10, unit="em", type="submit"}){
    return(
        <button className={`bg-[#162A41] text-white h-[2.3em] w-[${width}${unit}] rounded-[.2em] mt-[1em] mb-[3em]`} type={type}>{text}</button>
    )
}