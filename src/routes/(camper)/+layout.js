import { goto } from "$app/navigation";
import axios from "axios";
import { browser } from "$app/environment";

const user = async () => {
  if (!browser) {
    return;
  }
  const token = localStorage.getItem("token");
  try {
    await axios.get("http://localhost:3000/auth/camper/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
    goto("/");
  }
};

/** @type {import('../(camper)/$types').LayoutLoad} */
export async function load() {
  console.log("layout load");
  console.log(await user());
}
