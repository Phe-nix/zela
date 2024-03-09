<script>
    import Icon from "@iconify/svelte";
</script>

<div class="w-screen bg-[#F3F3F3] p-20 text-center">
  <section>
    <div class="py-2">
      <h1 class="text-4xl font-normal font-mitr py-2">What's Zela.</h1>
      <p class="text-lg font-light font-mitr">
        Zela is a platform that connects campers with campgrounds. We make it
        easy to find the perfect place to pitch your tent, park your RV, or rent
        a cabin. With Zela, you can discover new campgrounds, see real-time
        availability, and book your campsite all in one place.
      </p>
    </div>
    <div class="my-12">
        <h1 class="text-4xl font-normal font-mitr py-12">How is it good?</h1>
        <div class="flex sm:flex-row flex-col justify-evenly items-center">
            <div class="flex flex-col gap-y-4">
                <Icon icon="wpf:security-checked" width="60" height="60"  style="color: black" />
                <h1 class="text-lg font-light font-mitr">Secure</h1>
            </div>
            <div class="flex flex-col gap-y-4">
                <Icon icon="mdi:arm-flex" width="60" height="60"  style="color: black" />
                <h1 class="text-lg font-light font-mitr">Flexible</h1>
            </div>
            <div class="flex flex-col gap-y-4">
                <Icon icon="mdi:user-heart" width="60" height="60"  style="color: black" />
                <h1 class="text-lg font-light font-mitr">Easy to use</h1>
            </div>
            <div class="flex flex-col gap-y-4">
                <Icon icon="ion:business-sharp" width="60" height="60"  style="color: black" />
                <h1 class="text-lg font-light font-mitr">For campus</h1>
            </div>
        </div>
    </div>
  </section>
</div>
