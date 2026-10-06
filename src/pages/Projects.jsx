import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

const projects = [
  {
    category: t("projects.project1Category"),
    title: t("projects.project1Title"),
    description: t("projects.project1Description"),
    image: "/images/projects/project-01-water-supply.png",
  },
  {
    category: t("projects.project2Category"),
    title: t("projects.project2Title"),
    description: t("projects.project2Description"),
    image: "/images/projects/project-02-solid-waste.png",
  },
  {
    category: t("projects.project3Category"),
    title: t("projects.project3Title"),
    description: t("projects.project3Description"),
    image: "/images/projects/project-03-public-utility-digitalization.png",
  },
  {
    category: t("projects.project4Category"),
    title: t("projects.project4Title"),
    description: t("projects.project4Description"),
    image: "/images/projects/project-04-social-gender-policies.png",
  },
];
  return (
    <main>
      {/* =====================================================
          PROJECTS HERO
          ===================================================== */}

     <section className="projects-page-hero">
  <div className="projects-page-hero-container">
    <p className="section-label">
      {t("projects.heroLabel")}
    </p>

    <h1>
      {t("projects.heroTitle1")}
      <span>{t("projects.heroTitle2")}</span>
    </h1>

    <p>
      {t("projects.heroDescription")}
    </p>
  </div>
</section>

      {/* =====================================================
          PROJECTS MAIN
          ===================================================== */}

      <section className="projects-main">
        <div className="projects-main-container">

          <div className="projects-intro">
  <p className="section-label">
    {t("projects.mainLabel")}
  </p>

  <h2>
    {t("projects.mainTitle1")}
    <span>{t("projects.mainTitle2")}</span>
  </h2>

  <p>
    {t("projects.mainDescription")}
  </p>
</div>
          <div className="projects-grid">
            {projects.map((project) => (
             <article className="project-card" key={project.title}>
                
<div>
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%",
      height: "260px",
      objectFit: "cover",
      display: "block",
    }}
  />

  <p className="project-category">
    {project.category}
  </p>

  <h3>{project.title}</h3>

  <p>{project.description}</p>
</div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT APPROACH
          ===================================================== */}

      <section className="projects-approach">
  <div className="projects-approach-container">
    <div className="projects-approach-heading">
      <p className="section-label">
        {t("projects.approachLabel")}
      </p>

      <h2>
        {t("projects.approachTitle1")}
        <span>{t("projects.approachTitle2")}</span>
      </h2>
    </div>

    <div className="projects-approach-content">
      <p>
        {t("projects.approachDescription")}
      </p>

      <a href="/contact" className="hero-primary-button">
        {t("projects.approachButton")}
      </a>
    </div>
  </div>
</section>

      {/* =====================================================
          PROJECT CTA
          ===================================================== */}

     <section className="projects-cta">
  <div className="projects-cta-container">
    <p className="section-label">
      {t("projects.ctaLabel")}
    </p>

    <h2>
      {t("projects.ctaTitle1")}
      <span>{t("projects.ctaTitle2")}</span>
    </h2>

    <p>
      {t("projects.ctaDescription")}
    </p>

    <a href="/contact" className="hero-primary-button">
      {t("projects.ctaButton")}
    </a>
  </div>
</section>
    </main>
  );
}

export default Projects;