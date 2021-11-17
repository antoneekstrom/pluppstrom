<script>
  import Paragraph from "../typography/Paragraph.svelte";
</script>

<div>
  <div class="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center">
    <h1 class="text-xl text-white font-semibold leading-none">
      <slot name="title" />
    </h1>
    <h2 class="text-lg text-white font-regular leading-none">
      <slot name="title-secondary" />
    </h2>
  </div>
  <div class="mt-4 lg:mt-2">
    <span class="text-sm text-gray-100 font-regular uppercase">
      <slot name="date" />
    </span>
  </div>
  <div class="mt-3">
    <Paragraph>
      <slot name="content" />
    </Paragraph>
  </div>
</div>
