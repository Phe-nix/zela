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
    });
  
  </script>
  
  <button use:melt={$trigger} class="p-2 rounded-lg">
    <Icon icon="fe:edit" width="24" height="24" style="color: black" />
  </button>
  
  <div class="font-mitr" use:melt={$portalled}>
      {#if $open}
        <div
          use:melt={$overlay}
          class="fixed inset-0 z-50 bg-black/50"
          transition:fade={{ duration: 150 }}
        />
        <div
          class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
                max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
                p-6 shadow-lg"
          use:melt={$content}
        >
          <h2 use:melt={$title} class="m-0 text-lg font-medium text-black">
            Edit profile
          </h2>
          <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
            Make changes to your profile here. Click save when you're done.
          </p>
    
          <fieldset class="mb-4 flex items-center gap-5">
            <label class="w-[90px] text-right text-black" for="name"> Name </label>
            <input
              class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
              id="name"
              value="Thomas G. Lopes"
            />
          </fieldset>
          <fieldset class="mb-4 flex items-center gap-5">
            <label class="w-[90px] text-right text-black" for="username">
              Username
            </label>
            <input
              class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
              id="username"
              value="@thomasglopes"
            />
          </fieldset>
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
                        bg-[#85CBDB] px-4 font-medium leading-none text-magnum-900"
            >
              Save changes
            </button>
          </div>
        </div>
      {/if}
    </div>