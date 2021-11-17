<script lang="ts">
  export let gray: boolean = false;
</script>

<p
  class={`${
    gray ? "text-gray-100" : "text-white"
  } font-regular leading-relaxed tracking-wide`}
>
  <slot />
</p>
