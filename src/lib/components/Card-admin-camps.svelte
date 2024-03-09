<script>
  // @ts-nocheck
  import { fade } from "svelte/transition";

  import Icon from "@iconify/svelte";
  import Tage from "$lib/components/Tages-camper.svelte";
  import ButtonEdit from "./Button-camper-Edit.svelte";
  import ButtonDelete from "./Button-camper-Delete.svelte";
  export let house = null;
  console.log(house);
</script>

<div class="flex flex-col bg-[#E5E5E5] rounded-xl font-mitr">
  <div class="flex flex-col items-center gap-2 px-20 py-8">
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full bg-[{house.color}]"
    />
    <p>{house.name}</p>
    <!-- <Tage name={user?.Camp?.name || "House"} color={user?.Camp?.color || "#C0FFEE"} type="show" /> -->
  </div>
  <div class="flex flex-row my-4 justify-around items-center">
    <ButtonEdit {house}/>
    <ButtonDelete {house}/>
  </div>
</div>
