<script>
  import Icon from "@iconify/svelte";
  import Tages from "$lib/components/Tages-camper.svelte";
  import Card from "$lib/components/Card-admin-camps.svelte";
  import Button from "$lib/components/ButtonAdd-camps.svelte";
  // GET DATA
  /** @type {import('./$types').PageData} */
  export let data;

  const houses = data.houses;
</script>

<div class="w-screen bg-[#F3F3F3] px-20 py-10">
  <div class="flex flex-col text-center">
    <div class="flex flex-row items-center px-2 gap-3 bg-white rounded-lg">
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input type="text" class="w-full p-2 outline-none" placeholder="Search" />
    </div>
    <div class="self-end my-2">
      <Button/>
    </div>
    <div class="py-2">
      <Tages color="#EF4444" />
    </div>

    <div class="py-2 flex flex-col sm:flex-row gap-5 flex-wrap overflow-auto">
      {#each houses || [] as house}
        <Card {house} />
      {/each}
    </div>
  </div>
</div>
