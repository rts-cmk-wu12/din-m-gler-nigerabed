"use server";

import { z } from "zod";

const agentFormSchema = z.object({
  name: z.string().min(1, { message: "This fiels is requred" }),
  email: z
    .string()
    .min(1, { message: "This fiels is requred, " })
    .email({ message: "Invalid email address" }),
});

export async function agentKontaktForm(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  const validated = agentFormSchema.safeParse({
    name,
    email,
  });
  if (!validated.success) {
    return validated.error.format();
  }
  return validated;
}
