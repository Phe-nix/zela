import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import axios, { AxiosError } from "axios";

/** @type {import('./$types').PageLoad} */
export async function load() {
  if (browser) {
    try {
      const camperToken = localStorage.getItem("camperToken");
      const res = await axios.get("http://localhost:3000/auth/camper/me", {
        headers: {
          Authorization: `Bearer ${camperToken}`,
        },
      });
      if (res.status === 200) {
        goto("/camper");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        localStorage.removeItem("camperToken");
        console.log(errorMessage);
      }
    }
  }
  return {};
}
