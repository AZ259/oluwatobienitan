import { getPosts, getPostBySlug, getAllPostSlugs } from "@/lib/wp";
import { mapPost, isAllowedCategory } from "@/lib/wp-mapper";

export async function getLatestPosts(count = 6) {
  try {
    const perPage = Math.min(count * 10, 100);
    const posts = await getPosts({ perPage });
    const mapped = (Array.isArray(posts) ? posts : [])
      .filter(isAllowedCategory)
      .map(mapPost);
    return mapped.slice(0, count);
  } catch (e) {
    console.error("Failed to fetch latest posts:", e);
    return [];
  }
}

export async function getArticle(slug) {
  try {
    const post = await getPostBySlug(slug);
    if (!post) return null;
    return mapPost(post);
  } catch (e) {
    console.error("Failed to fetch article:", e);
    return null;
  }
}

export async function getAllArticleSlugs() {
  try {
    const slugs = await getAllPostSlugs();
    return Array.isArray(slugs) ? slugs : [];
  } catch (e) {
    console.error("Failed to fetch slugs:", e);
    return [];
  }
}
