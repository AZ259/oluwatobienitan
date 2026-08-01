const ALLOWED_CATEGORIES = ["Politics", "National", "Court", "INEC"];

function decodeEntities(str) {
  if (!str) return "";
  const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
  return str.replace(/&#(\d+);/g, (_, c) => String.fromCodePoint(c))
    .replace(/&(#x[0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h.slice(2), 16)))
    .replace(/&(\w+);/g, (_, n) => named[n] || `&${n};`);
}

function stripHtml(str) {
  if (!str) return "";
  return decodeEntities(str.replace(/<[^>]*>/g, "")).trim();
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isAllowedCategory(wpPost) {
  const catName =
    wpPost._embedded?.["wp:term"]?.[0]?.[0]?.name || "";
  return ALLOWED_CATEGORIES.includes(catName);
}

export function mapPost(wpPost) {
  const author = wpPost._embedded?.author?.[0]?.name || "Oluwatobi Enitan";
  const category =
    wpPost._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";

  const rawContent = stripHtml(wpPost.content?.rendered || "");
  const paragraphs = rawContent
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40);

  const fallbackContent =
    paragraphs.length < 2
      ? stripHtml(wpPost.excerpt?.rendered || "")
      : paragraphs.join("\n\n");

  const featuredMedia = wpPost._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImage = featuredMedia?.source_url || null;
  const featuredImageAlt = featuredMedia?.alt_text?.trim() || "";
  const featuredImageWidth = featuredMedia?.media_details?.width || 1200;
  const featuredImageHeight = featuredMedia?.media_details?.height || 630;

  return {
    title: stripHtml(wpPost.title?.rendered),
    slug: wpPost.slug,
    category,
    date: formatDate(wpPost.date),
    author,
    summary: stripHtml(wpPost.excerpt?.rendered || ""),
    content: fallbackContent,
    featuredImage,
    featuredImageAlt,
    featuredImageWidth,
    featuredImageHeight,
  };
}
