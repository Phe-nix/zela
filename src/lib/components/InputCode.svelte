<script>
    import Icon from "@iconify/svelte";
</script>

<div class="mx-4">
    <div class="flex flex-row">
        <input 
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
        <button class="bg-[#3090AA] p-3 rounded-full" >
            <Icon icon="carbon:send-alt-filled" width="32" height="32"  style="color: white" />
        </button>
    </div>
</div>

<style>
    ::placeholder {
        @apply font-chakraPetch;
    }
</style>