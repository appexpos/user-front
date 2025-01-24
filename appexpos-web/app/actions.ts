"use server";

import { permanentRedirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function updateUsername(username: string, formData: FormData) {
  try {
    // Call database
    console.log(formData);
  } catch (error) {
    console.log(error);
  }

  revalidateTag("username"); // Update all references to the username
  permanentRedirect(`/ios/app/all`); // Navigate to the new user profile
}
