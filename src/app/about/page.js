import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import aboutHero from "../about-me.jpg";

export const metadata = {
  title: "About Oluwatobi Enitan | Journalist & Media Consultant",
  description: "Learn about Oluwatobi Enitan's journey — nearly a decade of investigative journalism, conflict-zone reporting, and media entrepreneurship.",
};

export default function About() {
  const experiences = [
    {
      role: "Political & Defence Correspondent",
      company: "TV Platinum",
      date: "Present",
      desc: "Investigating and reporting on national politics, security updates, and defence policies. Conducting high-profile interviews and producing content for various platforms."
    },
    {
      role: "Reporter, Anchor & Social Media Officer",
      company: "Viable TV",
      date: "December 2020 – March 2023",
      desc: "Served as a key anchor and field reporter, managing digital outreach campaigns and anchoring weekly updates."
    },
    {
      role: "Show Host, News Anchor & Reporter",
      company: "Roots TV Nigeria",
      date: "October 2018 – November 2020",
      desc: "Hosted daily news programs and special features, demonstrating versatility in anchoring and field operations."
    },
    {
      role: "Field Reporter",
      company: "Channels Television",
      date: "November 2016 – October 2017",
      desc: "Undertook assignments covering local news, community developments, and security briefs with deep journalistic rigor."
    },
    {
      role: "Industrial Trainee / Reporter",
      company: "Nigerian Television Authority (NTA)",
      date: "December 2014 – April 2015",
      desc: "Gained hands-on experience in news gathering, audio-visual editing, and broadcast techniques."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src={aboutHero}
            alt=""
            fill
            className="hero-bg-image"
            preload
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Biography</span>
            <h1 className="hero-title">About Oluwatobi Enitan</h1>
            <p className="hero-desc">A look into the education, career milestone timeline, and core convictions of a dedicated journalist.</p>
          </div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="about-main section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="bio-text">
              <h2 className="section-title">My Journey & Conviction</h2>
              <p className="text-large">
                Oluwatobi Enitan is a seasoned journalist with nearly a decade of experience. Her career has been defined by investigative curiosity, storytelling excellence, and a relentless commitment to holding institutions accountable.
              </p>
              <p>
                Currently serving as a Political and Defence Correspondent for TV Platinum, she is also a shareholder in the company, showcasing her entrepreneurial vision. Beyond TV Platinum, she has contributed extensively to key Nigerian platforms including the International Centre for Investigative Reporting (ICIR), and has international writing experience with the Inter Press Service (IPS) in Rome, Italy.
              </p>
              <p>
                Her journalism is built on a foundation of professional standards. She is a proud member of the Nigeria Union of Journalists (NUJ) and the Nigeria Association of Women Journalists (NAWOJ).
              </p>
              <div className="hobbies-box card">
                <h4>Beyond the Microphone</h4>
                <p>When not uncovering news or anchoring programs, she enjoys: 📚 Reading, ✈️ Traveling, and 🍳 Cooking.</p>
              </div>
            </div>

            <div className="education-box">
              <div className="card edu-card">
                <span className="edu-tag">M.Sc.</span>
                <h3>M.Sc. in Mass Communication</h3>
                <p className="edu-school">Nasarawa State University, Keffi (2021)</p>
                <p className="edu-desc">Focusing on media roles in governance, conflict studies, and advanced communication theories.</p>
              </div>

              <div className="card edu-card" style={{ marginTop: "1.5rem" }}>
                <span className="edu-tag">B.Sc.</span>
                <h3>B.Sc. in Mass Communication</h3>
                <p className="edu-school">Kogi State University, Anyigba (2015)</p>
                <p className="edu-desc">Graduated with a Second Class Upper Division, cementing a foundation in journalism ethics, print production, and broadcasting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frontline Report Spotlight */}
      <section className="spotlight section-padding bg-dark">
        <div className="container spotlight-container card">
          <div className="spotlight-content">
            <span className="badge spotlight-badge">Frontline Field Report Spotlight</span>
            <h2>insurgency Reporting on the War Front</h2>
            <p>
              In 2019, Oluwatobi Enitan made media history as the only female journalist on the war front reporting on the insurgency during a Defense Correspondent Tour. She bravery entered conflict hotspots like Bama, Dikwa, and Sambisa Forest. 
            </p>
            <p>
              She continued this fearless coverage in 2022, reporting directly from crisis epicenters in Southern Kaduna, including Zango Kataf, Kafanchan, and Abuyab. She is a reporter who believes that stories must be reported from where they happen, regardless of risk.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="experience section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Career Milestones</h2>
            <p className="section-subtitle">
              A decade of experience representing reputable networks and news agencies across Nigeria.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`timeline-item ${isEven ? "timeline-left" : "timeline-right"}`}>
                  <div className="timeline-content">
                    <span className="timeline-date">{exp.date}</span>
                    <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0 0.2rem 0" }}>{exp.role}</h3>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--primary)", marginBottom: "0.8rem" }}>{exp.company}</h4>
                    <p style={{ fontSize: "0.9rem", margin: 0 }}>{exp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
