<script>
  // @ts-nocheck
  import axios from "axios";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";

  import { addToast } from "./Toast.svelte";

  export let house = null;
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

  // BINDING INPUT
  let id = house?.id;
  let name = house?.name;
  let color = house?.color;

  const update = async () => {
    const toknen = localStorage.getItem("adminToken");
    try {
      const res = await axios.put(
        `http://localhost:3000/admin/camp/${id}`,
        {
          name : name,
          color : color,
        },
        {
          headers: {
            Authorization: `Bearer ${toknen}`,
          },
        }
      );
      addToast({
          data: {
            title: "Success",
            description: "house updated",
            color: "bg-green-600",
            bg: "bg-green-500",
          },
        });
      console.log(res.data);
    } catch (error) {
      addToast({
          data: {
            title: "Error",
            description: "something went wrong",
            color: "bg-red-600",
            bg: "bg-red-500",
          },
        });
      console.log(error);
    }
  };
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
        Edit house
      </h2>
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        Make changes to your profile here. Click save when you're done.
      </p>

      <!-- id -->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="name"> id </label>
        <input
          disabled
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
          id="id"
          bind:value={id}
          placeholder="id"
        />
      </fieldset>
      <!---Name-->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="name"> Name </label>
        <input
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
          id="name"
          placeholder="Name"
          bind:value={name}
        />
      </fieldset>
      <!---color-->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="name"> Color </label>
        <input
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
          type="color"
          bind:value={color}
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
          on:click={update}
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
