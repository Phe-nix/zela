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
    <div class="self-end my-2">
      <Button/>
    </div>
    <div class="py-2 flex flex-col sm:flex-row gap-5 flex-wrap overflow-auto">
      {#each houses || [] as house}
        <Card {house} />
      {/each}
    </div>
  </div>
</div>
