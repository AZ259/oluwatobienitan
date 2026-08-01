import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="section-padding" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1rem" }}>404</h1>
          <h2 style={{ marginBottom: "1rem" }}>Page Not Found</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: 500, margin: "0 auto 2rem" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
