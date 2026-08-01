import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { categories, works } from "@/data/work";

const categoryMap = {
  "surviving-nigeria": {
    categoryId: "surviving-nigeria",
    name: "Surviving Nigeria",
    desc: "Stories of economic endurance, security struggles, and local community resilience across Nigeria."
  },
  "my-publications": {
    categoryId: "my-publications",
    name: "My Publications",
    desc: "Articles, policy papers, and essays covering governance, education, and human rights advocacy."
  },
  "unbiased-with-enitan": {
    categoryId: "unbiased-with-enitan",
    name: "Unbiased with Enitan",
    desc: "Unfiltered discussions, exclusive interviews, and direct talk on national policies."
  },
  "all-that-happened-in-nigeria": {
    categoryId: "all-that-happened-in-nigeria",
    name: "All that Happened in Nigeria",
    desc: "Investigative files, frontline security report updates, and community profiles from the ground."
  }
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }) {
  const categorySlug = (await params).category;
  const category = categoryMap[categorySlug];

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Oluwatobi Enitan`,
    description: category.desc,
  };
}

export default async function PortfolioCategoryPage({ params }) {
  const categorySlug = (await params).category;
  const category = categoryMap[categorySlug];

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="container section-padding text-center" style={{ minHeight: "60vh" }}>
          <h2>Category Not Found</h2>
          <p>The portfolio category you are looking for does not exist.</p>
          <Link href="/work" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Back to Portfolio
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const categoryWorks = works.filter((w) => w.category === category.categoryId);

  return (
    <>
      <Navbar />

      <PageHeader
        badge="Category File"
        title={category.name}
        description={category.desc}
      />

      <section className="category-content section-padding">
        <div className="container">
          {categoryWorks.length === 0 ? (
            <div className="text-center card" style={{ padding: "4rem" }}>
              <h4>No Items Found</h4>
              <p>There are currently no items published in this category yet.</p>
              <Link href="/work" className="btn btn-secondary" style={{ marginTop: "1rem" }}>
                Browse All Work
              </Link>
            </div>
          ) : (
            <div className="grid-3">
              {categoryWorks.map((work, idx) => (
                <div key={idx} className="card work-card">
                  <span className="badge work-badge">{category.name}</span>
                  <h3 className="work-card-title">{work.title}</h3>
                  <span className="work-type">{work.type}</span>
                  <p className="work-card-desc">{work.desc}</p>
                  <div style={{ marginTop: "auto", display: "flex", gap: "1rem", width: "100%" }}>
                    <Link href="/work" className="btn btn-secondary btn-sm" style={{ width: "100%" }}>
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
