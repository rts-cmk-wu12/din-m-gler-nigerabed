import Button from "@/components/Button";
import Image from "next/image";
import google from "../../assets/images/Google.png";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import PageTitle from "@/components/PageTitle";

export default function login() {
  return (
    <>
    <PageTitle title={"Account Login"}/>
      <section className="flex flex-col justify-center items-center w-full">
        <form
          action=""
          className="w-[20em] p-[2em] border-solid border-neutral-200 border-2 my-[3em]"
        >
          <h3 className="text-lg font-semibold mb-[1em] text-center">
            Log ind på din konto
          </h3>
          <label htmlFor="" className="text-sm">
            Email
            <input
              type="Email"
              placeholder="Email"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
              name="search"
            />
          </label>
          <label htmlFor="" className="text-sm">
            Password
            <input
              type="Password"
              placeholder="Indtast password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
            />
          </label>
          <Button text={"Login"} width={100} unit={"%"} />
          <div>
            <span className="text-xs">Log ind med</span>
            <div className="flex mt-[.5em]">
              <Image src={google} height={100} width={100} alt="google" className="mr-[.5em] w-[5em]" />
              <Image src={Facebook} height={100} width={100} alt="Facebook" className="mr-[.5em] w-[5em]"/>
              <Image src={Twitter} height={100} width={100} alt="Twitter"className="w-[5em]" />
            </div>
            <p>
              <a href=""></a>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
