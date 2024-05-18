---
name: 'blog'
output: '.'
root: 'src/content/blog/'
ignore: []
questions:
  # value: 'Please enter any text.'
  title: 'Post title?'
  description: "Post description?"
  tags: "List tags separated by commas"
---

# `{{ inputs.title | kebab }}.mdx`

```markdown
---
title: "{{ inputs.title }}"
description: "{{ inputs.description }}"
hero: "https://source.unsplash.com/random/1024x768?blogging,dark"
heroDescription: "Alt text for post hero image"
date: {{ date }}
tags:
  - {{ inputs.tags }}
draft: false
---

<!--
Your post starts here. More info about using MDX with Astro
https://docs.astro.build/en/guides/markdown-content/#mdx-only-features
-->
```
