import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return rss({
    title: 'Chris Krough',
    description: 'Working observations on building agentic workflows in production.',
    site: context.site,
    items: notes
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((note) => ({
        title: note.data.title,
        description: note.data.description,
        pubDate: note.data.pubDate,
        link: `/notes/${note.slug}`,
      })),
  });
}
