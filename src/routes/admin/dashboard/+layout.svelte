<script>
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
  
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
              <Icon icon="fa:send" width="24" height="24" style="color: black" />
              <p class="">Camps</p>
            </div>
          </a>
          <a href="/admin/dashboard/users" class="block p-2">
            <div class="flex flex-row gap-2 justify-center py-2 items-center">
              <Icon
                icon="material-symbols:markunread-mailbox-rounded"
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
  
        <button class="block p-2 border-2 bg-red-500 rounded-lg">
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
      <Icon icon="uis:signout" width="34" height="34" style="color: red" />
    </nav>
    <slot />
    <footer class="bottom-0 fixed inset-x-0 mx-12 py-5">
      <div
        class="flex flex-row justify-between p-5 border bg-[#3090AA] text-white rounded-3xl font-mitr"
      >
        <a href="/admin/dashboard/camps" class="flex flex-row gap-4 items-center">
          <Icon icon="fa:send" width="24" height="24" style="color: white" />
          <p class="text-xs">Camps</p>
        </a>
        <a href="/admin/dashboard/users" class="flex flex-row gap-4 items-center">
          <Icon
            icon="material-symbols:markunread-mailbox-rounded"
            width="24"
            height="24"
            style="color: white"
          />
          <p class="text-xs">Users</p>
        </a>
      </div>
    </footer>
  {/if}
  