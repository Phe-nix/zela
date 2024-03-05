<script>
  import { createAvatar, createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";

  import Icon from "@iconify/svelte";
  import Tage from "$lib/components/Tages-camper.svelte";
  import ButtonEdit from "./Button-Edit.svelte";
  import ButtonDelete from "./Button-Delete.svelte";
  const {
    elements: { image, fallback },
  } = createAvatar({
    src: "",
  });
</script>

<div class="flex flex-col bg-[#E5E5E5] rounded-xl font-mitr">
  <div class="flex flex-col items-center gap-2 px-20 py-8">
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100"
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
    <p>User name</p>
    <Tage color="#EF4444" />
  </div>
  <div class="flex flex-row my-4 justify-around items-center">
    <ButtonEdit />
    <ButtonDelete />
  </div>
</div>
