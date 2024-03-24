<script>
  import SocialLinks from "./SocialLinks.svelte";
  import { settings } from "../data/settings.ts";

  export const getData = async () => {
    const resumeUrl = "https://gitconnected.com/v1/portfolio/oobleck";
    // const resumeUrl = "/resume.json";
    const response = await fetch(resumeUrl);
    return await response.json();
  };

  export const resume = getData();

  export const formatDate = (date) => {
    return new Date(date).toLocaleString("en-us", {
      day: void 0,
      year: "numeric",
      month: "short",
    });
  };
</script>

<article class="h-resume">
  {#await resume}
    <h5>Loading resume...</h5>
    <p class="screen-only"><a href="/spencer-rhodes-resume.pdf">Download PDF Resume</a></p>
  {:then data}
    <header>
      <h1 class="page-title p-name">
        {data.basics?.name}
        <small>{settings.description}</small>
      </h1>
      <h4 class="description p-summary">
        {data.basics?.headline}
      </h4>
      <!-- <AboutMe /> -->
      {#if data.basics?.summary}
        <p>{data.basics.summary}</p>
      {/if}
      <p class="screen-only"><a href="/spencer-rhodes-resume.pdf">Download PDF Resume</a></p>
      <SocialLinks compact={true} list={false} homepage={true} geo={false} pdf={true} />
    </header>

    {#if data.skills?.length}
      <section id="skills">
        <h3>Skills</h3>
        <section class="skillsets">
          {#each data.skills as { keywords, name }}
            <div class="skillset">
              <h5>{name}</h5>
              <ul>
                {#each keywords as kw}
                  <li class="p-skill">{kw}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </section>
      </section>
    {/if}

    {#if data.work?.length}
      <section id="work">
        <h3>Experience</h3>
        {#each data.work as position}
          <article class="position p-experience h-event h-card">
            <header>
              <hgroup>
                <h5 class="p-name p-job-title">{position.position}</h5>
                <h6>
                  <a
                    class="u-url p-org"
                    href={position.website}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {position.company}
                  </a>
                </h6>
              </hgroup>
              <div class="metadata">
                <div class="dates">
                  <span class="start-date">
                    <time datetime={position.startDate} class="dt-start"
                      >{formatDate(position.startDate)}
                    </time></span
                  >
                  –
                  <span class="end-date">
                    {#if !position.endDate}
                      <span class="dt-end">Present</span>
                    {:else}
                      <time datetime={position.endDate} class="dt-end"
                        >{formatDate(position.endDate)}</time
                      >
                    {/if}
                  </span>
                </div>
                <div class="h-geo p-location">{position.location}</div>
              </div>
            </header>
            {#if position.summary}
              <p class="p-summary">{position.summary}</p>
            {/if}
            {#if position.description}
              <p class="p-description e-content">{position.description}</p>
            {/if}
            {#if position.highlights?.length}
              <ul>
                {#each position.highlights as hl}
                  <li>{hl}</li>
                {/each}
              </ul>
            {/if}
          </article>
        {/each}
      </section>
    {/if}

    {#if data.education?.length}
      <section id="education">
        <h3>Education</h3>
        {#each data.education as { institution, area, studyType, endDate, activities = [], website }}
          <article class="institution p-experience h-event h-card">
            <header>
              <h5>
                <a
                  href={website}
                  rel="noreferrer"
                  target="_blank"
                  class="p-org u-url"
                >
                  {institution}
                </a>
              </h5>
              <div class="metadata">
                <div class="dates">
                  <span class="end-date">
                    {#if endDate}
                      <time datetime={endDate} class="dt-end"
                        >{formatDate(endDate)}</time
                      >
                    {:else}
                      <span class="dt-end">Present</span>
                    {/if}
                  </span>
                </div>
              </div>
            </header>
            {#if studyType}
              <p class="p-summary p-description e-content">
                {studyType} – {area}
              </p>
            {/if}
          </article>
        {/each}
      </section>
    {/if}

    {#if data.references}
      <section id="references">
        <h3>
          <span class="print-only">Recent<br></span>
          References
        </h3>
        {#each data.references as { reference, name }}
          <blockquote class="reference h-review">
            <input type="hidden" name={settings.title} class="h-item p-item" />
            <q class="e-content">{reference}</q>
            <cite class="p-author h-card">{name}</cite>
          </blockquote>
        {/each}
      </section>
    {/if}
  {/await}
</article>

<style>
  @import "open-props/media";

  :root {
    --grid-max-width: 60rem !important;
  }

  q:first-letter {
    display: inline-block;
    margin-inline: -1ch 0.4ch;
  }

  section {
    margin-block: var(--space-xl);
    position: relative;

    > section {
      margin-block: var(--space-s);
    }

    header,
    hgroup {
      > * {
        margin-block: 1rem;

        @media (--md-n-above) {
          margin-block: 0;
        }
      }
    }

    header {
      position: relative;
      width: auto;
      margin-block-end: 1.618em;

      @media (--md-n-above) {
        display: grid;
        grid-template-areas: "content metadata";
        grid-template-columns: 3fr 1fr;
        gap: var(--grid-gutter);

        .metadata {
          text-align: end;
        }
      }

      > * {
        grid-area: content;
      }

      > .metadata {
        grid-area: metadata;
        font-size: var(--step--1);
        /* font-weight: var(--weight-semibold); */
        color: unset;
      }
    }
  }

  article {
    margin-block: 1.618em;
  }

  #skills {
    .skillsets {
      @media (--md-n-above) {
        display: grid;
        gap: var(--grid-gutter);
        grid-template-columns: 1fr 1fr 1fr;
      }
      .skillset {
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 1ch;
      grid-template-columns: repeat(2, 1fr);

      li {
        padding: 0;
      }
    }
  }

  .reference {
    padding: var(--space-xs-s) var(--space-s-m);
    background-color: var(--paper);
    margin: 0;
    border-inline-start: 0.5ch solid var(--brand-subtle);

    cite {
      margin-block-start: var(--space-s-m);

      &::before {
        content: '–';
        display: inline-block;
        padding-inline-end: 0.5ch;
      }
    }

    :where(q, cite) {
      display: block;
    }

    p {
      margin-block-start: 0;
    }

    ~ .reference {
      margin-block-start: var(--grid-gutter);
    }

    @media (--md-n-above) {
      --offset: var(--space-l-xl);

      &:nth-child(even) {
        margin-inline-end: var(--offset);
      }
      &:nth-child(odd) {
        margin-inline-start: var(--offset);
      }
    }
  }

  @media print {
    :global(#site-header, #site-footer, astro-dev-toolbar) {
      display: none !important;
    }

    :global(body) {
      & {
        --grid-max-width: 100% !important;

        zoom: 0.7;
      }

      :is(p, p.lead) {
        font-size: var(--step-0) !important;
      }

      .u-container {
        width: 100% !important;
        max-width: 10in !important;
      }

      :where(h1) {
        margin-block-start: 0 !important;
      }

      :where(h1, .p-job-title) {
        color: var(--brand-shade) !important;
      }

      :where(h3, h4, h5, h6) {
        margin-block-end: 0 !important;
      }

      .skillset {
        ul {
          display: block !important;
          gap: 0 !important;

          li {
            display: inline-block !important;
            width: unset !important;
            padding-inline-end: 0 !important;
            margin-inline-end: 0 !important;

            &:not(:last-child) {
              &:after {
                content: ",";
                display: inline-block;
                margin-inline-end: 0.25ch;
              }
            }
          }
        }
      }

      .p-experience {
        header {
          display: block !important;
          vertical-align: top;

          hgroup {
            /* float: left !important; */
            display: inline-block !important;
            width: 73% !important;
          }
          .metadata {
            /* float: right !important; */
            display: inline-block !important;
            width: 25% !important;
            text-align: end;
            vertical-align: top;
          }
          :where(h5, h6) {
            margin-block: 0 !important;
          }
        }

        &.institution {
          h5 {
            display: inline-block !important;
            width: 73% !important;
          }
        }

        a {
          color: unset !important;
          text-decoration: none;

          &::after {
            display: block;
            content: attr(href);
            font-weight: var(--weight-normal);
            font-size: var(--step-0);
          }
        }
      }

      section[id] {
        width: 79% !important;
        margin-inline: auto 0 !important;
        position: relative !important;

        > h3 {
          position: absolute !important;
          top: 0;
          left: -27%;
          vertical-align: top !important;
          margin: 0 !important;
          font-size: 1.618rem !important;
        }
      }
      /* :where(.p-experience, .institution) { */
      :where(article) {
        page-break-inside: avoid;
      }
    }

    #references {
      /* display: none; */
      page-break-before: always;

      .reference {
        display: none;
        padding-block: 0 !important;

        &:nth-child(-n+4) {
          display: block;
        }
      }
    }
  }
</style>
