import { browser } from "$app/environment";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  let houses = null;
  if (browser) {
    const token = localStorage.getItem("adminToken");
    try {
        const res = await axios.get("http://localhost:3000/search/camps", {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        houses = res.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    houses,
  };
}
