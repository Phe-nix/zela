<script>
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import {addToast} from "./Toast.svelte";
  import axios from "axios";
  import { PUBLIC_API_URL } from "$env/static/public";
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

  // API
  const create = async () => {
    const toknen = localStorage.getItem("adminToken");
    try {
      const res = await axios.post(
        `${PUBLIC_API_URL}/admin/camp`,
        {
          name: name,
          color: color,
        },
        {
          headers: {
            Authorization: `Bearer ${toknen}`,
          },
        }
      );
      console.log(res.data);
        addToast({
            data: {
                title: "Success",
                description: "house created",
                color: "bg-green-600",
                bg: "bg-green-500",
            },
            });
    } catch (error) {
      console.log(error);
        addToast({
            data: {
                title: "Error",
                description: "something went wrong",
                color: "bg-red-600",
                bg: "bg-red-500",
            },
            });
    }
  };

  // BINDING INPUT
  let name = "";
  let color = "";
</script>

<button
  use:melt={$trigger}
  class="px-4 py-3 text-white bg-green-500 rounded-lg font-mitr"
  >Add house</button
>

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
        Create new house
      </h2>
      <p use:melt={$description} class="mt-2 mb-5 leading-normal text-zinc-600">
        Make changes to your profile here. Click save when you're done.
      </p>

      <!---Name-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="name"> Name </label>
        <input
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          id="name"
          placeholder="Name"
          bind:value={name}
        />
      </fieldset>
      <!---color-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="name"> Color </label>
        <input
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          type="color"
          bind:value={color}
        />
      </fieldset>
      <div class="flex justify-end gap-4 mt-6">
        <button
          use:melt={$close}
          class="inline-flex items-center justify-center h-8 px-4 font-medium leading-none rounded-sm bg-zinc-100 text-zinc-600"
        >
          Cancel
        </button>
        <button
        on:click={create}
          use:melt={$close}
          class="inline-flex h-8 items-center justify-center rounded-sm
                          bg-[#85CBDB] px-4 font-medium leading-none text-magnum-900"
        >
          Create
        </button>
      </div>
    </div>
  {/if}
</div>
