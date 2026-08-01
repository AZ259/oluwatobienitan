"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import contactHero from "../contact-us.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ submitting: false, success: false, error: "Something went wrong. Please try again later." });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src={contactHero}
            alt=""
            fill
            className="hero-bg-image"
            preload
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Get in Touch</span>
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-desc">
              I understand the importance of approaching each project integrally. Feel free to reach out for bookings, consultancy, or collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="grid-2">
            
            {/* Contact Details Panel */}
            <div className="contact-info-panel">
              <h2 className="section-title">Let&apos;s Connect</h2>
              <p className="text-large" style={{ marginBottom: "2rem" }}>
                Whether you want to commission a documentary, book a voiceover session, hire a ghostwriter, or consult on media strategy, I am ready to help.
              </p>

              <div className="info-cards">
                <div className="card info-item-card">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Office Address</h4>
                    <p>Abuja, Federal Capital Territory, Nigeria</p>
                  </div>
                </div>

                <div className="card info-item-card">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>Direct Email</h4>
                    <p>info@oluwatobienitan.com</p>
                    <p>collabs@oluwatobienitan.com</p>
                  </div>
                </div>

                <div className="card info-item-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone Contacts</h4>
                    <p>+234 (0) 800-000-0000</p>
                    <p>+234 (0) 801-111-1111</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="contact-form-panel card">
              <h3 className="card-title">Send a Message</h3>
              <p className="text-muted" style={{ marginBottom: "2rem" }}>
                Complete the form below and our team will get back to you within 24 hours.
              </p>

              {status.success ? (
                <div className="success-banner">
                  <h4>✨ Message Sent Successfully!</h4>
                  <p>Thank you for reaching out, Oluwatobi or a team representative will respond shortly.</p>
                  <button className="btn btn-secondary" onClick={() => setStatus({ submitting: false, success: false, error: null })}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {status.error && <div className="error-banner">{status.error}</div>}
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject / Project Scope</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. Media Consultancy Booking"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Type your message details here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={status.submitting}>
                    {status.submitting ? "Sending message..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
