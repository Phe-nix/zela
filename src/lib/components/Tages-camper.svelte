<script>
  export let color = "#E5E5E5";
  export let name = "Camp A";
  export let type = "";
</script>

{#if type === "show"}
  <div
    class="border font-mitr font-normal w-20 rounded-full px-1 py-1"
    style="background-color: {color}"
  >
    <button class="text-white" disabled>{name}</button>
  </div>
{/if}
{#if type === "use"}
  <div
    class="border font-mitr font-normal w-20 rounded-full px-1 py-1"
    style="background-color: {color}"
  >
    <button class="text-white">{name}</button>
  </div>
{/if}
