import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      title: t("services.service1Title"),
      description: t("services.service1Description"),
    },
    {
      number: "02",
      title: t("services.service2Title"),
      description: t("services.service2Description"),
    },
    {
      number: "03",
      title: t("services.service3Title"),
      description: t("services.service3Description"),
    },
    {
      number: "04",
      title: t("services.service4Title"),
      description: t("services.service4Description"),
    },
    {
      number: "05",
      title: t("services.service5Title"),
      description: t("services.service5Description"),
    },
    {
      number: "06",
      title: t("services.service6Title"),
      description: t("services.service6Description"),
    },
    {
      number: "07",
      title: t("services.service7Title"),
      description: t("services.service7Description"),
    },
    {
      number: "08",
      title: t("services.service8Title"),
      description: t("services.service8Description"),
    },
    {
      number: "09",
      title: t("services.service9Title"),
      description: t("services.service9Description"),
    },
    {
      number: "10",
      title: t("services.service10Title"),
      description: t("services.service10Description"),
    },
  ];

  const credentials = [
    {
      number: "01",
      sector: t("services.credential1Sector"),
      client: t("services.credential1Client"),
      scope: t("services.credential1Scope"),
    },
    {
      number: "02",
      sector: t("services.credential2Sector"),
      client: t("services.credential2Client"),
      scope: t("services.credential2Scope"),
    },
    {
      number: "03",
      sector: t("services.credential3Sector"),
      client: t("services.credential3Client"),
      scope: t("services.credential3Scope"),
    },
    {
      number: "04",
      sector: t("services.credential4Sector"),
      client: t("services.credential4Client"),
      scope: t("services.credential4Scope"),
    },
  ];

  return (
    <main>
      {/* ==================== HERO ==================== */}

      <section className="services-page-hero">
        <div className="services-page-hero-container">
          <p className="section-label">
            {t("services.heroLabel")}
          </p>

          <h1>
            {t("services.heroTitle1")}
            <span>{t("services.heroTitle2")}</span>
          </h1>

          <p>
            {t("services.heroDescription")}
          </p>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}

      <section className="services-expertise">
        <div className="services-expertise-container">

          <div className="services-expertise-heading">
            <p className="section-label">
              {t("services.expertiseLabel")}
            </p>

            <h2>
              {t("services.expertiseTitle1")}
              <span>{t("services.expertiseTitle2")}</span>
            </h2>
          </div>

          <div className="services-expertise-grid">

            <article className="services-expertise-card">

              <img
                src="/images/services/service-01-wash.png"
                alt="Water, Sanitation, and Hygiene"
              />

            
              <h3>{services[0].title}</h3>
              <p>{services[0].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-02-wastewater-treatment.png"
                alt="Wastewater Treatment and Sustainable Management"
              />

             
              <h3>{services[1].title}</h3>
              <p>{services[1].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-03-water-conveyance.png"
                alt="Integrated Water Conveyance and Channel Management"
              />

             
              <h3>{services[2].title}</h3>
              <p>{services[2].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-04-irrigation.png"
                alt="Advanced Irrigation and Water Resource Management"
              />

             
              <h3>{services[3].title}</h3>
              <p>{services[3].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-05-solid-waste.png"
                alt="Solid Waste Management"
              />

             
              <h3>{services[4].title}</h3>
              <p>{services[4].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-06-environmental-safeguards.png"
                alt="Environmental Safeguards"
              />

          
              <h3>{services[5].title}</h3>
              <p>{services[5].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-07-waste-to-resource.png"
                alt="Waste-to-Resource Economic Feasibility"
              />

              <h3>{services[6].title}</h3>
              <p>{services[6].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-08-community-participation.png"
                alt="Community Stakeholder Participation"
              />

              <h3>{services[7].title}</h3>
              <p>{services[7].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-09-institutional-planning.png"
                alt="Institutional Planning and Development"
              />

            
              <h3>{services[8].title}</h3>
              <p>{services[8].description}</p>

            </article>

            <article className="services-expertise-card">

              <img
                src="/images/services/service-10-gender-inclusion.png"
                alt="Gender Equity and Inclusion"
              />

             
              <h3>{services[9].title}</h3>
              <p>{services[9].description}</p>

            </article>

          </div>
        </div>
      </section>

      {/* ==================== CAPACITY BUILDING ==================== */}

      <section className="services-capacity">
        <div className="services-capacity-container">

          <div className="services-capacity-heading">
            <p className="section-label">
              {t("services.capacityLabel")}
            </p>

            <h2>
              {t("services.capacityTitle1")}
              <span>{t("services.capacityTitle2")}</span>
            </h2>
          </div>

          <div className="services-capacity-content">

            <p>
              {t("services.capacityDescription1")}
            </p>

            <p>
              {t("services.capacityDescription2")}
            </p>

            <p>
              {t("services.capacityDescription3")}
            </p>

            <p>
              {t("services.capacityDescription4")}
            </p>

          </div>

        </div>
      </section>

      {/* ==================== SDG ==================== */}

      <section className="services-sdg">
        <div className="services-sdg-container">

          <div className="services-sdg-heading">
            <p className="section-label">
              {t("services.sdgLabel")}
            </p>

            <h2>
              {t("services.sdgTitle1")}
              <span>{t("services.sdgTitle2")}</span>
            </h2>
          </div>

          <div className="services-sdg-grid">

            <article className="services-sdg-card">
              <span>SDG 6</span>
              <h3>{t("services.sdg6Title")}</h3>
              <p>
                {t("services.sdg6Description")}
              </p>
            </article>

            <article className="services-sdg-card">
              <span>SDG 5</span>
              <h3>{t("services.sdg5Title")}</h3>
              <p>
                {t("services.sdg5Description")}
              </p>
            </article>

            <article className="services-sdg-card">
              <span>SDG 11</span>
              <h3>{t("services.sdg11Title")}</h3>
              <p>
                {t("services.sdg11Description")}
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ==================== PROJECT CREDENTIALS ==================== */}

      <section className="services-credentials">
        <div className="services-credentials-container">

          <div className="services-credentials-heading">
            <p className="section-label">
              {t("services.credentialsLabel")}
            </p>

            <h2>
              {t("services.credentialsTitle1")}
              <span>{t("services.credentialsTitle2")}</span>
            </h2>
          </div>

          <div className="credentials-list">

            <article className="credential-row">
              <span>{credentials[0].number}</span>

              <div>
                <h3>{credentials[0].sector}</h3>
                <p>{credentials[0].client}</p>
              </div>

              <p>
                {credentials[0].scope}
              </p>
            </article>

            <article className="credential-row">
              <span>{credentials[1].number}</span>

              <div>
                <h3>{credentials[1].sector}</h3>
                <p>{credentials[1].client}</p>
              </div>

              <p>
                {credentials[1].scope}
              </p>
            </article>

            <article className="credential-row">
              <span>{credentials[2].number}</span>

              <div>
                <h3>{credentials[2].sector}</h3>
                <p>{credentials[2].client}</p>
              </div>

              <p>
                {credentials[2].scope}
              </p>
            </article>

            <article className="credential-row">
              <span>{credentials[3].number}</span>

              <div>
                <h3>{credentials[3].sector}</h3>
                <p>{credentials[3].client}</p>
              </div>

              <p>
                {credentials[3].scope}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE ==================== */}

      <section className="services-compliance">
        <div className="services-compliance-container">

          <div className="services-compliance-heading">
            <p className="section-label">
              {t("services.complianceLabel")}
            </p>

            <h2>
              {t("services.complianceTitle1")}
              <span>{t("services.complianceTitle2")}</span>
            </h2>
          </div>

          <div className="services-compliance-content">

            <p>
              {t("services.complianceDescription")}
            </p>

            <div className="services-compliance-item">
              <h3>{t("services.conflictTitle")}</h3>

              <p>
                {t("services.conflictDescription")}
              </p>
            </div>

            <div className="services-compliance-item">
              <h3>{t("services.biddingTitle")}</h3>

              <p>
                {t("services.biddingDescription")}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== CTA ==================== */}

      <section className="services-cta">
        <div className="services-cta-container">

          <p className="section-label">
            {t("services.ctaLabel")}
          </p>

          <h2>
            {t("services.ctaTitle1")} <br></br>
            <span>{t("services.ctaTitle2")}</span>
          </h2>

          <p>
            {t("services.ctaDescription")}
          </p>

          <a href="/contact" className="hero-primary-button">
            {t("services.ctaButton")}
          </a>

        </div>
      </section>

    </main>
  );
}

export default Services;