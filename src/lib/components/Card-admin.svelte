<script>
// @ts-nocheck

  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";

  import Icon from "@iconify/svelte";
  import Tage from "$lib/components/Tages-camper.svelte";
  import ButtonEdit from "./Button-Edit.svelte";
  import ButtonDelete from "./Button-Delete.svelte";
  export let user = null;
  const {
    elements: { image, fallback },
  } = createAvatar({
    src: user.ProfileImage?.url 
  });
</script>

<div class="flex flex-col bg-[#E5E5E5] rounded-xl font-mitr">
  <div class="flex flex-col items-center gap-2 px-20 py-8">
    <div
      class="flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100"
    >
      <img
        use:melt={$image}
        alt="Avatar"
        class="h-full w-full rounded-[inherit]"
      />
      <span use:melt={$fallback} class="text-3xl font-medium text-magnum-700"
        >UK</span
      >
    </div>
    <p>{user?.name || "Name"}</p>
    <Tage name={user?.Camp?.name || "UNKNOW"} color={user?.Camp?.color || "#C0FFEE"} type="show" />
  </div>
  <div class="flex flex-row items-center justify-around my-4">
    <ButtonEdit user={user} />
    <ButtonDelete user={user}/>
  </div>
</div>
