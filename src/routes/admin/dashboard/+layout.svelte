<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { addToast } from "$lib/components/Toast.svelte";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";

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
    role: "alertdialog",
  });

  let isMobile = false;

  onMount(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    });
  });

  const logout = () => {
    localStorage.removeItem("adminToken");
    addToast({
      data: {
        title: "Success",
        description: "Logout success",
        color: "bg-green-600",
        bg: "bg-green-500",
      },
    });
    goto("/admin");
  };
</script>

{#if !isMobile}
  <!-- Side bar -->
  <div class="flex flex-row h-screen">
    <div class="w-56 p-6 text-center flex flex-col justify-between">
      <a href="/admin/dashboard" class="block p-2">
        <h1 class="font-mono text-5xl font-semibold">Zela.</h1>
      </a>
      <div class="font-mitr font-normal">
        <a href="/admin/dashboard/camps" class="block p-2">
          <div class="flex flex-row gap-2 justify-center py-2 items-center">
            <Icon
              icon="mdi:company"
              width="24"
              height="24"
              style="color: black"
            />
            <p class="">Camps</p>
          </div>
        </a>
        <a href="/admin/dashboard/users" class="block p-2">
          <div class="flex flex-row gap-2 justify-center py-2 items-center">
            <Icon
              icon="mdi:users"
              width="24"
              height="24"
              style="color: black"
            />
            <p class="">Users</p>
          </div>
        </a>
      </div>
      <div></div>
      <div></div>

      <button use:melt={$trigger} class="block p-2 border-2 bg-red-500 rounded-lg">
        <div class="flex flex-row gap-2 justify-center items-center">
          <Icon
            icon="uis:signout"
            width="34"
            height="34"
            style="color: white"
          />
          <p class="text-white">Log out</p>
        </div>
      </button>
    </div>
    <slot />
  </div>
{:else}
  <nav class="flex flex-row items-center justify-between px-4 my-2">
    <a href="/admin/dashboard" class="flex flex-row gap-4 items-center">
      <h1 class="font-mono text-3xl font-semibold">Zela.</h1>
    </a>
    <button use:melt={$trigger}>
      <Icon icon="uis:signout" width="34" height="34" style="color: red" />
    </button>
  </nav>
  <slot />
  <footer class="bottom-0 fixed inset-x-0 mx-12 py-2">
    <div
      class="flex flex-row justify-between p-5 border bg-[#3090AA] text-white rounded-3xl font-mitr"
    >
      <a href="/admin/dashboard/camps" class="flex flex-row gap-4 items-center">
        <Icon icon="mdi:company" width="24" height="24" style="color: black" />
        <p class="text-xs">Camps</p>
      </a>
      <a href="/admin/dashboard/users" class="flex flex-row gap-4 items-center">
        <Icon icon="mdi:users" width="24" height="24" style="color: black" />
        <p class="text-xs">Users</p>
      </a>
    </div>
  </footer>
{/if}

<!--MODAL LOGOUT-->
<div class="font-mitr" use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 200 }}
    />
    <div
      class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white
            p-6 shadow-lg"
      use:melt={$content}
    >
      <h2 use:melt={$title} class="m-0 text-lg font-medium text-red-500">
        Are you sure you want to log out?
      </h2>
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        This action cannot be undone.
      </p>

      <div class="mt-6 flex justify-end gap-4">
        <button
          use:melt={$close}
          class="inline-flex h-8 items-center justify-center rounded-[4px]
                    bg-zinc-100 hover:bg-zinc-300 px-4 font-medium leading-none text-zinc-600"
        >
          Cancel
        </button>
        <button
          use:melt={$close}
          on:click={logout}
          class="inline-flex h-8 items-center justify-center rounded-[4px]
                    bg-red-500 hover:bg-red-300 focus:bg-red-600 text-white px-4 font-medium leading-none text-magnum-900"
        >
          Continue
        </button>
      </div>
    </div>
  {/if}
</div>
