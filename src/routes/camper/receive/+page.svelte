<script>
// @ts-nocheck

  import Icon from "@iconify/svelte";
  import Card from "$lib/components/Card-reader.svelte";
  import axios from "axios";
  import { PUBLIC_API_URL } from "$env/static/public";

  /** @type {import('./$types').PageData} */
  export let data;
  let messages = data.message;
  let catchMessages = data.message;

  let search = '';
  let house = '';
  let searchCooldown = null;
  $: if (search != '' || house != '') {
    if (searchCooldown) {
      clearTimeout(searchCooldown);
    }
    searchCooldown = setTimeout(async () => {
      const token = localStorage.getItem('camperToken');
      const res = await axios.get(`${PUBLIC_API_URL}/search/campers?name=${search}&camp=${house}`
      ,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        });
      console.log(res.data);
      campers = res.data;
    }, 750);
  } else {
    messages = catchMessages;
  }

  console.log(messages);
</script>

<div class="w-screen h-screen max-h-screen bg-[#F3F3F3] px-10 py-10 sm:px-20">
  <div class="flex flex-col text-center">
    <div class="flex flex-row flex-wrap py-1 sm:gap-x-2 gap-y-2 gap-x-1">
      {#each messages as message}
        <Card
          name={message.sender.name}
          house={message.receiver.Camp?.name}
          houseColor={message.receiver.Camp?.color}
          profileSrc={`${message.receiver.ProfileImage?.url}`}
          mess={message.content}
          me={message.receiver.name}
        />
      {/each}
    </div>
  </div>
</div>
