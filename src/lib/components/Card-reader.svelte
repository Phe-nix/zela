<script>
  import Tage from "$lib/components/Tages-camper.svelte";
  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";


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

  export let noti = 0;
</script>

<div use:melt={$trigger} class="my-2 relative">
    {#if noti > 0}
      <div
        class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 px-2 text-xs"
      >{noti}</div>
    {/if}
  <div class="border p-1 rounded-xl">
    <div class="flex flex-row items-center gap-3">
      <img
        src="https://via.placeholder.com/150"
        alt="Avatar"
        class="h-16 w-16 rounded-full"
      />
      <div class="flex flex-col">
        <h3 class="font-mitr font-normal">Name</h3>
        <Tage color="#EF4444" />
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
          To : Thomas G. Lopes
        </h2>
        <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
          Make changes to your profile here. Click save when you're done.
        </p>
        <div>
            <!-- ข้อความที่ได้มา -->
          <textarea
            disabled
            class="w-full h-80 p-2 border rounded-md bg-zinc-100 outline-none"
          ></textarea>
        </div>
        <p class="text-xl text-zinc-600 text-end">From : Unknow</p>
        <div class="mt-6 flex justify-end gap-4">
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-sm
                      bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
          >
            Cancel
          </button>
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-sm
                      bg-[#D9F0F4] px-4 font-medium leading-none text-magnum-900"
          >
            Send
          </button>
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