<script>
  import Input from "$lib/components/InputCode.svelte";
  import axios from "axios";
  import { addToast } from "$lib/components/Toast.svelte";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3000/auth/admin/login", {
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
<div class="flex flex-col justify-evenly items-center h-screen">
  <h1
    class="animate-typing
    overflow-hidden
    whitespace-nowrap
    border-r-4
    border-r-white
    pr-5
    text-8xl
    text-black
    font-bold
    max-w-72
    font-mono
    "
  >
    Zela.
  </h1>
  <div class="text-center">
    <div class="flex flex-col font-mitr font-normal gap-5">
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
