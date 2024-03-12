<script>
  // @ts-nocheck
  import axios from "axios";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";

  import { addToast } from "./Toast.svelte";
  import { PUBLIC_API_URL } from "$env/static/public";
  export let user = null;
  console.log(user);
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

  let allhouse = [];

  const houseSelect = async () => {
    try {
      const res = await axios.get(`${PUBLIC_API_URL}/search/camps`);
      console.log(res.data);
      allhouse = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  houseSelect();

  const Edit = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      let id = user?.id;
      const res = await axios.put(
        `${PUBLIC_API_URL}/admin/camper/${id}`,
        {
          name: name,
          zelaCode: zelaCode,
          campId: parseInt(house),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      if (files) {
        const formData = new FormData();
        formData.append("profile", files[0]);
        const res2 = await axios.post(
          `${PUBLIC_API_URL}/admin/profile/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res2.data);
      }
      addToast({
        data: {
          title: "Success",
          description: "Profile updated",
          color: "bg-green-600",
          bg: "bg-green-500",
        },
      });
    } catch (error) {
      console.log(error);
      addToast({
        data: {
          title: "Error",
          description: "Profile not updated",
          color: "bg-red-600",
          bg: "bg-red-500",
        },
      });
    }
  };

  //binding form
  let name = user?.name;
  let house = user?.Camp?.id;
  let files = user?.ProfileImage?.url;
  let zelaCode = user?.zelaCode;
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
      <p use:melt={$description} class="mt-2 mb-5 leading-normal text-zinc-600">
        Make changes to your profile here. Click save when you're done.
      </p>

      <!-- id -->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="name"> id </label>
        <input
          disabled
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          id="id"
          value={user?.id}
          placeholder="id"
        />
      </fieldset>
      <!---Name-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="name"> Name </label>
        <input
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          id="name"
          bind:value={name}
          placeholder="Name"
        />
      </fieldset>
      <!---House-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="username">
          House
        </label>
        <select
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          id="username"
          bind:value={house}
        >
          <option value="null">Select House</option>
          {#each allhouse as house}
            <option value={house.id}>{house.name}</option>
          {/each}
        </select>
      </fieldset>
      <!---Profile-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="profile">
          Profile
        </label>
        <input
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          bind:files
        />
      </fieldset>
      <!---zelaCode-->
      <fieldset class="flex items-center gap-5 mb-4">
        <label class="w-[90px] text-right text-black" for="name">
          ZelaCode
        </label>
        <input
          class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
          id="name"
          bind:value={zelaCode}
          placeholder="Name"
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
          on:click={Edit}
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
