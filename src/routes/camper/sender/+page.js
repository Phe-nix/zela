import { browser } from "$app/environment";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { user } = await parent();
  let campers = [];
  let camps = [];
  if (browser) {
    try {
        const resCampers = await axios.get("http://localhost:3000/camper/");
        const resCamps = await axios.get("http://localhost:3000/search/camps");
        campers = resCampers.data;
        camps = resCamps.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    user,
    campers,
    camps
  };
}
