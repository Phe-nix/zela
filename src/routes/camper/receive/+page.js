import { browser } from "$app/environment";
import { PUBLIC_API_URL } from "$env/static/public";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { user } = await parent();
  let message = [];
  let campers = [];
  if (browser) {
    let token = localStorage.getItem("camperToken");
    try {
        const resCampers = await axios.get(`${PUBLIC_API_URL}/camper/`);
        const resMess = await axios.get(`${PUBLIC_API_URL}/message/`,
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
