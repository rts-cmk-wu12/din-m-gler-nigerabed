"use server";
import { cookies } from "next/headers"
import { z } from "zod";

export async function userLogin(state, formData) {

  const { identifier, password } = Object.fromEntries(formData)
  const cookieStore = await cookies()

// const userSchema = z.object({
//   email: z.string()
//     .min(1, { message: "This fiels is requred, " })
//     .email({ message: "Invalid email address" }),
//   password: z.string()
//     .min(1, { message: "This fiels is requred, " })
//     .password({ message: "Invalid email address" }),
// });

const schema = z.object({
  identifier: z.string().email({ message: "Ugyldig email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
})
  

  // const email = formData.get("email");
  // const password = formData.get("password");

  const result = schema.safeParse({ identifier, password })

	if (!result.success) return result.error.format()
  


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
	
	cookieStore.set("dm_token", data.jwt)
	cookieStore.set("dm_userid", data.user.id)
  
	return { success: true }
}
