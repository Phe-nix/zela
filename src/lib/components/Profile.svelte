<script>
  // @ts-nocheck

  import axios from "axios";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { addToast } from "./Toast.svelte";

  export let type = "";
  export let user = null;

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


  //API
  const Edit = async () => {
    const formData = new FormData();
    formData.append("profile", files[0]);
    try {
      const token = localStorage.getItem("camperToken");
      const res = await axios.post(
        `http://localhost:3000/camper/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
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


  //BINDING INPUT
  let name = user?.name;
  let files;
</script>

{#if type === "mobile"}
  <button
    use:melt={$trigger}
    class="gap-4 items-center p-4 rounded-full text-center bg-[#85CBDB]"
  >
    <Icon
      icon="flowbite:user-edit-solid"
      width="40"
      height="40"
      style="color: white"
    />
  </button>
{/if}
{#if type === "desktop"}
  <button use:melt={$trigger} class="ml-5 block p-2">
    <div class="flex flex-row gap-2 justify-center py-2 items-center">
      <Icon
        icon="flowbite:user-edit-solid"
        width="24"
        height="24"
        style="color: black"
      />
      <p class="">Profile</p>
    </div>
  </button>
{/if}

<!---MODAL PROFILE-->
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
        Edit image profile
      </h2>
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        Make changes to your profile here. Click save when you're done.
      </p>

      <!---Name-->
      <fieldset class="mb-4 flex items-center gap-5">
        <label class="w-[90px] text-right text-black" for="name"> Name </label>
        <input
          disabled
          class="inline-flex h-8 w-full flex-1 items-center justify-center
                        rounded-sm border border-solid px-3 leading-none text-black"
          id="name"
          placeholder="Name"
          bind:value={name}
        />
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
      <div class="mt-6 flex justify-end gap-4">
        <button
          use:melt={$close}
          class="inline-flex h-8 items-center justify-center rounded-sm
                        bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
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
