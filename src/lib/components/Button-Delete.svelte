<script>
    import { createDialog, melt } from "@melt-ui/svelte";
    import { fade } from 'svelte/transition';
    import Icon from "@iconify/svelte";
  
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
    } = createDialog({
      forceVisible: true,
      role: 'alertdialog',
    });
  
  </script>

  <button use:melt={$trigger} class="p-2 rounded-lg">
  <Icon
    icon="fluent:delete-24-filled"
    width="24"
    height="24"
    style="color: red"
  />
</button>


<div class="font-mitr" use:melt={$portalled}>
    {#if $open}
      <div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" 
      transition:fade={{ duration: 200 }} />
      <div
        class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
              max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white
              p-6 shadow-lg"
        use:melt={$content}
      >
        <h2 use:melt={$title} class="m-0 text-lg font-medium text-red-500">
          Are you sure you want to delete this?
        </h2>
        <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
          This action cannot be undone. This will permanently delete the item and
          remove it from our servers.
        </p>
  
        <div class="mt-6 flex justify-end gap-4">
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-[4px]
                      bg-zinc-100 hover:bg-zinc-300 px-4 font-medium leading-none text-zinc-600"
          >
            Cancel
          </button>
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-[4px]
                      bg-red-500 hover:bg-red-300 focus:bg-red-600 text-white px-4 font-medium leading-none text-magnum-900"
          >
            Continue
          </button>
        </div>
      </div>
    {/if}
  </div>