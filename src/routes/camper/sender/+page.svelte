<script>
  import Icon from "@iconify/svelte";
  import Tages from "$lib/components/Tages-camper.svelte";
  import Card from "$lib/components/Card-camper.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const campers = data.campers;
  const camps = data.camps;
</script>

<div class="w-screen bg-[#F3F3F3] px-20 py-10">
  <div class="flex flex-col text-center">
    <div
      class="border flex flex-row items-center px-2 gap-3 bg-white rounded-lg"
    >
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input type="text" class="w-full p-2 outline-none" placeholder="Search" />
    </div>
    <div class="py-2 flex gap-2 overflow-x-auto">
      {#each camps as camp}
        <Tages color={camp.color} name={camp.name} />
      {/each}
    </div>
    <div class="py-2 flex flex-col sm:flex-row gap-5 flex-wrap overflow-auto">
      {#each campers as camper}
        <Card name={camper.name} house={camper.Camp?.name} houseColor={camper.Camp?.color} profileSrc={`http://localhost:3000/${camper.ProfileImage?.url}`}/>
      {/each}
    </div>
  </div>
</div>
