import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLatestPosts } from "@/data/blog";
import newsImage from "../news.png";

const categories = ["all", "Politics", "National", "Court", "INEC"];
const POSTS_PER_PAGE = 6;

export default async function Blog({ searchParams }) {
  const { category, page } = await searchParams;
  const activeCategory = category || "all";
  const currentPage = Number(page) || 1;

  const allPosts = await getLatestPosts(100);
  const filteredPosts = activeCategory === "all"
    ? allPosts
    : allPosts.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function pageHref(p) {
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("category", activeCategory);
    if (p > 1) params.set("page", p);
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src={newsImage}
            alt=""
            fill
            className="hero-bg-image"
            preload
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Newsroom</span>
            <h1 className="hero-title">Fearlessly Factual News</h1>
            <p className="hero-desc">
              Political analysis, national security dispatches, and court proceedings from across Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-hub section-padding">
        <div className="container">

          <div className="blog-tabs">
            {categories.map((cat) => {
              const href = cat === "all" ? "/blog" : `/blog?category=${cat}`;
              const isActive = activeCategory === cat;
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`blog-tab ${isActive ? "active" : ""}`}
                >
                  {cat === "all" ? "All Stories" : cat}
                </Link>
              );
            })}
          </div>

          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {paginatedPosts.map((post) => (
              <div key={post.slug} className="card blog-card">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    width={post.featuredImageWidth || 800}
                    height={post.featuredImageHeight || 450}
                    className="blog-card-image"
                  />
                )}
                <span className="badge blog-badge">{post.category}</span>
                <h3 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-summary">{post.summary}</p>
                <div className="blog-footer-meta">
                  <div className="blog-author-info">
                    <span>By {post.author}</span>
                    <span className="date-sep">&bull;</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="read-story-link">
                    Read Post &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="pagination">
              {currentPage > 1 && (
                <Link href={pageHref(currentPage - 1)} className="pagination-link">
                  &larr; Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={pageHref(p)}
                  className={`pagination-link${p === currentPage ? " active" : ""}`}
                >
                  {p}
                </Link>
              ))}
              {currentPage < totalPages && (
                <Link href={pageHref(currentPage + 1)} className="pagination-link">
                  Next &rarr;
                </Link>
              )}
            </nav>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
