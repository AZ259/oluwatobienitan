import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import services from "@/data/services";

export async function generateStaticParams() {
  return services.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Oluwatobi Enitan`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="container section-padding text-center" style={{ minHeight: "60vh" }}>
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist or has been moved.</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <PageHeader
        badge="Service Scope"
        title={service.title}
        description={service.desc}
      />

      <section className="service-details-content section-padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card service-detail-card">
            <h3 className="detail-section-title">What is Included</h3>
            <ul className="detail-list">
              {service.details.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="detail-section-title" style={{ marginTop: "2.5rem" }}>The Professional Edge</h3>
            <p className="edge-text">{service.features}</p>

            <div className="service-cta-block">
              <h4>Interested in commissioning this service?</h4>
              <p>Get in touch to define your project scope, discuss timelines, and establish rates.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Book Consultation
                </Link>
                <Link href="/work" className="btn btn-secondary">
                  See Portfolio Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
