<script>
  import Input from "$lib/components/InputCode.svelte";
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
      <input class="bg-[#F3F3F3] p-3 outline-none rounded-xl focus:shadow-xl duration-500" placeholder="Username" type="text"/>
      <input class="bg-[#F3F3F3] p-3 outline-none rounded-xl focus:shadow-xl duration-500" placeholder="Password" type="password"/>
    </div>
    <button class="bg-[#3090AA] text-white p-2 rounded-xl my-8 w-20 hover:bg-[#4CACC4] duration-500">Log in</button>
  </div>
  <div></div>
</div>
