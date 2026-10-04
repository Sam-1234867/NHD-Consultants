import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const sectors = [
    {
      number: "01",
      title: "Water, Sanitation, and Hygiene (WASH)",
      description:
        "Developing sustainable tariff structures, comprehensive economic feasibility studies, and effective legal and institutional frameworks to ensure reliable, efficient, resilient, and financially sustainable regional clean water services. Our approach combines sound economic analysis, regulatory alignment, and strategic planning to strengthen service delivery, improve operational efficiency, and support the long-term sustainability of water infrastructure systems.",
    },
    {
      number: "02",
      title: "Wastewater Treatment and Sustainable Management",
      description:
        "Delivering innovative and sustainable wastewater treatment solutions through advanced technologies, efficient system design, and environmentally responsible management practices. We support the development of reliable wastewater infrastructure that enhances public health, protects natural resources, and promotes long-term operational sustainability for communities and institutions.",
    },
    {
      number: "03",
      title: "Integrated Water Conveyance and Channel Management",
      description:
        "Providing sustainable water conveyance solutions and effective channel management approaches to support efficient water distribution, system reliability, and long-term resource sustainability. We focus on practical planning, optimized infrastructure performance, and environmentally responsible practices to enhance water management outcomes for communities and regional development.",
    },
    {
      number: "04",
      title: "Advanced Irrigation and Water Resource Management",
      description:
        "Delivering innovative irrigation solutions and integrated water resource management approaches to improve water efficiency, optimize agricultural productivity, and promote sustainable use of available resources. We support resilient water systems through strategic planning, modern technologies, and environmentally responsible practices that benefit communities and future generations.",
    },
  ];

 const approach = [
  {
    number: "01",
    title: "Client Orientation",
    description:
      "We completely reject one-size-fits-all options. Every advisory program is specifically custom-tailored to resolve the unique, highly practical challenges of our respective clients.",
  },
  {
    number: "02",
    title: "Strategic Partnership",
    description:
      "Our operations are deeply collaborative. We build lasting bridges linking regional governments, international financial donors, and local community leaders together.",
  },
  {
    number: "03",
    title: "Proven Effectiveness",
    description:
      "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",
  },
  {
    number: "04",
    title: "Continuous Development",
    description:
      "We consistently build local capacities. We proactively adapt modern management systems to meet newly evolving macroeconomic and environmental challenges.",
  },
];
const internationalExperts = [
  {
    number: "01",
    name: "Mohd Masood Seediqyar",
    position: "Electrical Engineer and Utility Management Specialist",
    experience:
      "Specialist in utility management, power sector engineering, strategic planning, utility financial modeling, and cost-effective tariff design. Nearly 25 years of experience in utility management, Financial planning corporate management consulting. Proven expertise in developing sustainable and enhancing utility performance.",
    image: "mohd-masood-seediqyar.jpg",
  },
  {
    number: "02",
    name: "Dr. Kelkar Padmakar Waman",
    position: "Water Resources and Automation Specialist",
    experience:
      "Specialist in instrumentation, canal engineering, automation systems, and water resources management. Expert in monitoring and control systems for canal networks, irrigation infrastructure, and water distribution. Experienced in applying automation solutions to enhance water sector efficiency and sustainability.",
    image: "kelkar-padmakar-waman.jpg",
  },
  {
    number: "03",
    name: "Thomas Bedour, B.A.",
    position: "Senior Water and Wastewater Specialist",
    experience:
      "Thomas is a senior Water and Wastewater Specialist with over 10 years of experience in municipal and industrial utility operations, treatment systems, infrastructure management, regulatory compliance, and operational optimization. He has successfully managed and supported a wide range of water utility projects across Canada.",
    image: "thomas-bedour.jpg",
  },
  {
    number: "04",
    name: "Dr. Sanjay Bhattacharya",
    position: "Senior Strategy & Transformation Advisor",
    experience:
      "Professor of Practice and an expert in strategic management and project management, with over 30 years of combined academic and industry experience. His expertise is backed by extensive research, publications, and executive leadership across strategy, innovation, and organizational competitiveness.",
    image: "sanjay-bhattacharya.jpg",
  },
  {
    number: "05",
    name: "Ilkhom Tashtemirov",
    position: "Senior IFI Procurement & Dev. Projects Specialist",
    experience:
      "Senior IFI Procurement & Project Management Specialist with 20+ years of experience delivering World Bank and ADB-funded projects across Central Asia. Dual Master’s in Engineering and Economics, with expertise in leadership, government advisory, healthcare, digital, and water infrastructure.",
    image: "ilkhom-tashtemirov.jpg",
  },
  {
    number: "06",
    name: "Mher Kelian",
    position: "Senior Water Infrastructure & Systems Engineer",
    experience:
      "Experienced Water and Mechanical Engineer with 12+ years of expertise delivering over 300 infrastructure, treatment plant, and conveyance projects across the Middle East and Africa. Member of the Order of Engineers and Architects with proven success in process optimization, system design, and large-scale project execution.",
    image: "mher-kelian.jpg",
  },
];

  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}

      {/* ==================== HERO SECTION ==================== */}

<section className="hero">
  <div className="hero-container">
    <div className="hero-content">
      <p className="hero-label">
        NHD Consultants
      </p>

      <h1>
        Continuing a proven legacy
        <span>of success in Tajikistan.</span>
      </h1>

      <p className="hero-description">
        We provide practical, sustainable, and institutionally embedded
        solutions for community development, infrastructure, and public
        policy reform.
      </p>

      <div className="hero-actions">
        <a href="/services" className="hero-primary-button">
          Explore Our Services
        </a>

        <a href="/contact" className="hero-secondary-button">
          Contact Us
        </a>
      </div>

      <div className="hero-trust">
        <div>
          <strong>01</strong>
          <span>Local Expertise</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Social Impact</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Sustainable Solutions</span>
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
            ABOUT THE COMPANY
          </p>

          <h2>
            Practical, Sustainable
            <br />
            Solutions
          </h2>

          <h2>
            Institutionally Embedded
            <br />
            Development
          </h2>

          <div className="hero-card-line"></div>

          <p>
            New Horizons of Dushanbe LLC is a newly established,
            legally independent consulting firm built on a proven
            track record of leadership and operational excellence.
          </p>
        </div>

        <div className="hero-card-number">NHD / 01</div>
      </div>
    </div>
  </div>
</section>

      {/* ==================== COMPANY INTRODUCTION ==================== */}

     <section className="home-intro">
  <div className="home-intro-container">
    <div>
      <p className="section-label">
        ABOUT THE COMPANY
      </p>

      <h2>
        Continuing a proven legacy
        <span>of success in Tajikistan.</span>
      </h2>
    </div>

    <div className="home-intro-text">
      <p>
        New Horizons of Dushanbe LLC is a newly established, legally
        independent consulting firm built on a proven track record of
        leadership and operational excellence. Our management team
        previously led, managed, and successfully delivered a broad
        portfolio of high-impact projects during their tenure at BAZIS,
        GMES and BDO. We bring this extensive execution capability and
        rigorous project management approach directly to our new firm.
      </p>

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

      <a href="/about" className="text-link">
        Discover More
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
  Core Sectors
  <span>of Intervention</span>
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
                <div className="home-service-number">
                  {sector.number}
                </div>

                <div className="home-service-content">
                  <h3>{sector.title}</h3>

                  <p>{sector.description}</p>

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
              <span>{t("home.approachTitle2")}</span>
            </h2>

            <p>{t("home.approachDescription")}</p>
          </div>

          <div className="home-approach-grid">
            {approach.map((item) => (
              <article
                className="home-approach-card"
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
              <span>{t("home.teamTitle2")}</span>
            </h2>

            <p>{t("home.teamDescription")}</p>
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
  <span className="expert-number">
    {expert.number}
  </span>

  <h3>{expert.name}</h3>

  <p className="expert-role">
    {expert.position}
  </p>

  <p className="expert-experience">
    {expert.experience}
  </p>
</div>
  </article>
))}
          </div>
        </div>
      </section>

      {/* ==================== SDG / SOCIAL IMPACT ==================== */}

      <section className="home-impact">
        <div className="home-impact-container">
          <div className="home-impact-label">
            <p className="section-label">
              {t("home.impactLabel")}
            </p>

           
          </div>

          <div className="home-impact-content">
  <h2>
    Building Resilient Communities
    <span>Through Responsible Development</span>
  </h2>

  <p>
    NHD Consultants embed sustainability, social responsibility, and
    measurable impact into our projects, aligning our advisory services
    with the United Nations Sustainable Development Goals (SDGs).
    Through inclusive approaches and responsible practices, we support
    initiatives that improve communities, strengthen resilience, and
    create long-term value for society. Our commitment extends beyond
    project delivery, focusing on positive transformation, equitable
    opportunities, and sustainable outcomes for future generations. By
    integrating environmental, social, and governance principles, we
    help partners achieve meaningful impact and lasting development
    benefits.
  </p>

  <a href="/services" className="text-link">
    Explore Our Impact
  </a>
</div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
<section className="home-cta">
  <div className="home-cta-container">
    <p className="section-label">
      NHD CONSULTANTS
    </p>

    <h2>
      Building Resilient Communities
      <span>Through Responsible Development</span>
    </h2>

    <p>
      We embed sustainability, social responsibility, and measurable
      impact into our projects, aligning our advisory services with the
      United Nations Sustainable Development Goals (SDGs).
    </p>

    <a href="/contact" className="hero-primary-button">
      Contact Us
    </a>
  </div>
</section>
    </main>
  );
}

export default Home;