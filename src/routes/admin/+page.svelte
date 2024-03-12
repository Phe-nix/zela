<script>
  import Input from "$lib/components/InputCode.svelte";
  import axios from "axios";
  import { addToast } from "$lib/components/Toast.svelte";
  import { PUBLIC_API_URL } from "$env/static/public";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  const login = async () => {
    try {
      const res = await axios.post(`${PUBLIC_API_URL}/auth/admin/login`, {
        username,
        password,
      });
      if (res.status === 200) {
        addToast({
          data: {
            title: "Success",
            description: "You have successfully logged in",
            color: "bg-green-600",
            bg: "bg-green-500",
          },
        })

        localStorage.setItem("adminToken", res.data.token);
        console.log(res.data);
        goto("/admin/dashboard");
      }
    } catch (error) {
      addToast({
        data: {
          title: "Error",
          description: error.response.data.message,
          color: "bg-red-600",
          bg: "bg-red-500",
        },
      });
      console.log(error.response.data.message);
    }
  };
</script>

<!-- background-image: linear-gradient(to bottom, #B1D0DD, #1E90FF); -->
<div class="flex flex-col items-center h-screen justify-evenly">
  <h1
    class="pr-5 overflow-hidden font-mono font-bold text-black border-r-4 animate-typing whitespace-nowrap border-r-white text-8xl max-w-72 "
  >
    Zela.
  </h1>
  <div class="text-center">
    <div class="flex flex-col gap-5 font-normal font-mitr">
      <input
        class="bg-[#F3F3F3] p-3 outline-none rounded-xl focus:shadow-xl duration-500"
        placeholder="Username"
        type="text"
        bind:value={username}
      />
      <input
        class="bg-[#F3F3F3] p-3 outline-none rounded-xl focus:shadow-xl duration-500"
        placeholder="Password"
        type="password"
        bind:value={password}
      />
    </div>
    <button
      on:click={login}
      class="bg-[#3090AA] text-white p-2 rounded-xl my-8 w-20 hover:bg-[#4CACC4] duration-500"
      >Log in</button
    >
  </div>
  <div></div>
</div>
