import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const sectors = [
    {
      number: "01",
      title: t("services.service1Title"),
      description: t("services.service1Description"),
      image: "water-sanitation-hygiene.jpg",
    },
    {
      number: "02",
      title: t("services.service2Title"),
      description: t("services.service2Description"),
      image: "water-conveyance-channel.jpg",
    },
    {
      number: "03",
      title: t("services.service3Title"),
      description: t("services.service3Description"),
      image: "advanced-irrigation.jpg",
    },
    {
      number: "04",
      title: t("services.service4Title"),
      description: t("services.service4Description"),
      image: "wastewater-treatment.jpg",
    },
  ];

  const approach = [
    {
      title: t("about.approach1Title"),
      description: t("about.approach1Description"),
      image: "client-orientation.jpg",
    },
    {
      title: t("about.approach2Title"),
      description: t("about.approach2Description"),
      image: "strategic-partnership.jpg",
    },
    {
      title: t("about.approach3Title"),
      description: t("about.approach3Description"),
      image: "proven-effectiveness.jpg",
    },
    {
      title: t("about.approach4Title"),
      description: t("about.approach4Description"),
      image: "continuous-development.jpg",
    },
  ];

  const internationalExperts = [
    {
      number: "01",
      name: "Mohd Masood Seediqyar",
      position: t("team.expert1Position"),
      experience: t("team.expert1Experience"),
      image: "mohd-masood-seediqyar.jpg",
    },
    {
      number: "02",
      name: "Dr. Kelkar Padmakar Waman",
      position: t("team.expert2Position"),
      experience: t("team.expert2Experience"),
      image: "kelkar-padmakar-waman.jpg",
    },
    {
      number: "03",
      name: "Thomas Bedour, B.A.",
      position: t("team.expert3Position"),
      experience: t("team.expert3Experience"),
      image: "thomas-bedour.jpg",
    },
    {
      number: "04",
      name: "Dr. Sanjay Bhattacharya",
      position: t("team.expert4Position"),
      experience: t("team.expert4Experience"),
      image: "sanjay-bhattacharya.jpg",
    },
    {
      number: "05",
      name: "Ilkhom Tashtemirov",
      position: t("team.expert5Position"),
      experience: t("team.expert5Experience"),
      image: "ilkhom-tashtemirov.jpg",
    },
    {
      number: "06",
      name: "Mher Kelian",
      position: t("team.expert6Position"),
      experience: t("team.expert6Experience"),
      image: "mher-kelian.jpg",
    },
  ];

  return (
    <main>

      {/* ==================== HERO SECTION ==================== */}

      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">

            <p className="hero-label">
              {t("home.heroLabel")}
            </p>

            <h1>
              {t("home.heroTitle1")}
              <span>{t("home.heroTitle2")}</span>
            </h1>

            <p className="hero-description">
              {t("home.heroDescription")}
            </p>

            <div className="hero-actions">

              <a href="/services" className="hero-primary-button">
               {t("home.primaryButton")}
              </a>

              <a href="/contact" className="hero-secondary-button">
                {t("nav.contact")}
              </a>

            </div>

            <div className="hero-trust">

              <div>
                <strong>01</strong>
                <span>{t("home.trust1")}</span>
              </div>

              <div>
                <strong>02</strong>
                <span>{t("home.trust2")}</span>
              </div>

              <div>
                <strong>03</strong>
                <span>{t("home.trust3")}</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-top">
                <span>NHD</span>
                <span>CONSULTANTS</span>
              </div>

              <div className="hero-card-content">

                <p className="hero-card-label">
                  {t("home.companyLabel")}
                </p>

                <h2>
                  {t("home.heroCardTitle1")}
                  <br />
                  {t("home.heroCardTitle2")}
                </h2>

                <h2>
                  {t("home.heroCardTitle3")}
                  <br />
                  {t("home.heroCardTitle4")}
                </h2>

                <div className="hero-card-line"></div>

                <p>
                  {t("home.heroCardDescription")}
                </p>

              </div>

              <div className="hero-card-number">
                NHD / 01
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================== COMPANY INTRODUCTION ==================== */}

      <section className="home-intro">
        <div className="home-intro-container">

          <div>

            <p className="section-label">
              {t("home.companyLabel")}
            </p>

            <h2>
              {t("home.introTitle1")}
              <span>{t("home.introTitle2")}</span>
            </h2>

          </div>

          <div className="home-intro-text">

            <p>
              {t("home.introParagraph1")}
            </p>

            <p>
              {t("home.introParagraph2")}
            </p>

            <p>
              {t("home.introParagraph3")}
            </p>

            <a href="/about" className="text-link">
              {t("home.discoverMore")}
            </a>

          </div>

        </div>
      </section>

      {/* ==================== CORE SECTORS ==================== */}

      <section className="home-services">
        <div className="home-services-container">

          <div className="home-services-heading">
<div>
  <p className="section-label">
    {t("home.sectorsLabel")}
  </p>

  <h2>
    {t("home.sectorsTitle1")}
    <br />
    <span>{t("home.sectorsTitle2")}</span>
  </h2>
</div>

            <a href="/services" className="text-link">
              {t("home.allExpertise")}
            </a>

          </div>

          <div className="home-services-grid">

            {sectors.map((sector) => (
              <article
                className="home-service-card"
                key={sector.number}
              >

                <img
                  src={`/images/sectors/${sector.image}`}
                  alt={sector.title}
                />

                <div className="home-service-content">

                  <h3>
                    {sector.title}
                  </h3>

                  <p>
                    {sector.description}
                  </p>

                  <a href="/services">
                    {t("home.exploreSector")}
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ==================== STRATEGIC APPROACH ==================== */}

      <section className="home-approach">
        <div className="home-approach-container">

          <div className="home-approach-heading">

            <p className="section-label">
              {t("home.approachLabel")}
            </p>

          <h2>
  {t("home.approachTitle1")}
  <br />
  <span>{t("home.approachTitle2")}</span>
</h2>

            <p>
              {t("home.approachDescription")}
            </p>

          </div>

          <div className="home-approach-grid">

            {approach.map((item) => (
              <article
                className="home-approach-card"
                key={item.title}
              >

                {item.image && (
                  <img
                    src={`/images/approach/${item.image}`}
                    alt={item.title}
                  />
                )}

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ==================== INTERNATIONAL TEAM ==================== */}

     {/* ==================== INTERNATIONAL TEAM ==================== */}

<section
  className="international-team"
  id="experts"
>

  <div className="international-team-container">

    <div className="international-team-heading">

      <p className="section-label">
        {t("home.teamLabel")}
      </p>

    <h2>
  {t("home.teamTitle1")}
  <br />
  <span>{t("home.teamTitle2")}</span>
</h2>
      <p>
        {t("home.teamDescription")}
      </p>

    </div>

    <div className="international-team-grid">

      {internationalExperts.map((expert) => (
        <article
          className="expert-card"
          key={expert.number}
        >

          <div className="expert-photo">

            <img
              src={`/images/experts/${expert.image}`}
              alt={expert.name}
            />

          </div>

          <div className="expert-content">

            

            <h3>
              {expert.name}
            </h3>

            <p className="expert-role">
              {expert.position}
            </p>

          </div>

        </article>
      ))}

    </div>

  </div>

</section>

    {/* ==================== SDG / SOCIAL IMPACT ==================== */}

{/* ==================== SDG / SOCIAL IMPACT ==================== */}

<section className="home-impact">
  <div className="home-impact-container">
    <div className="home-impact-label">
      <p className="section-label">
        {t("home.impactSectionLabel")}
      </p>
    </div>

    <div className="home-impact-content">
      <h2>
        {t("home.impactSectionTitle1")}
        <span> {t("home.impactSectionTitle2")}</span>
      </h2>

      <p>
        {t("home.impactSectionDescription")}
      </p>

      <a href="/services" className="text-link">
        {t("home.impactSectionButton")}
      </a>
    </div>
  </div>
</section>
      {/* ==================== FINAL CTA ==================== */}
<section className="home-cta">
  <div className="home-cta-container">
    <p className="section-label">
      {t("home.ctaSectionLabel")}
    </p>

    <h2>
      {t("home.ctaSectionTitle1")}
      <br />
      <span>{t("home.ctaSectionTitle2")}</span>
    </h2>

    <p>
      {t("home.ctaSectionDescription")}
    </p>

    <a
      href="/contact"
      className="hero-primary-button"
    >
      {t("home.ctaSectionButton")}
    </a>
  </div>
</section>
    </main>
  );
}

export default Home;