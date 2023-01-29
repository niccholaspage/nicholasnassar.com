import { getCollection } from "astro:content";

export async function getLatestBlogPosts() {
  return (await getCollection("blog")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
