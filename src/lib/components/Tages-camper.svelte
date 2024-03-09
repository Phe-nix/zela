<script>
  // @ts-nocheck

  export let color = "#E5E5E5";
  export let name = "Camp A";
  export let type = "";
  export let house = "";

  const selected = (data) => {
    if (house === data) {
      house = "";
      return;
    }
    house = data;
    console.log(house);
  };

  $: isSelecd = house === name || house === "";
</script>

{#if type === "show"}
  <div
    class="border font-mitr font-normal w-20 rounded-full px-1 py-1 text-white"
    style="background-color: {color}"
  >
    {name}
  </div>
{/if}
{#if type === "use"}
  <button
    class={`border font-mitr font-normal w-20 rounded-full text-white px-1 py-1 ${!isSelecd ? "opacity-50" : ""}`}
    on:click={selected(name)}
    style="background-color: {color}"
  >
    {name}
  </button>
{/if}
