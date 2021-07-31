---
title: Template for writing blog
description: This is the short description under the title
author: Your name here
readingTime: 7
popularity: 4
---

## Section title one

This is how you make a section title in the markdown file, by using a h2 title `## title`
Noted that h1 title `# big title` won't be included in the table of content on the right

### Subsection title one

However h3 title `### subtitle` would be included in the table of content
Here shows the style of different headers:

# h1

## h2

### h3

#### h4

##### h5

###### h6

## Writing code

In markdown file, you can write code by wrapping your code inside backticks `` ` ``. there are two types of displaying codes
1. `inline code` \`inline code\`
2. ```
    codeblocks
    ```
    \```
    codeblocks
    \```

## Links
It is possible to create different types of internal and external links in the markdown file

```markdown [link.md]
<nuxt-link to="/blog">Nuxt Link to Blog</nuxt-link>

<a href="/blog">Html Link to Blog</a>

[Markdown Link to Blog](/blog)

<a href="https://content.nuxtjs.org">External link html</a>

[External Link markdown](https://content.nuxtjs.org)
```

1. <nuxt-link to="/blog">Nuxt Link to Blog</nuxt-link>

2. <a href="/blog">Html Link to Blog</a>

3. [Markdown Link to Blog](/blog)

4. <a href="https://content.nuxtjs.org">External link html</a>

5. [External Link markdown](https://content.nuxtjs.org)

## Images
To embed photos in the article, you may use either markdown builtin syntax or html `<img>` tag

1. ![A logo of Nuxt Content](https://content.nuxtjs.org/logo-light.svg)

2. ![A logo of Nuxt Content with title](https://content.nuxtjs.org/logo-light.svg "A logo of Nuxt Content")

3. [![Image link to Nuxt Content](https://content.nuxtjs.org/logo-light.svg)](/)

4. [![Image link to Nuxt Content with title](https://content.nuxtjs.org/logo-light.svg "Image link to Nuxt Content")](/)

```markdown
1. ![A logo of Nuxt Content](https://content.nuxtjs.org/logo-light.svg)

2. ![A logo of Nuxt Content with title](https://content.nuxtjs.org/logo-light.svg "A logo of Nuxt Content")

3. [![Image link to Nuxt Content](https://content.nuxtjs.org/logo-light.svg)](/)

4. [![Image link to Nuxt Content with title](https://content.nuxtjs.org/logo-light.svg "Image link to Nuxt Content")](/)
```

## Footnotes
You may also embed footnotes in the article if you have references or additional information to refer to.

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.


```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs with 4 spaces to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```

<nuxt-link to="#">Back to Top</nuxt-link>