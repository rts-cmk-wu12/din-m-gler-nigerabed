"use client"

import Button from "@/components/Button";
import Image from "next/image";
import google from "../../assets/images/Google.png";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import PageTitle from "@/components/PageTitle";
import { userLogin} from "../../actions/loginActionForm";
import {useActionState, useEffect} from "react"
import { redirect } from "next/navigation";

export default function login() {
  const [formState, formAction] = useActionState(userLogin, null);

  useEffect(function() {
		if (!formState) return

		if (!formState.success) {
			alert("FEJL!!")
		}

		if (formState.success) {
			redirect("/")
		}
	}, [formState])

  return (
    <>
    <PageTitle title={"Account Login"}/>
      <section className="flex flex-col justify-center items-center w-full">
        <form
          action={formAction}
          method="POST"
          className="w-[20em] p-[2em] border-solid border-neutral-200 border-2 my-[3em]"
        >
          <h3 className="text-lg font-semibold mb-[1em] text-center">
            Log ind på din konto
          </h3>
          <label htmlFor="" className="text-sm block">
            Email
            <input
              type="Email"
              placeholder="Email"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
              name="identifier"
            />
            <span className="text-red-600 text-[.8em] mt-[.3em]">{formState?.identifier?._errors.map(error => error)}</span>
          </label>
          <label htmlFor="" className="text-sm block">
            Password
            <input
              type="Password"
              name= "password"
              placeholder="Indtast password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em]"
            />
          </label>
          <span className="text-red-600 text-xs mt-[.3em]">{formState?.password?._errors.map(error => error)}</span>
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
