<script>
// @ts-nocheck

  import Icon from "@iconify/svelte";
  import Card from "$lib/components/Card-reader.svelte";

  /** @type {import('./$types').PageData} */
  export let data;


  const messages = data.message;
  console.log(messages);
</script>

<div class="w-screen h-screen max-h-screen bg-[#F3F3F3] px-10 py-10 sm:px-20">
  <div class="flex flex-col text-center">
    <div
      class="border flex flex-row items-center px-2 gap-3 bg-white rounded-lg"
    >
      <Icon
        icon="iconamoon:search-light"
        width="20"
        height="20"
        style="color: #A3A3A3"
      />
      <input type="text" class="w-full p-2 outline-none" placeholder="Search" />
    </div>
    <div class="py-1 flex flex-row flex-wrap sm:gap-x-2 gap-y-2 gap-x-1">
      {#each messages as message}
        <Card
          name={message.sender.name}
          house={message.receiver.Camp?.name}
          houseColor={message.receiver.Camp?.color}
          profileSrc={`http://localhost:3000/${message.receiver.ProfileImage?.url}`}
          mess={message.content}
          me={message.receiver.name}
        />
      {/each}
    </div>
  </div>
</div>
