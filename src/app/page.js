import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";
import services from "@/data/services";
import { categories, works } from "@/data/work";
import heroImage from "./hero_image.jpg";

export default async function Home() {
  const featuredWorks = works.filter((w) => w.featured);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src={heroImage}
            alt=""
            fill
            className="hero-bg-image"
            preload
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Journalist & Media Entrepreneur</span>
              <h1 className="hero-title">
                Fearless and Factual Reporting
              </h1>
            <p className="hero-desc">
              For the sake of truth, transparency, and accountability. Oluwatobi Enitan is a seasoned field reporter, presenter, and media consultant covering political affairs and defense issues.
            </p>
            <div className="hero-ctas">
              <Link href="/work" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="latest-news section-padding bg-dark">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Latest Reports & News</h2>
              <p className="section-subtitle">Stay informed with fearless, factual journalism covering national developments.</p>
            </div>
            <Link href="/blog" className="btn btn-secondary">
              View All News
            </Link>
          </div>

          <div className="grid-3">
            <Suspense fallback={<div className="card blog-card skeleton-card">Loading latest news...</div>}>
              <LatestNews />
            </Suspense>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="about-skills section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="about-brief">
              <h2 className="section-title">About Me</h2>
              <p className="text-large">
                Oluwatobi Enitan is a seasoned Journalist with nearly a decade of experience in the field. Known for her innovative approach and entrepreneurial spirit, she embodies the qualities of a creative entrepreneur, with a keen eye for storytelling and a passion for uncovering untold narratives.
              </p>
              <p>
                She stands out as a passionate Field Reporter, notably having reported on insurgency from the war front, navigating conflict zones such as Bama, Dikwa, Sambisa, and the crisis epicenter in Southern Kaduna.
              </p>
              <Link href="/about" className="btn btn-secondary" style={{ marginTop: "1.5rem" }}>
                Learn More About Me
              </Link>
            </div>

            <div className="skills-panel card">
              <h3 className="card-title">Professional Skills</h3>
              <p className="text-muted" style={{ marginBottom: "2rem" }}>
                Leveraging cross-disciplinary skills to deliver rich, verified media content.
              </p>
              
              <div className="skill-bar-container">
                <div className="skill-bar-info">
                  <span className="skill-bar-title">Journalism & Field Reporting</span>
                  <span className="skill-bar-percent">95%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <div className="skill-bar-info">
                  <span className="skill-bar-title">Voiceover Artistry</span>
                  <span className="skill-bar-percent">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <div className="skill-bar-info">
                  <span className="skill-bar-title">Documentary & Video Editing</span>
                  <span className="skill-bar-percent">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">
              Professional services tailored to amplify impact and build narratives that resonate.
            </p>
          </div>

          <div className="grid-3">
            {services.map((svc) => (
              <div key={svc.slug} className="card service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <Link href={`/service/${svc.slug}`} className="service-link">
                  Read more <span>+</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work & Publications Section */}
      <section className="featured-work section-padding">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Featured Work & Publications</h2>
              <p className="section-subtitle">A glimpse into investigative reports, research papers, and exclusive interviews.</p>
            </div>
            <Link href="/work" className="btn btn-secondary">
              View All Work
            </Link>
          </div>

          <div className="grid-3">
            {featuredWorks.map((work, idx) => (
              <div key={idx} className="card work-card">
                <span className="badge work-badge">{categories.find((c) => c.id === work.category)?.name}</span>
                <h3 className="work-card-title">{work.title}</h3>
                <span className="work-type">{work.type}</span>
                <p className="work-card-desc">{work.desc.substring(0, 110)}...</p>
                <Link href="/work" className="read-more">
                  View Details <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Platforms Preview */}
      <section className="platforms section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Editorial Platforms</h2>
            <p className="section-subtitle">
              Dedicated content channels dissecting the issues that shape our society.
            </p>
          </div>

          <div className="grid-3">
            <div className="card platform-card">
              <div className="platform-banner p-survive">Surviving Nigeria</div>
              <h3 className="platform-title">Surviving Nigeria</h3>
              <p>Isn’t just about endurance—it’s about resilience, creativity, and grit in a shifting economic landscape.</p>
              <Link href="/portfolio-category/surviving-nigeria" className="btn btn-secondary btn-sm">
                Explore Platform
              </Link>
            </div>

            <div className="card platform-card">
              <div className="platform-banner p-all">All Happened in Nigeria</div>
              <h3 className="platform-title">All That Happened in Nigeria</h3>
              <p>A reminder of loss, resilience, and unfinished stories that standard news channels miss.</p>
              <Link href="/portfolio-category/all-that-happened-in-nigeria" className="btn btn-secondary btn-sm">
                Explore Platform
              </Link>
            </div>

            <div className="card platform-card">
              <div className="platform-banner p-unbiased">Unbiased With Enitan</div>
              <h3 className="platform-title">Unbiased With Enitan</h3>
              <p>A space for honest, unfiltered conversations regarding policy, governance, and national development.</p>
              <Link href="/portfolio-category/unbiased-with-enitan" className="btn btn-secondary btn-sm">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Call to Action */}
      <section className="cta section-padding">
        <div className="container cta-container card">
          <h2 className="cta-title">Ready to collaborate on your next story or project?</h2>
          <p className="cta-desc">Let’s connect to discuss media production, ghost writing, voice narration, or consultancy options.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <a href="mailto:info@oluwatobienitan.com" className="btn btn-secondary">
              Send us an email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
