import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";
import axios, { AxiosError } from "axios";

/** @type {import('./$types').PageLoad} */
export async function load() {
  if (browser) {
    try {
      const camperToken = localStorage.getItem("camperToken");
      const res = await axios.get(`${PUBLIC_API_URL}/auth/camper/me`, {
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
