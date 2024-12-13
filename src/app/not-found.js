// app/not-found.js
import Image from "next/image";
import Link from "next/link";
import hov from "../assets/images/hov.png";
import Button from "@/components/Button";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EEF7FF] text-gray-800">
      <Image src={hov} height={200} width={300} alt="hov" />
      <h1 className="text-xl font-bold mt-[2em]">
        Du er havnet på en side som ikke findes!
      </h1>
      <p className="mt-4 text-sm">
        Det er vi kede af! Vi har sendt en besked af sted til vores <br />
        internetbureau, og bedt dem se på fejlen.{" "}
      </p>

      <Link href="/">
        <Button text="Tilbage til forsiden" />
      </Link>
    </div>
  );
}
