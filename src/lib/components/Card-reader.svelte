<script>
// @ts-nocheck

  import Tage from "$lib/components/Tages-camper.svelte";
  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";

  // ข้อมูล User ที่สรับ
  export let me = "Name";

  // ข้อมูล User ที่ส่ง
  export let name = "Name";
  export let house = "ไม่มี House";
  export let houseColor = "#000";
  export let profileSrc = "https://via.placeholder.com/150";

  //ข้อมูล ผู้ส่ง
  export let mess = [];
  const {
    elements: {
      trigger,
      portalled,
      overlay,
      content,
      title,
      description,
      close,
    },
    states: { open },
  } = createDialog();
</script>

<div use:melt={$trigger} class="my-2 relative">
  <div
    class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-400 p-2 text-xs animate-pulse"
  />
  <div class="border p-1 rounded-xl">
    <div class="flex flex-row items-center gap-3">
      <img src={profileSrc} alt="Avatar" class="h-16 w-16 rounded-full" />
      <div class="flex flex-col">
        <h3 class="font-mitr font-normal">{name}</h3>
        {#if house}
          <Tage color={houseColor} name={house} />
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- modal toggle -->
<div class="" use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 150 }}
    />
    <div
      class="fixed left-[50%] top-[50%] z-50 max-h-[200vh] w-[90vw]
              max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
              p-6 shadow-lg font-mitr"
      transition:fade={{ duration: 150 }}
      use:melt={$content}
    >
      <h2 use:melt={$title} class="m-0 text-lg font-medium text-black">
        To : {me}
      </h2>
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        <!-- This is the message your friend sent, you have read it. -->
      </p>
      <div>
        <!-- ข้อความที่ได้มา -->
        <textarea
          disabled
          class="w-full h-80 p-2 border rounded-md bg-zinc-100 outline-none"
        >
        {mess}
        </textarea>
      </div>
      <p class="text-xl text-zinc-600 text-end">From : {name}</p>
      <div class="mt-6 flex justify-end gap-4">
      </div>
      <button
        use:melt={$close}
        aria-label="close"
        class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none
                  items-center justify-center rounded-full p-1 text-magnum-800
                  hover:bg-magnum-100 focus:shadow-magnum-400"
      >
      </button>
    </div>
  {/if}
</div>
