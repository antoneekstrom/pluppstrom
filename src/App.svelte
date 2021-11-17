<script lang="ts">
  import TwoColumns from "./components/layout/TwoColumns.svelte";

  import Subtitle from "./components/typography/Subtitle.svelte";
  import Title from "./components/typography/Title.svelte";
  
  import About from "./content/About.svelte";
  import Contact from "./content/cv/Contact.svelte";
  import Education from "./content/cv/Education.svelte";
  import Experience from "./content/cv/Experience.svelte";
  import Me from "./content/cv/Me.svelte";
  import SkillsLanguages from "./content/cv/SkillsLanguages.svelte";
</script>

<div class="w-full grid place-items-center">
  <div class="max-w-screen-lg">
    <div class="p-6 md:p-16">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-2 lg:gap-0">
          <Title>Anton Ekström</Title>
          <Subtitle>IT student at Chalmers</Subtitle>
        </div>
        <TwoColumns>
          <div class="flex-grow order-3 sm:order-1">
            <Contact />
          </div>
          <div class="flex-grow order-2">
            <Me />
          </div>
        </TwoColumns>
        <div>
          <Experience />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <SkillsLanguages />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  </div>
</div>
