import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import services from "@/data/services";

export const metadata = {
  title: "Services | Oluwatobi Enitan",
  description: "Professional media services including media consultancy, ghost writing, voice over, documentary production, and news presentation.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="What I Offer"
        title="Services"
        description="Professional media, communication, and storytelling services tailored to your needs."
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {services.map((service) => (
              <Link href={`/service/${service.slug}`} key={service.slug} className="card service-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
                <h3 style={{ marginBottom: "0.75rem" }}>{service.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>{service.desc}</p>
                <span className="read-more" style={{ marginTop: "auto", paddingTop: "1rem", display: "block" }}>Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
