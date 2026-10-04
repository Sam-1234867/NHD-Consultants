import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const values = [
    {
      number: "01",
      title: t("about.value1Title"),
      description: t("about.value1Description"),
    },
    {
      number: "02",
      title: t("about.value2Title"),
      description: t("about.value2Description"),
    },
    {
      number: "03",
      title: t("about.value3Title"),
      description: t("about.value3Description"),
    },
    {
      number: "04",
      title: t("about.value4Title"),
      description: t("about.value4Description"),
    },
  ];

  const approach = [
    {
      number: "01",
      title: t("about.approach1Title"),
      description: t("about.approach1Description"),
    },
    {
      number: "02",
      title: t("about.approach2Title"),
      description: t("about.approach2Description"),
    },
    {
      number: "03",
      title: t("about.approach3Title"),
      description: t("about.approach3Description"),
    },
    {
      number: "04",
      title: t("about.approach4Title"),
      description: t("about.approach4Description"),
    },
  ];

  return (
    <main>
      {/* ==================== ABOUT HERO ==================== */}

      <section className="about-page-hero">
  <div className="about-page-hero-container">
    <p className="section-label">
      ABOUT THE COMPANY
    </p>

    <h1>
      Continuing a proven legacy
      <span>of success in Tajikistan.</span>
    </h1>

    <p>
      New Horizons of Dushanbe LLC is a newly established, legally
      independent consulting firm built on a proven track record of
      leadership and operational excellence. Our management team
      previously led, managed, and successfully delivered a broad
      portfolio of high-impact projects during their tenure at BAZIS,
      GMES and BDO. We bring this extensive execution capability and
      rigorous project management approach directly to our new firm.
    </p>
  </div>
</section>

      {/* ==================== WHO WE ARE ==================== */}

     <section className="about-story">
  <div className="about-story-container">
    <div className="about-story-label">
      <p className="section-label">
        OUR STORY
      </p>

     
    </div>

    <div className="about-story-content">
      <h2>
        Local Expertise
        <span>International Best Practices</span>
      </h2>

      <p>
        Led by former managing directors who successfully drove these
        complex initiatives alongside a former senior cabinet official
        with over 25 years of municipal utility experience our leadership
        combines deep local knowledge with international best practices.
      </p>

      <p>
        We provide practical, sustainable, and institutionally embedded
        solutions for community development, infrastructure, and public
        policy reform.
      </p>
    </div>
  </div>
</section>

      {/* ==================== MISSION & VISION ==================== */}

     <section className="about-mission">
  <div className="about-mission-container">
    <div className="about-mission-card">
      <p className="section-label">
        OUR MISSION
      </p>

      <h2>
        Empower local communities
      </h2>

      <p>
        Empower local communities, ensure equal opportunities, and embed
        international standards into everyday practices. We align every
        action with the Sustainable Development Goals (SDGs) and key donor
        priorities in institutional reform and social inclusion.
      </p>
    </div>

    <div className="about-mission-card">
      <p className="section-label">
        OUR VISION
      </p>

      <h2>
        The most reliable and trusted partner
      </h2>

      <p>
        To be the most reliable and trusted partner for governments,
        international donor organizations, and local communities, helping
        them achieve sustainable growth, strengthen governance institutions,
        and ensure highly inclusive development in line with the UN SDGs.
      </p>
    </div>
  </div>
</section>

      {/* ==================== CORE VALUES ==================== */}

      {/* ==================== CORE VALUES ==================== */}

<section className="about-values">
  <div className="about-values-container">
    <div className="about-values-heading">
      <p className="section-label">
        OUR CORE VALUES
      </p>

      <h2>
        What guides
        <span>our work.</span>
      </h2>
    </div>

    <div className="about-values-grid">
      <div className="about-value-card">
        <span>01</span>

        <h3>Professionalism</h3>

        <p>
          We maintain the highest standards of technical quality, precision,
          and execution excellence in every municipal utility and infrastructure
          assignment we undertake. Our commitment to innovation, safety, and
          quality ensures reliable, efficient, and sustainable solutions for
          every project.
        </p>
      </div>

      <div className="about-value-card">
        <span>02</span>

        <h3>Integrity</h3>

        <p>
          Transparency, uncompromising ethics, and absolute accountability are
          the foundation of everything we do. We foster trusted advisory
          partnerships with international financial institutions by delivering
          objective guidance, responsible project management, and the highest
          standards of professional integrity.
        </p>
      </div>

      <div className="about-value-card">
        <span>03</span>

        <h3>Excellence</h3>

        <p>
          We focus on delivering practical, measurable outcomes that enhance
          community well-being, strengthen local infrastructure, and create
          lasting social impact across Tajikistan. Through innovative engineering,
          sustainable solutions, and collaborative partnerships.
        </p>
      </div>

      <div className="about-value-card">
        <span>04</span>

        <h3>Innovation</h3>

        <p>
          We champion continuous learning and the adoption of modern solutions
          to drive innovation and operational excellence. By integrating
          advanced digital tools and technologies, we streamline local
          operational processes, enhance efficiency, improve decision-making,
          and deliver greater value to our clients.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* ==================== STRATEGIC APPROACH ==================== */}

      <section className="about-approach">
        <div className="about-approach-container">
          <div className="about-approach-heading">
            <p className="section-label">{t("about.approachLabel")}</p>

            <h2>
              {t("about.approachHeading1")}
              <span>{t("about.approachHeading2")}</span>
            </h2>

            <p>{t("about.approachDescription")}</p>
          </div>

          <div className="about-approach-grid">
            {approach.map((item) => (
              <article
                className="about-approach-card"
                key={item.number}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}

      <section className="about-cta">
        <div className="about-cta-container">
          <p className="section-label">{t("about.ctaLabel")}</p>

          <h2>
            {t("about.ctaTitle1")}
            <span>{t("about.ctaTitle2")}</span>
          </h2>

          <p>{t("about.ctaDescription")}</p>

          <a href="/contact" className="hero-primary-button">
            {t("about.ctaButton")}
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;