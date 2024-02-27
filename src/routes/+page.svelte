<script>
  import Input from "../lib/components/Input.svelte";
  import Icon from "@iconify/svelte";
</script>
<!-- background-image: linear-gradient(to bottom, #B1D0DD, #1E90FF); -->
<div class="flex flex-col justify-around items-center h-screen bg-gradient-to-b from-[#B1D0DD] to-[#1E90FF]">
  <h1
    class="animate-typing
  overflow-hidden
  whitespace-nowrap
  border-r-4
  border-r-white
  pr-5
  text-8xl
  text-[#134E95]
  font-bold
  max-w-72"
  >
    Zela.
  </h1>
  <form>
    <Input title="Nick name" />
    <Input title="UID" />
  </form>
  <div class="flex justify-center">
    <a href="/"
      ><button
        class="bg-[#88DBFF] hover:bg-[#134E95] py-4 px-4 rounded-full"
      >
        <Icon
          icon="basil:arrow-right-outline"
          width="42"
          height="42"
          style="color: black"
          class="opacity-50"
        />
      </button></a
    >
  </div>
</div>

<style>
  
</style>
