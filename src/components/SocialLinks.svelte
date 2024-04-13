<script>
  import Icon from "@iconify/svelte";
  import { social, settings } from "../data/settings";
  export let pdf = false;
  export let homepage = false;
  export let rss = true;
  export let pixelfed = true;
  export let socialLinks = social.filter(({name, url, icon}) => {
    switch (true) {
      case /\.pdf/i.test(url):
        return pdf;

      case /home/i.test(icon):
        return homepage;

      case /rss/i.test(icon):
        return rss;

      case /pixelfed/i.test(icon):
        return pixelfed;

      default:
        return true;
    }
  });
</script>

<ul class="social" style={`--socials-count: ${socialLinks.length}`}>
  {#each socialLinks as { icon, url, name }}
    <li class="{/pdf/.test(icon) ? 'screen-only' : ''} {/home/.test(icon) ? 'print-only' : ''}">
      <a
        href={url}
        class="social__link"
        rel="me noreferrer"
        target="_blank"
        title={name}
      >
        <span class="sr-only">
          {settings.owner} on {name}
        </span>
        <Icon icon={icon} class="social__icon" />
      </a>
    </li>
  {/each}
</ul>

<style>
  .social {
    --target-gap: clamp(0.2rem, var(--space-2xs), 1rem);
    --target-gap: var(--space-2xs);

    padding: 0;
  }

  ul {
    list-style: none;
    display: flex;
    gap: var(--target-gap, 1rem);
  }

  a {
    display: block;
    transition: all 0.2s var(--ease-3);
    font-size: var(--step-0);
    padding: 0.5em;
    background-color: var(--link);
    border-radius: 50%;
    color: white;

    &:hover {
      color: white;
      background-color: var(--link-hover);
      transform-origin: 50% 50%;
      transform: scale(1.25);
    }

    &:focus {
      color: white;
      outline-color: var(--link);
    }
  }

  :global(.social a svg) {
    display: block;
    width: 1em;
    height: 1em;
  }

  @media print {
    :where(ul.social) {
      /* display: block !important; */
      all: unset !important;
      list-style: none !important;

      :global(svg) {
        position: relative !important;
        font-size: 1.1em !important;
        display: inline-block !important;
        margin-inline-end: 0.5ch;
        bottom: -0.2em;
        color: var(--brand-shade);

        &[data-icon*="mail"],
        &[data-icon*="home"] {
          font-size: 1.3em !important;
        }
      }
      a {
        all: unset !important;

        &::after {
          content: attr(href);
        }
        &[href*="/contact"]::after {
          content: attr(title);
        }
      }
      li {
        display: inline-block !important;
        width: 50% !important;
      }
    }
  }
</style>
