import { browser } from "$app/environment";
import { PUBLIC_API_URL } from "$env/static/public";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { user } = await parent();
  let campers = [];
  let camps = [];
  if (browser) {
    try {
        const resCampers = await axios.get(`${PUBLIC_API_URL}/camper/`);
        const resCamps = await axios.get(`${PUBLIC_API_URL}/search/camps`);
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
