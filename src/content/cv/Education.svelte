<script>
  import ArticleList from "/src/components/article/ArticleList.svelte";

  import Article from "/src/components/article/Article.svelte";
  import SectionHeader from "/src/components/typography/SectionHeader.svelte";
</script>

<div>
  <SectionHeader>Education</SectionHeader>
  <div>
    <ArticleList>
      <li>
        <Article>
          <span slot="title">Chalmers University of Technology</span>
          <span slot="title-secondary">Software Engineering</span>
          <span slot="date">AUG 2020 - JUN 2025, Gothenburg, Sweden</span>
          <span slot="content"
            >Currently pursuing a bachelor’s degree in Software Engineering.
            Afterwards I plan to continue studying for a master’s degree. I
            couldn’t be happier with studying here and I’ve met so many
            wonderful people.</span
          >
        </Article>
      </li>
      <li>
        <Article>
          <span slot="title">Elof Lindälvs Gymnasium</span>
          <span slot="title-secondary">Technical</span>
          <span slot="date">AUG 2017 - JUN 2020, Kungsbacka, Sweden</span>
          <span slot="content"
            >Technical education with an orientation in information technology.
            I passed the majority of courses with special distinction and also
            took additional courses in mathematics, physics and english.</span
          >
        </Article>
      </li>
    </ArticleList>
  </div>
</div>
