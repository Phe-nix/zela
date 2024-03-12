<script>
  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import axios from "axios";
  import { fade } from "svelte/transition";
  import { addToast } from "./Toast.svelte";
  import { PUBLIC_API_URL } from "$env/static/public";
  export let name = "Name";
  export let house = "House";
  export let profileSrc = "";
  export let houseColor = "#E5E5E5";
  export let me = "";
  export let id = "";

  let nowMessage = "";
  const {
    elements: { image, fallback },
  } = createAvatar({
    src: profileSrc,
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
  } = createDialog({
    forceVisible: true,
  });

  const sending = async () => {
    try {
      const camperToken = localStorage.getItem("camperToken");
      const res = await axios.post(
        `${PUBLIC_API_URL}/message/sent/${id}`,
        {
          message: nowMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${camperToken}`,
          },
        }
      );
      console.log(res);
      addToast({
        data: {
          title: "Success",
          description: "Message sent",
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
</script>

<div
  use:melt={$trigger}
  class="flex flex-col items-center w-64 gap-8 px-5 transition duration-500 ease-in-out border shadow-lg py-14 rounded-xl hover:shadow-2xl"
  style={`background: linear-gradient(to bottom, white, white, ${houseColor});`}
>
  <div
    class="flex items-center justify-center w-24 h-24 rounded-full bg-neutral-200"
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
  <div class="font-normal font-mitr">
    <h3>{name}</h3>
    <p>{house}</p>
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
        To : {name}
      </h2>
      <p use:melt={$description} class="mt-2 mb-5 leading-normal text-zinc-600">
        Write something to send to <span class="font-semibold">{name}</span>.
      </p>
      <div>
        <textarea
          bind:value={nowMessage}
          class="w-full p-2 border rounded-md outline-none h-80 bg-zinc-100"
          placeholder="Type your message here....."
        ></textarea>
      </div>
      <p class="text-xl text-zinc-600 text-end">From : {me}</p>
      <div class="flex justify-end gap-4 mt-6">
        <button
          use:melt={$close}
          class="inline-flex items-center justify-center h-8 px-4 font-medium leading-none rounded-sm bg-zinc-100 text-zinc-600"
        >
          Cancel
        </button>
        <button
          use:melt={$close}
          on:click={sending}
          class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-[#D9F0F4] px-4 font-medium leading-none text-magnum-900"
        >
          Send
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
</style>
