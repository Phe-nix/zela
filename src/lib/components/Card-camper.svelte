<script>
  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";

  const {
    elements: { image, fallback },
  } = createAvatar({
    src: "",
  });

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

<div
  use:melt={$trigger}
  class="border px-5 py-14 w-64 shadow-lg rounded-xl
  gap-8 flex flex-col items-center bg-gradient-to-b from-white
  via-white to-orange-300 hover:shadow-2xl transition duration-500 ease-in-out"
>
  <div
    class="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-200"
  >
    <img
      use:melt={$image}
      alt="Avatar"
      class="h-full w-full rounded-[inherit]"
    />
    <span use:melt={$fallback} class="text-3xl font-medium text-magnum-700"
      >Profile</span
    >
  </div>
  <div class="font-mitr font-normal">
    <h3>Profile</h3>
    <p>House name</p>
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
        <textarea
          class="w-full h-80 p-2 border rounded-md bg-zinc-100 outline-none"
          placeholder="Type your message here....."
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

<style>
</style>
