import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      number: "01",
      category: "ADB / EBRD",
      title: "Water Supply & Sanitation",
      description:
        "Restructuring tariff systems, developing cost-recovery business models, and establishing compliance protocols.",
    },
    {
      number: "02",
      category: "EBRD",
      title: "Solid Waste Management",
      description:
        "Implementing ESAP requirements, designing community engagement plans, and optimizing local billing processes.",
    },
    {
      number: "03",
      category: "World Bank",
      title: "Public Utility Digitalization",
      description:
        "Deploying modern MIS billing, custom database architectures, and digital client relationship systems.",
    },
    {
      number: "04",
      category: "Donor-Supported Initiatives",
      title: "Social & Gender Policies",
      description:
        "Formulating equal opportunity guidelines, leading stakeholder public hearings, and establishing corporate HR structures.",
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
            PROJECT CREDENTIALS
          </p>

          <h1>
            Proven Experience
            <span>Delivered Results</span>
          </h1>

          <p>
            Water Supply &amp; Sanitation, Solid Waste Management, Public
            Utility Digitalization, and Social &amp; Gender Policies.
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
              PROJECT CREDENTIALS
            </p>

            <h2>
              Proven Experience
              <span>Delivered Results</span>
            </h2>

            <p>
              Our project experience reflects practical engagement across
              development, infrastructure, institutional, and advisory
              initiatives.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">
                  {project.number}
                </span>

                <div>
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
        OUR STRATEGIC APPROACH
      </p>

      <h2>
        A practical approach 
        <span>to lasting impact.</span>
      </h2>
    </div>

    <div className="projects-approach-content">
     <p>
  We prioritize actions over theories. Our teams execute practical,
  evidence-based, and institutionally embedded measures that survive past
  the end of the project cycle. We focus on solutions that create lasting
  value, strengthen local institutions, and deliver measurable results
  for our clients and communities.
</p>

      <a href="/contact" className="hero-primary-button">
        Contact Us
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
      NHD CONSULTANTS
    </p>

    <h2>
      Practical, Sustainable
      <span>Solutions</span>
    </h2>

    <p>
      We provide practical, sustainable, and institutionally embedded
      solutions for community development, infrastructure, and public
      policy reform.
    </p>

    <a href="/contact" className="hero-primary-button">
      Contact Us
    </a>
  </div>
</section>
    </main>
  );
}

export default Projects;