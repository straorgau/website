import { Feed } from "feed";

export default defineEventHandler(async (event) => {
  const baseUrl = getRequestURL(event).origin;
  const feed = new Feed({
    title: "Student Transport Riders Association - Blog",
    description: "All the blog posts and media releases from the Student Transport Riders Association",
    id: "stra-org-au",
    link: baseUrl,
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()} Student Transport Riders Association Incorporated`,
    updated: new Date(),
    generator: "Nuxt",
    feedLinks: {
      rss: `${baseUrl}/rss.xml`
    },
    author: {
      name: "Student Transport Riders Association"
    },
  });

  const articles = await queryCollection(event, 'blog').order('lastUpdated', 'DESC').all()

  articles.forEach((article) => {
    feed.addItem({
      title: article.title!,
      id: article.stem,
      description: article.description,
      date: new Date(article.lastUpdated),
      link: `${baseUrl}/${article.stem}`,
      content: article.bodyHtml,
    })
  });

  return feed.rss2();
});