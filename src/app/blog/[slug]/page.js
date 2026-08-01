import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { getArticle, getAllArticleSlugs } from "@/data/blog";

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Oluwatobi Enitan`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="container section-padding text-center" style={{ minHeight: "60vh" }}>
          <h2>Article Not Found</h2>
          <p>The post you are trying to view does not exist or has been deleted.</p>
          <Link href="/blog" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Back to Newsroom
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const paragraphs = article.content.split("\n\n").map(p => p.trim()).filter(Boolean);

  return (
    <>
      <Navbar />
      <article className="blog-article section-padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Link href="/blog" className="back-link no-print">
            &larr; Back to Newsroom
          </Link>
          <header className="article-header">
            <span className="badge article-badge">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <span><strong>Written by:</strong> {article.author}</span>
              <span>&bull;</span>
              <span>{article.date}</span>
            </div>
          </header>
          {article.featuredImage && (
            <Image
              src={article.featuredImage}
              alt={article.featuredImageAlt || article.title}
              width={article.featuredImageWidth}
              height={article.featuredImageHeight}
              className="article-featured-image"
              priority
            />
          )}
          <div className="article-body">
            <p className="article-lead">{article.summary}</p>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="article-paragraph">{p}</p>
            ))}
          </div>
          <div className="article-share-footer no-print">
            <h4>Share this story:</h4>
            <ShareButtons title={article.title} />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
