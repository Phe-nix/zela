<script>
  /**
   * @type {any}
   */
  export let title;
</script>

<div class="flex flex-col my-3 w-96">
  <label class="text-black text-lg">{title}</label>
  <input
    type="text"
    placeholder={title}
    class="
    border-[1px]
    border-[#BFDBFE]
    bg-[#BFDBFE]
    rounded-[90px]
    p-2
    mt-1
    outline-none
    ring-1
    focus:ring-2
    focus:ring-[#BFDBFE]
    shadow-md
    focus:shadow-lg
    focus:shadow-[#A6E1FA]
    duration-300
    "
  />
</div>


<!-- <div class="w-72">
  <div class="relative w-full min-w-[200px] h-12 my-4">
    <input
      class="peer w-full h-full bg-[#b9e8ff] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "
    />
    <label
      class="
      flex 
      w-full 
      h-full 
      select-none 
      pointer-events-none 
      absolute 
      left-0 font-normal 
      !overflow-visible 
      truncate 
      peer-placeholder-shown:text-blue-gray-500 
      leading-tight 
      peer-focus:leading-tight 
      peer-disabled:text-transparent 
      peer-disabled:peer-placeholder-shown:text-blue-gray-500 
      transition-all 
      -top-2 
      peer-placeholder-shown:text-sm 
      text-[11px] 
      peer-focus:text-[11px] 
      before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
      >{title}
    </label>
  </div>
</div> -->
