<script>
    import Icon from "@iconify/svelte";
</script>

<div class="mx-4 flex flex-row p-[1px] bg-[#b7e1ea] rounded-full">
    <input type="text"
    placeholder="Enter code here.."
    class="rounded-full 
    p-8
    grow 
    bg-transparent
    outline-none
    "/>
    <button class="bg-blue-500 text-white font-bold p-4 m-2
    rounded-full">
        <Icon
          icon="basil:arrow-right-outline"
          width="42"
          height="42"
          style="color: black"
          class="opacity-50"
        />
    </button>
</div>

<style>
    ::placeholder{
        color: #134E95;
        font-size: 1.5rem;
    }
</style>