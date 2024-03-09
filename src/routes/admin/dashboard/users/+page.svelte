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
        "http://localhost:3000/admin/camper",
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
        `http://localhost:3000/admin/profile/${res.data.id}`,
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
      const res = await axios.get("http://localhost:3000/search/camps");
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
        `http://localhost:3000/admin/search/campers?name=${search}&camp=${hos}`,
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
    <div class="flex flex-row items-center px-2 gap-3 bg-white rounded-lg">
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
    <div class="py-2 flex gap-2 overflow-x-auto">
      {#each allhouse as house}
        <Tages color={house.color} name={house.name} bind:house={hos} type="use" />
      {/each}
    </div>
    <div use:melt={$trigger} class="self-end">
      <button class="bg-green-500 text-white rounded-lg px-4 py-3"
        >Add user</button
      >
    </div>
    <div class="py-2 flex flex-col sm:flex-row gap-5 flex-wrap overflow-auto">
      {#each alluser || [] as user}
        <Card {user} />
      {/each}
      <!-- <Card
          name={user?.name}
          house={user?.Camp?.name}
          houseColor={user?.Camp?.color}
          profileSrc={`http://localhost:3000/${user?.ProfileImage?.url}`}
        /> -->
      <!-- <Card /> -->
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
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        Make changes to your profile here. Click save when you're done.
      </p>

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
      <!---House-->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="username">
          House
        </label>
        <select
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                      rounded-sm border border-solid px-3 leading-none text-black"
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
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="profile">
          Profile
        </label>
        <input
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                      rounded-sm border border-solid px-3 leading-none text-black"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          bind:files
        />
      </fieldset>
      <!---zelaCode-->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="name">
          ZelaCode
        </label>
        <input
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                      rounded-sm border border-solid px-3 leading-none text-black"
          id="name"
          placeholder="Code"
          bind:value={zelaCode}
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
