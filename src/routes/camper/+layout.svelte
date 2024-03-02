<script>
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let isMobile = false;

  onMount(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    });
  });
</script>

{#if !isMobile}
<div class="flex flex-row h-screen">
  <div class="w-56 p-6 text-center flex flex-col justify-between">
    <h1 class="font-mono text-5xl font-semibold">Zela.</h1>
    <div class="font-mitr font-normal">
      <a href="/camper/sender" class="block p-2">
        <div class="flex flex-row gap-2 justify-center py-2 items-center">
          <Icon icon="fa:send" width="24" height="24" style="color: black" />
          <p class="">Sender</p>
        </div>
      </a>
      <a href="/camper/1" class="block p-2">
        <div class="flex flex-row gap-2 justify-center py-2 items-center">
          <Icon
            icon="material-symbols:markunread-mailbox-rounded"
            width="24"
            height="24"
            style="color: black"
          />
          <p class="">Receive</p>
        </div>
      </a>
    </div>
    <div></div>
    <div></div>

    <button class="block p-2 border-2 bg-red-500 rounded-lg">
      <div class="flex flex-row gap-2 justify-center items-center">
        <Icon icon="uis:signout" width="34" height="34" style="color: white" />
        <p class="text-white">Log out</p>
      </div>
    </button>
  </div>

  <slot />
</div>
{:else}
  <div class="flex flex-col">
    mobil
    <div>

    </div>
  </div>
{/if}
