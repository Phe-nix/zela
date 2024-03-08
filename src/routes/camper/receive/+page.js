import { browser } from "$app/environment";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { user } = await parent();
  let message = [];
  let campers = [];
  if (browser) {
    let token = localStorage.getItem("token");
    try {
        const resCampers = await axios.get("http://localhost:3000/camper/");
        const resMess = await axios.get("http://localhost:3000/message/",
          { headers: { Authorization: `Bearer ${token}` } });
        campers = resCampers.data;
        message = resMess.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    user,
    campers,
    message
  };
}
