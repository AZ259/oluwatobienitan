"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import cvImage from "../cv.png";

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navbar />

      <PageHeader
        badge="Curriculum Vitae"
        title="Professional Resume"
        description="An overview of my qualifications, milestones, and professional capacities. You can print or save this page as a PDF."
        image={cvImage}
      >
        <button className="btn btn-primary no-print" onClick={handlePrint}>
          🖨️ Print / Save as PDF
        </button>
      </PageHeader>

      {/* CV Content Sheet */}
      <section className="cv-content-section section-padding">
        <div className="container cv-container-box">
          <div className="cv-sheet card">
            {/* CV Header */}
            <div className="cv-sheet-header">
              <div>
                <h1 className="cv-name">Oluwatobi Enitan</h1>
                <h2 className="cv-headline">Political & Defence Correspondent | Media Consultant</h2>
              </div>
              <div className="cv-contact-info">
                <p>📍 Abuja, Nigeria</p>
                <p>📧 info@oluwatobienitan.com</p>
                <p>📞 +234 (0) 800-000-0000</p>
                <p>🌐 oluwatobienitan.com</p>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="cv-section">
              <h3 className="cv-section-title">Professional Profile</h3>
              <p>
                Seasoned journalist and media entrepreneur with nearly a decade of experience across leading television networks and production houses in Nigeria. Proven record of investigative reporting, conflict-zone field reporting, anchoring, voiceover production, and media consultancy. Known for a courageous approach to storytelling, with a strong focus on political affairs and national security updates.
              </p>
            </div>

            {/* Education */}
            <div className="cv-section">
              <h3 className="cv-section-title">Education</h3>
              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>M.Sc. in Mass Communication</h4>
                  <span className="cv-item-date">2021</span>
                </div>
                <p className="cv-item-subtitle">Nasarawa State University, Keffi</p>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>B.Sc. in Mass Communication (Second Class Upper Division)</h4>
                  <span className="cv-item-date">2015</span>
                </div>
                <p className="cv-item-subtitle">Kogi State University, Anyigba</p>
              </div>
            </div>

            {/* Experience */}
            <div className="cv-section">
              <h3 className="cv-section-title">Professional Experience</h3>
              
              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>Political & Defence Correspondent & Shareholder</h4>
                  <span className="cv-item-date">March 2023 – Present</span>
                </div>
                <p className="cv-item-subtitle">TV Platinum, Abuja</p>
                <ul className="cv-bullet-list">
                  <li>Investigate and report on national security, defence budgets, legislative sessions, and political activities.</li>
                  <li>Conduct high-profile exclusive interviews with leading political, defence, and social sector stakeholders.</li>
                  <li>Consult on program structures, news operations, and content distribution strategies.</li>
                </ul>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>Reporter, Anchor & Social Media Officer</h4>
                  <span className="cv-item-date">December 2020 – March 2023</span>
                </div>
                <p className="cv-item-subtitle">Viable TV, Abuja</p>
                <ul className="cv-bullet-list">
                  <li>Anchored primary bulletins and hosted live studio shows focusing on national developments.</li>
                  <li>Drove digital growth and audience engagement across all online and social media platforms.</li>
                  <li>Undertook regional reporting assignments covering legislative and security updates.</li>
                </ul>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>Show Host, News Anchor & Reporter</h4>
                  <span className="cv-item-date">October 2018 – November 2020</span>
                </div>
                <p className="cv-item-subtitle">Roots TV Nigeria, Abuja</p>
                <ul className="cv-bullet-list">
                  <li>Hosted key daily broadcast programs, news digests, and talk shows.</li>
                  <li>Reported live from key news beats including the National Assembly and military events.</li>
                  <li>Conducted a special series on insurgency reporting from northeast conflict zones.</li>
                </ul>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <h4>Field Reporter</h4>
                  <span className="cv-item-date">November 2016 – October 2017</span>
                </div>
                <p className="cv-item-subtitle">Channels Television, Abuja</p>
                <ul className="cv-bullet-list">
                  <li>Covered local, state, and security developments with accuracy and speed.</li>
                  <li>Researched and scripted feature reports highlighting community infrastructure challenges.</li>
                </ul>
              </div>
            </div>

            {/* Frontline tour highlight */}
            <div className="cv-section">
              <h3 className="cv-section-title">Defence & Conflict Reporting Highlights</h3>
              <p>
                <strong>Insurgency War Front Tour (2019):</strong> Served as the only female journalist embedded with the military on the war front during a Defence Correspondent Tour. Brave conflict zones including <strong>Bama, Dikwa, and Sambisa Forest</strong> to report live.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                <strong>Southern Kaduna Coverage (2022):</strong> Reported directly from crisis zones including <strong>Zango Kataf, Kafanchan, and Abuyab</strong> to document displacement and peace efforts.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="cv-section">
              <h3 className="cv-section-title">Core Skills & Competencies</h3>
              <div className="cv-skills-grid">
                <div>
                  <strong>Journalism:</strong> Investigative reporting, broadcast presentation, news anchoring, and ethics.
                </div>
                <div>
                  <strong>Voiceover:</strong> Clear, modulated narration for documentaries, promotions, and audio files.
                </div>
                <div>
                  <strong>Production:</strong> Script writing, documentary production, camera operation, and video editing (basic).
                </div>
                <div>
                  <strong>Strategy:</strong> Media consultancy, PR strategies, content operations, and team coordination.
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="cv-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
              <h3 className="cv-section-title">Professional Memberships</h3>
              <p>&bull; Nigeria Union of Journalists (NUJ)</p>
              <p>&bull; Nigeria Association of Women Journalists (NAWOJ)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
