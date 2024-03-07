import { browser } from "$app/environment";
import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({}) {
  if (!browser) {
    return;
  }
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get("http://localhost:3000/camper/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
      return {
        camper : res.data
      };
    }
  } catch (err) {
    console.log(err);
  }
}
