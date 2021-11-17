<script>
  import ArticleList from "/src/components/article/ArticleList.svelte";

  import Article from "/src/components/article/Article.svelte";
  import SectionHeader from "/src/components/typography/SectionHeader.svelte";
</script>

<div>
  <SectionHeader>Experience</SectionHeader>
  <div>
    <ArticleList>
      <li>
        <Article>
          <span slot="title">Committees at Chalmers</span>
          <span slot="title-secondary">Treasurer digIT 21 & PR ArmIT 21</span>
          <span slot="date">FEB 2021 - MAR 2022, Gothenburg, Sweden</span>
          <span slot="content"
            >Involved in two committees at the IT student division. digIT
            maintains and develops software for students and committees at the
            division. ArmIT communicates with businesses that want to get in
            contact with students. It has helped me grow and develop my
            personality, and I’ve learned a lot about collaborating with others.</span
          >
        </Article>
      </li>
      <li>
        <Article>
          <span slot="title">Course Assistant at Chalmers</span>
          <span slot="title-secondary">Programming courses</span>
          <span slot="date">2021, gothenburg, sweden</span>
          <span slot="content"
            >Course assistant for Introductory Software Development and Object
            Oriented Programming and Design. Helped me become better at
            communicating code and design, and also understanding others code.
            It was really fun helping others with programming.</span
          >
        </Article>
      </li>
      <li>
        <Article>
          <span slot="title">Kungsbacka Municipality</span>
          <span slot="title-secondary">Caretaker</span>
          <span slot="date">JUL 2018 - AUG 2018, Kungsbacka, Sweden</span>
          <span slot="content"
            >General maintenance, gardening and furniture relocation. It was a
            rewarding and meaningful experience working a physical job together
            with a group, even though it has been a while since then.</span
          >
        </Article>
      </li>
    </ArticleList>
  </div>
</div>
