const API = "https://oluwatobienitan.com/wp-json/wp/v2";

export async function fetchAPI(endpoint, params = {}) {
  const url = new URL(`${API}/${endpoint}`);
  url.search = new URLSearchParams({ _embed: "1", ...params }).toString();
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    console.error(`WP API error: ${res.status} for ${url}`);
    return [];
  }
  return res.json();
}

export async function getPosts({ page = 1, perPage = 10 } = {}) {
  return fetchAPI("posts", { page, per_page: perPage });
}

export async function getPostBySlug(slug) {
  const posts = await fetchAPI("posts", { slug });
  return posts[0] || null;
}

export async function getAllPostSlugs() {
  const posts = await fetchAPI("posts", { per_page: 100, _fields: "slug" });
  if (!Array.isArray(posts)) return [];
  return posts.map((p) => ({ slug: p.slug }));
}
