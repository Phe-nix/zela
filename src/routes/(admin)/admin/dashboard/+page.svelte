<script>
  import Icon from "@iconify/svelte";
</script>

<div class="w-screen bg-[#F3F3F3] sm:p-10 p-5 text-center">
  <section
    class="font-mitr font-normal grid sm:grid-cols-5 grid-flow-row-1 gap-y-5 overflow-y-auto sm:justify-items-center"
  >
    <!-- ดูว่ามี กลุ่มกี่กลุ่ม ทั้งหมด ในดาต้าเบส -->
    <div class="py-6 px-10 flex flex-col gap-y-3 rounded-xl bg-[#f6d5da]">
      <div class="flex flex-row gap-2 items-center">
        <div class="rounded-full p-2 bg-[#d75c77]">
          <Icon
            icon="mdi:company"
            width="24"
            height="24"
            style="color: black"
          />
        </div>
        <p>Company</p>
      </div>
      <p class="text-4xl">0</p>
    </div>
    <!-- จำนวนแค่ camper ทั้งหมด -->
    <div class="py-6 px-10 flex flex-col gap-y-3 rounded-xl bg-[#c0f2d0]">
      <div class="flex flex-row gap-2 items-center">
        <div class="rounded-full p-2 bg-[#22974a]">
          <Icon
            icon="mdi:account"
            width="24"
            height="24"
            style="color: black"
          />
        </div>
        <p>Camper</p>
      </div>
      <p class="text-4xl">0</p>
    </div>
    <!-- จำนวนแค่ stuff ทั้งหมด -->
    <div class="py-6 px-10 flex flex-col gap-y-3 rounded-xl bg-[#dbea9f]">
      <div class="flex flex-row gap-2 items-center">
        <div class="rounded-full p-2 bg-[#718e22]">
          <Icon
            icon="mdi:account-group"
            width="24"
            height="24"
            style="color: black"
          />
        </div>
        <p>Stuff</p>
      </div>
      <p class="text-4xl">0</p>
    </div>
    <!-- จำนวนแค่ users ทั้งหมด -->
    <div class="py-6 px-10 flex flex-col gap-y-3 rounded-xl bg-[#f0dfb8]">
      <div class="flex flex-row gap-2 items-center">
        <div class="rounded-full p-2 bg-[#c47d32]">
          <Icon
            icon="mdi:account-group"
            width="24"
            height="24"
            style="color: black"
          />
        </div>
        <p>Users</p>
      </div>
      <p class="text-4xl">0</p>
    </div>
  </section>
</div>
