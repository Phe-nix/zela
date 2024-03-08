import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import axios, { AxiosError } from "axios";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    let user = null;
  if (browser) {
    try {
        const adminToken = localStorage.getItem("adminToken");
        if (!adminToken) {
            goto("/admin");
        }
        const res = await axios.get("http://localhost:3000/auth/admin/me", {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        });
        user = res.data;
        // console.log(user);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        console.error(errorMessage);
        localStorage.removeItem("adminToken");
        goto("/admin");
      }
    }
  }
  return {
    user,
  };
}