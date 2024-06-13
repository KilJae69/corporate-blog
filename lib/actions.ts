"use server";

import {  contactFormSchema } from "./types";

export const contactAction = async (formData: unknown) => {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    throw new Error("Server validation failed");
  }

  const validatedData = result.data;
  console.log(validatedData);
  // await sendEmail(validatedData);
};
