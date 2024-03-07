<script>
  import Icon from "@iconify/svelte";
  import Tages from "$lib/components/Tages-camper.svelte";
  import Card from "$lib/components/Card-admin.svelte";
</script>

<div class="w-screen bg-[#F3F3F3] px-20 py-10">
  <div class="flex flex-col text-center gap-y-4">
    <div class="flex flex-row items-center px-2 gap-3 bg-white rounded-lg">
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input type="text" class="w-full p-2 outline-none" placeholder="Search" />
    </div>
    <div class="self-end">
        <button class="bg-[#EF4444] text-white rounded-lg p-2">Add</button>
    </div>
    <div class="py-2 flex flex-col sm:flex-row gap-5 flex-wrap overflow-auto">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</div>
