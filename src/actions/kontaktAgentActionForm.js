"use server";

import { z } from "zod";

const agentFormSchema = z.object({
  name: z.string().min(1, { message: "This fiels is requred" }),
  email: z
    .string()
    .min(1, { message: "This fiels is requred, " })
    .email({ message: "Invalid email address" }),
    emne: z.string().min(1, { message: "This emne fiels is requred" })
});

export async function agentKontaktForm(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const emne = formData.get("emne");

  const validated = agentFormSchema.safeParse({
    name,
    email,
    emne,
  });
  if (!validated.success) {
    return validated.error.format();
  }
  return validated;
}
