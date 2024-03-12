<script>
// @ts-nocheck

  import Icon from "@iconify/svelte";
  import Tages from "$lib/components/Tages-camper.svelte";
  import Card from "$lib/components/Card-camper.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import { PUBLIC_API_URL } from "$env/static/public";

  /** @type {import('./$types').PageData} */
  export let data;

  let catchCampers = data.campers;
  let catchcamps = data.camps;
  let campers = data.campers;
  let camps = data.camps;
  const user = data.user;

  let house = '';
  let search = '';
  let searchCooldown = null;
  $: if (search != '' || house != '') {
    if (searchCooldown) {
      clearTimeout(searchCooldown);
    }
    searchCooldown = setTimeout(async () => {
      const token = localStorage.getItem('camperToken');
      const res = await axios.get(`${PUBLIC_API_URL}/search/campers?name=${search}&camp=${house}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data);
      campers = res.data;
    }, 750);
  } else {
    campers = catchCampers;
    camps = catchcamps;
  }

</script>

<div class="w-screen bg-[#F3F3F3] px-20 py-10">
  <div class="flex flex-col text-center">
    <div
      class="flex flex-row items-center gap-3 px-2 bg-white border rounded-lg"
    >
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input type="text" bind:value={search} class="w-full p-2 outline-none" placeholder="Search" />
    </div>
    <div class="flex gap-2 py-2 overflow-x-auto">
      {#each camps as camp (camp.id)}
        <Tages color={camp.color} name={camp.name} bind:house={house} type="use" />
      {/each}
    </div>
    <div class="flex flex-col flex-wrap gap-5 py-2 overflow-auto sm:flex-row">
      {#each campers as camper (camper.id)}
        <Card name={camper.name} house={camper.Camp?.name} houseColor={camper.Camp?.color} profileSrc={`${camper.ProfileImage?.url}`} me={user.name} id={camper.id}/>
      {/each}
    </div>
  </div>
</div>
