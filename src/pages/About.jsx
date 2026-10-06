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
      image: "/images/approach/client-orientation.jpg",
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
            {t("about.heroLabel")}
          </p>

          <h1>
            {t("about.heroTitle1")}
            <span>{t("about.heroTitle2")}</span>
          </h1>

          <p>
            {t("about.heroDescription")}
          </p>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}

      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-label">
            <p className="section-label">
              {t("about.storyLabel")}
            </p>
          </div>

          <div className="about-story-content">
            <h2>
              {t("about.storyTitle1")}
              <span>{t("about.storyTitle2")}</span>
            </h2>

            <p>
              {t("about.storyDescription1")}
            </p>

            <p>
              {t("about.storyDescription2")}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION ==================== */}

      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-card">
            <img
              src="/images/missionvision/mission.jpg"
              alt="Community development and sustainable growth"
            />

            <p className="section-label">
              {t("about.missionLabel")}
            </p>

            <h2>
              {t("about.missionTitle")}
            </h2>

            <p>
              {t("about.missionDescription")}
            </p>
          </div>

          <div className="about-mission-card">
            <img
              src="/images/missionvision/vision.jpg"
              alt="Vision and sustainable development"
            />

            <p className="section-label">
              {t("about.visionLabel")}
            </p>

            <h2>
              {t("about.visionTitle")}
            </h2>

            <p>
              {t("about.visionDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}

      <section className="about-values">
        <div className="about-values-container">
         <div className="about-values-heading">
  <p className="section-label">
    {t("about.valuesLabel")}
  </p>

         <h2>
  {t("about.valuesTitle1")}
  <br />
  <span>{t("about.valuesTitle2")}</span>
</h2>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <img
                src="https://primebusinessmen.ae/_next/image?q=75&url=%2Fimges%2Fservices%2F52.webp&w=2048"
                alt="Professional team discussing strategy in a meeting room"
              />
<h3>{t("about.value1Title")}</h3>

<p>{t("about.value1Description")}</p>
            </div>

            <div className="about-value-card">
              <img
                src="https://static.wixstatic.com/media/6811d9_9754f6c7a553471a85b41cae9147bb32~mv2.png/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/6811d9_9754f6c7a553471a85b41cae9147bb32~mv2.png"
                alt="Business consultants reviewing strategic documents"
              />
<h3>{t("about.value2Title")}</h3>

<p>{t("about.value2Description")}</p>
            </div>

            <div className="about-value-card">
              <img
                src="https://static.ssb.ee/images/universal/INSENERTEHNILISED-TEENUSED-MIS-PARANDAVAD-EFEKTIIVSUST-CAD-JOONISED-TUGEVUSARVUTUSED-JA-SELGE-TEHNILINE-DOKUMENTATSIOON_42341010_m_xl.jpeg"
                alt="Engineers reviewing technical drawings"
              />

           <h3>{t("about.value3Title")}</h3>

<p>{t("about.value3Description")}</p>
            </div>

            <div className="about-value-card">
              <img
                src="https://images.unsplash.com/photo-1758691736407-02406d18df6c?auto=format&fit=crop&q=80&w=1200"
                alt="Business team using digital technology"
              />

            <h3>{t("about.value4Title")}</h3>

<p>{t("about.value4Description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STRATEGIC APPROACH ==================== */}

      <section className="about-approach">
        <div className="about-approach-container">
          <div className="about-approach-heading">
            <p className="section-label">
              {t("about.approachLabel")}
            </p>

            <h2>
              {t("about.approachHeading1")}
              <br />
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
                <img
                  src={
                    item.number === "01"
                      ? "/images/approach/client-orientation.jpg"
                      : item.number === "02"
                      ? "/images/approach/strategic-partnership.jpg"
                      : item.number === "03"
                      ? "/images/approach/proven-effectiveness.jpg"
                      : "/images/approach/continuous-development.jpg"
                  }
                  alt={item.title}
                />

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
          <p className="section-label">
            {t("about.ctaLabel")}
          </p>

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