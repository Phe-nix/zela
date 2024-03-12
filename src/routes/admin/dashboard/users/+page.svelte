<script>
  // @ts-nocheck

  import Icon from "@iconify/svelte";
  import Tages from "$lib/components/Tages-camper.svelte";
  import Card from "$lib/components/Card-admin.svelte";
  import axios from "axios";
  import { addToast } from "$lib/components/Toast.svelte";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import { PUBLIC_API_URL } from "$env/static/public";

  //binding form
  let name = "";
  let house = null;
  let files;
  let zelaCode = "";
  // CREATE USER
  const createUser = async () => {
    console.log(files);
    const formData = new FormData();
    formData.append("profile", files[0]);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.post(
        `${PUBLIC_API_URL}/admin/camper`,
        {
          name: name,
          zelaCode: zelaCode,
          campId: house,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      const res2 = await axios.post(
        `${PUBLIC_API_URL}/admin/profile/${res.data.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res2.data);
      addToast({
        data: {
          title: "Success",
          description: "User created",
          color: "bg-green-600",
          bg: "bg-green-500",
        },
      });
    } catch (error) {
      addToast({
        data: {
          title: "Error",
          description: "Something went wrong",
          color: "bg-red-600",
          bg: "bg-red-500",
        },
      });
      console.log(error);
    }
  };

  // MODAL
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

  // HOUSE SELECT
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

  // GET DATA
  /** @type {import('./$types').PageData} */
  export let data;
  let catchusers = data?.alluser;
  let alluser = data?.alluser;

  let hos = "";
  let search = "";
  let searchCooldown = null;
  $: if (search != "" || hos != "" && browser) {
    if (searchCooldown) {
      clearTimeout(searchCooldown);
    }
    searchCooldown = setTimeout(async () => {
      const token = localStorage.getItem("adminToken");
      console.log(hos);
      const res = await axios.get(
        `${PUBLIC_API_URL}/admin/search/campers?name=${search}&camp=${hos}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      alluser = res.data;
    }, 750);
  } else {
    alluser = catchusers;
  }
</script>

<div class="w-screen bg-[#F3F3F3] px-20 py-10">
  <div class="flex flex-col text-center gap-y-4">
    <div class="flex flex-row items-center gap-3 px-2 bg-white rounded-lg">
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input
        bind:value={search}
        type="text"
        class="w-full p-2 outline-none"
        placeholder="Search"
      />
    </div>
    <div class="flex gap-2 py-2 overflow-x-auto">
      {#each allhouse as house}
        <Tages color={house.color} name={house.name} bind:house={hos} type="use" />
      {/each}
    </div>
    <div use:melt={$trigger} class="self-end">
      <button class="px-4 py-3 text-white bg-green-500 rounded-lg"
        >Add user</button
      >
    </div>
    <div class="flex flex-col flex-wrap gap-5 py-2 overflow-auto sm:flex-row">
      {#each alluser || [] as user}
        <Card {user} />
      {/each}
    </div>
  </div>
</div>

<!--MODAL ADD-->
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
          <option value={null}>Select House</option>
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
          placeholder="Code"
          bind:value={zelaCode}
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
          on:click={createUser}
          use:melt={$close}
          class="inline-flex h-8 items-center justify-center rounded-sm
                      bg-[#85CBDB] px-4 font-medium leading-none text-magnum-900"
        >
          Create user
        </button>
      </div>
    </div>
  {/if}
</div>
