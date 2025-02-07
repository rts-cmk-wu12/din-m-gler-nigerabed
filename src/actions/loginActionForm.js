"use server";
import { cookies } from "next/headers"
import { z } from "zod";

export async function userLogin(state, formData) {

  const { identifier, password } = Object.fromEntries(formData)
  const cookieStore = await cookies()

const schema = z.object({
  identifier: z.string().email({ message: "Ugyldig email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
})
  
  const result = schema.safeParse({ identifier, password })

	if (!result.success) return result.error.format()
  

try{

	const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
    method: "POST",
		headers: {
      "content-type": "application/json"
		},
		body: JSON.stringify({
            identifier,
			password
		})
	})
  
	const data = await response.json()
  
	console.log(data)
	
	cookieStore.set("dm_token", data.jwt, {maxAge: 60 * 60* 24})
	cookieStore.set("dm_userid", data.user.id, {maxAge: 60 * 60* 24})
  
	return { success: true }
}catch (error) {
	throw new Error(error)
}
}
