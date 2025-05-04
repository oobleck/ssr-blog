import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function parseMarkdown(input: string): string {
  if (!input) {
    return '';
  }

  const formatted = await unified()
    .use({
      plugins: [remarkParse, remarkRehype, rehypeSanitize, [rehypeStringify, { closeSelfClosing: true }]],
      settings: {
        position: false,
      },
    })
    .process(input);

  return String(formatted);
}
