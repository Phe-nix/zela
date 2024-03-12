import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";
import axios, { AxiosError } from "axios";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    let user = null;
  if (browser) {
    try {
        const camperToken = localStorage.getItem("camperToken");
        if (!camperToken) {
            goto("/");
        }
        const res = await axios.get(`${PUBLIC_API_URL}/auth/camper/me`, {
            headers: {
                Authorization: `Bearer ${camperToken}`,
            },
        });
        user = res.data;
        // console.log(user);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        console.error(errorMessage);
        localStorage.removeItem("camperToken");
        goto("/");
      }
    }
  }
  return {
    user,
  };
}
