<script>
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { addToast } from "./Toast.svelte";
  import { goto } from "$app/navigation";
  let code = "";

  const login = async () => {
    await axios
      .post("http://localhost:3000/auth/camper/code", { zelaCode: code })
      .then((res) => {
        console.log(res.data);
        addToast(
          {
            data: {
              title: "Success",
              description: "Your code has been verified.",
              color: "bg-green-500",
              bg: "bg-green-700",
            },
          }
        );
        localStorage.setItem("token", res.data.token);
        goto("/camper");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        addToast(
            {
                data: {
                    title: "Error",
                    description: 'Something went wrong. Please try again.',
                    color: "bg-red-600",
                    bg: "bg-red-500",
                },
            }
        );
      });
  };
</script>

<div class="mx-4">
  <form class="flex flex-row">
    <input
      type="text"
      name="code"
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
      bind:value={code}
    />
    <button class="bg-[#3090AA] p-3 rounded-full" on:click={login}>
      <Icon
        icon="carbon:send-alt-filled"
        width="32"
        height="32"
        style="color: white"
      />
    </button>
  </form>
</div>

<style>
  ::placeholder {
    @apply font-chakraPetch;
  }
</style>
