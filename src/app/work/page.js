"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { categories, works } from "@/data/work";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);
  const [view, setView] = useState("details");

  const filteredWorks = activeCategory === "all"
    ? works
    : works.filter(w => w.category === activeCategory);

  const handleViewContent = (work) => {
    if (/youtube\.com|youtu\.be/i.test(work.link)) {
      window.open(work.link, "_blank", "noopener,noreferrer");
      return;
    }
    setView("content");
  };

  const closeModal = () => {
    setSelectedWork(null);
    setView("details");
  };

  return (
    <>
      <Navbar />

      <PageHeader
        badge="Portfolio"
        title="My Work & Publications"
        description="Explore investigative reports, exclusive interview recordings, research papers, and television programs."
      />

      <section className="work-hub section-padding">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {filteredWorks.map((work, idx) => (
              <div
                key={idx}
                className="card work-card"
                onClick={() => setSelectedWork(work)}
                style={{ cursor: "pointer" }}
              >
                <span className="badge work-badge">{categories.find(c => c.id === work.category)?.name}</span>
                <h3 className="work-card-title">{work.title}</h3>
                <span className="work-type">{work.type}</span>
                <p className="work-card-desc">{work.desc.substring(0, 110)}...</p>
                <span className="read-more">View Details <span>&rarr;</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedWork && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal-content card ${view === "content" ? "content-view" : ""}`} onClick={(e) => e.stopPropagation()}>
            {view === "content" ? (
              <>
                <div className="content-toolbar">
                  <button className="btn btn-sm" onClick={() => setView("details")}>
                    &larr; Back
                  </button>
                  <span className="content-toolbar-title">{selectedWork.title}</span>
                  <button className="modal-close" onClick={closeModal}>&times;</button>
                </div>
                <div className="content-body" dangerouslySetInnerHTML={{ __html: selectedWork.content }} />
              </>
            ) : (
              <>
                <button className="modal-close" onClick={closeModal}>&times;</button>
                <span className="badge modal-badge">{categories.find(c => c.id === selectedWork.category)?.name}</span>
                <h2 className="modal-title">{selectedWork.title}</h2>
                <div className="modal-meta">
                  <span><strong>Type:</strong> {selectedWork.type}</span>
                  <span><strong>Year:</strong> {selectedWork.date}</span>
                </div>
                <p className="modal-desc">{selectedWork.desc}</p>
                <div className="modal-actions">
                  <button className="btn btn-primary" onClick={() => handleViewContent(selectedWork)}>
                    View Original Story / Video
                  </button>
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
