import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({}) {
  console.log("Welcome to Zela App");
  return {
    status: 200,
  };
}

