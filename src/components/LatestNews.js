import Image from "next/image";
import Link from "next/link";
import { getLatestPosts } from "@/data/blog";

export default async function LatestNews() {
  const posts = await getLatestPosts(3);

  if (posts.length === 0) {
    return (
      <div className="card blog-card">
        <p className="text-muted">Latest reports are temporarily unavailable. Please check back soon.</p>
      </div>
    );
  }

  return posts.map((post) => (
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
      <h3 className="blog-title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="blog-meta">
        <span>By {post.author}</span>
        <span>&bull;</span>
        <span>{post.date}</span>
      </div>
    </div>
  ));
}
