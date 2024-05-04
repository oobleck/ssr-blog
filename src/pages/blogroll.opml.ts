import { settings } from "../data/settings.js";
import { blogroll, BlogrollItem } from "../data/blogroll";

const utcDate = (date?: string) => new Date(date).toUTCString();

export async function GET() {
  const outlines = blogroll
    // Only render items with a syndicationLink
    .filter(({ syndicationLink }: BlogrollItem) => !!syndicationLink)
    .sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
    .map((item) => {
      const type = item.syndicationLink?.includes('rss') ? 'rss' : 'atom';
      return `<outline
        text="${item.label}"
        title="${item.label}"
        description="${item.description}"
        htmlUrl="${item.webpage[0]}"
        type="${type}"
        xmlUrl="${item.syndicationLink}"
        created="${utcDate(item.dateAdded as string)}"
        category="${item.category},${item.tags?.join(', ')}"
      />`.replace(/[\s\r\n]+/gm, ' ');
    });
  const options = {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
    }
  };
  return new Response(`<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/xsl" href="/opml.xsl"?>
<opml version="2.0">
  <head>
    <title>${settings.owner}'s Blogroll</title>
    <dateCreated>${utcDate('2024-04-05 22:15:23 PST')}</dateCreated>
    <dateModified>${utcDate(Date.now())}</dateModified>
    <ownerName>${settings.owner}</ownerName>
    <ownerId>${settings.site}</ownerId>
    <docs>http://opml.org/spec2.opml</docs>
  </head>
  <body>
    ${outlines.join('\n')}
  </body>
</opml>
`, options);
}
