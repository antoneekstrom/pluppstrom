<script>
  import IconLink from "/src/components/icons/IconLink.svelte";

  import GitHub from "/src/components/icons/GitHub.svelte";
  import LinkedIn from "/src/components/icons/LinkedIn.svelte";

  import Paragraph from "/src/components/typography/Paragraph.svelte";

  import SectionHeader from "/src/components/typography/SectionHeader.svelte";
</script>

<div>
  <SectionHeader>Contact</SectionHeader>
  <div class="flex flex-col gap-2">
    <ul class="flex flex-col">
      <li>
        <Paragraph gray>Anton Ekström</Paragraph>
      </li>
      <li>
        <Paragraph>anton.e.ekstrom@gmail.com</Paragraph>
      </li>
    </ul>
    <ul class="flex flex-row items-center gap-4">
      <li>
        <IconLink href="https://www.linkedin.com/in/anton-e-ekstrom/">
          <LinkedIn />
        </IconLink>
      </li>
      <li>
        <IconLink href="https://github.com/zimbosaurus">
          <GitHub />
        </IconLink>
      </li>
    </ul>
  </div>
</div>
