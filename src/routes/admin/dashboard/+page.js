import { browser } from "$app/environment";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  let dashboard = null;
  if (browser) {
    const token = localStorage.getItem("adminToken");
    try {
        const res = await axios.get("http://localhost:3000/admin/dashboard", {
            headers: { Authorization: `Bearer ${token}` },
        });
        dashboard = res.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    dashboard,
  };
}
