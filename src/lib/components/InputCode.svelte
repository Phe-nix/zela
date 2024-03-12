<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import axios, { AxiosError } from "axios";
  import {addToast} from "$lib/components/Toast.svelte";
  import { PUBLIC_API_URL } from "$env/static/public";

  let code = "";

  const sendCode = async () => {
    try {
      const response = await axios.post(
        `${PUBLIC_API_URL}/auth/camper/code`,
        {
          zelaCode: code,
        }
      );
      const { token } = response.data;
      localStorage.setItem("camperToken", token);
      addToast({
        data: {
          title: "Success",
          description: "You have successfully logged in",
          color: "bg-green-600",
          bg: "bg-green-500",
        },
      });
      goto("/camper");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        addToast({
          data: {
            title: "Error",
            description: errorMessage,
            color: "bg-red-600",
            bg: "bg-red-500",
          },
        });
        console.log(errorMessage);
      }
    }
  };
</script>

<div class="mx-4">
  <div class="flex flex-row">
    <input
      bind:value={code}
      type="text"
      class=" 
        rounded-md
        p-2
        ml-4
        text-center
        font-mitr
        font-medium
        text-2xl
        outline-none
        w-52
        border-b-[1px]
        border-[#3090AA]
        "
      placeholder="Type here..."
    />
    <button
      class="bg-[#3090AA] p-3 rounded-full"
      on:click={async () => {
        await sendCode();
      }}
    >
      <Icon
        icon="carbon:send-alt-filled"
        width="32"
        height="32"
        style="color: white"
      />
    </button>
  </div>
</div>

<style>
  ::placeholder {
    @apply font-chakraPetch;
  }
</style>
