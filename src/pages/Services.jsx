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
      OUR SERVICES
    </p>

    <h1>
      Practical, Sustainable
      <span>Solutions</span>
    </h1>

    <p>
      We provide practical, sustainable, and institutionally embedded
      solutions for community development, infrastructure, and public
      policy reform.
    </p>
  </div>
</section>
      {/* ==================== SERVICES ==================== */}

      <section className="services-expertise">
  <div className="services-expertise-container">

    <div className="services-expertise-heading">
      <p className="section-label">
        CORE SECTORS OF INTERVENTION
      </p>

      <h2>
        Our Areas
        <span>of Expertise</span>
      </h2>
    </div>

    <div className="services-expertise-grid">

      <article className="services-expertise-card">
        <span>01</span>
        <h3>Water, Sanitation, and Hygiene (WASH)</h3>
        <p>
          Developing sustainable tariff structures, comprehensive economic
          feasibility studies, and effective legal and institutional frameworks
          to ensure reliable, efficient, resilient, and financially sustainable
          regional clean water services. Our approach combines sound economic
          analysis, regulatory alignment, and strategic planning to strengthen
          service delivery, improve operational efficiency, and support the
          long-term sustainability of water infrastructure systems.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>02</span>
        <h3>Wastewater Treatment and Sustainable Management</h3>
        <p>
          Delivering innovative and sustainable wastewater treatment solutions
          through advanced technologies, efficient system design, and
          environmentally responsible management practices. We support the
          development of reliable wastewater infrastructure that enhances public
          health, protects natural resources, and promotes long-term operational
          sustainability for communities and institutions.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>03</span>
        <h3>Integrated Water Conveyance and Channel Management</h3>
        <p>
          Providing sustainable water conveyance solutions and effective channel
          management approaches to support efficient water distribution, system
          reliability, and long-term resource sustainability. We focus on practical
          planning, optimized infrastructure performance, and environmentally
          responsible practices to enhance water management outcomes for
          communities and regional development.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>04</span>
        <h3>Advanced Irrigation and Water Resource Management</h3>
        <p>
          Delivering innovative irrigation solutions and integrated water resource
          management approaches to improve water efficiency, optimize agricultural
          productivity, and promote sustainable use of available resources. We
          support resilient water systems through strategic planning, modern
          technologies, and environmentally responsible practices that benefit
          communities and future generations.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>05</span>
        <h3>Solid Waste Management</h3>
        <p>
          Providing integrated solid waste management solutions covering efficient
          collection systems, waste treatment, recycling initiatives, and
          environmentally responsible landfill management. We support cleaner and
          healthier communities through sustainable waste practices, optimized
          disposal methods, resource recovery, and modern landfill solutions that
          protect the environment and promote long-term sustainability.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>06</span>
        <h3>Environmental Safeguards</h3>
        <p>
          Ensuring responsible project implementation through comprehensive
          environmental safeguard practices, regulatory compliance, and sustainable
          development approaches. We apply environmental assessments, risk
          management strategies, monitoring programs, and mitigation measures to
          protect natural resources, minimize impacts, and support environmentally
          resilient infrastructure development.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>07</span>
        <h3>Waste-to-Resource Economic Feasibility</h3>
        <p>
          Advancing sustainable resource recovery through comprehensive economic
          feasibility assessments, market analysis, and investment planning for
          waste-to-resource initiatives. Our approach evaluates technical
          viability, financial sustainability, and environmental benefits to
          support informed decision-making and the development of circular
          economy solutions.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>08</span>
        <h3>Community Stakeholder Participation & Public Awareness Programs</h3>
        <p>
          Strengthening community engagement through inclusive stakeholder
          participation, awareness initiatives, and effective communication
          strategies. Our approach promotes transparency, builds public
          understanding, and encourages collaboration among communities,
          institutions, and project stakeholders to support sustainable
          development outcomes.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>09</span>
        <h3>Institutional Planning and Development</h3>
        <p>
          Strengthening organizational capacity through strategic planning,
          institutional development frameworks, and effective governance
          approaches. We support institutions in improving operational efficiency,
          enhancing decision-making processes, and building sustainable systems
          that enable long-term growth, resilience, and effective service delivery.
        </p>
      </article>

      <article className="services-expertise-card">
        <span>10</span>
        <h3>Gender Equity and Inclusion</h3>
        <p>
          Promoting inclusive development through gender-responsive approaches,
          equitable participation, and social inclusion strategies. We support
          organizations and communities in creating opportunities for all
          stakeholders, strengthening accessibility, empowering diverse voices,
          and fostering sustainable outcomes through fair and inclusive practices.
        </p>
      </article>

    </div>
  </div>
</section>

      {/* ==================== CAPACITY BUILDING ==================== */}

      <section className="services-capacity">
  <div className="services-capacity-container">

    <div className="services-capacity-heading">
      <p className="section-label">
        CAPACITY BUILDING
      </p>

      <h2>
        Knowledge &
        <span>Skill Integration</span>
      </h2>
    </div>

    <div className="services-capacity-content">

      <p>
        We deliver tailored vocational programs, hands-on digital workshops,
        and organizational training specifically designed for public utility
        personnel.
      </p>

      <p>
        Sustainable transformation requires more than modern infrastructure—it
        demands local capability. Through structured knowledge transfer, NHD
        Consultants bridges the gap between technology deployment and long-term
        utility management.
      </p>

      <p>
        We empower regional administrators and municipal teams to independently
        operate newly implemented billing databases, cutting-edge metering
        technologies, and robust Environmental, Health, and Safety (EHS)
        safeguards.
      </p>

      <p>
        By transforming technical execution into lasting institutional expertise,
        we ensure local teams drive efficiency, compliance, and growth with
        complete confidence.
      </p>

    </div>

  </div>
</section>

      {/* ==================== SDG ==================== */}

     <section className="services-sdg">
  <div className="services-sdg-container">

    <div className="services-sdg-heading">
      <p className="section-label">
        SDG & SOCIAL IMPACT
      </p>

      <h2>
        Building Resilient Communities
        <span>Through Responsible Development</span>
      </h2>
    </div>

    <div className="services-sdg-grid">

      <article className="services-sdg-card">
        <span>SDG 6</span>
        <h3>Clean Water</h3>
        <p>
          Broadening structural utility accessibility.
        </p>
      </article>

      <article className="services-sdg-card">
        <span>SDG 5</span>
        <h3>Gender Equality</h3>
        <p>
          Formulating equitable recruitment strategies.
        </p>
      </article>

      <article className="services-sdg-card">
        <span>SDG 11</span>
        <h3>Sustainable Cities</h3>
        <p>
          Driving localized green policy reform.
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
        PROJECT CREDENTIALS
      </p>

      <h2>
        Proven Experience
        <span>Delivered Results</span>
      </h2>
    </div>

    <div className="credentials-list">

      <article className="credential-row">
        <span>01</span>

        <div>
          <h3>Water Supply &amp; Sanitation</h3>
          <p>ADB / EBRD</p>
        </div>

        <p>
          Restructuring tariff systems, developing cost-recovery business
          models, and establishing compliance protocols.
        </p>
      </article>

      <article className="credential-row">
        <span>02</span>

        <div>
          <h3>Solid Waste Management</h3>
          <p>EBRD</p>
        </div>

        <p>
          Implementing ESAP requirements, designing community engagement
          plans, and optimizing local billing processes.
        </p>
      </article>

      <article className="credential-row">
        <span>03</span>

        <div>
          <h3>Public Utility Digitalization</h3>
          <p>World Bank</p>
        </div>

        <p>
          Deploying modern MIS billing, custom database architectures,
          and digital client relationship systems.
        </p>
      </article>

      <article className="credential-row">
        <span>04</span>

        <div>
          <h3>Social &amp; Gender Policies</h3>
          <p>Donor-Supported Initiatives</p>
        </div>

        <p>
          Formulating equal opportunity guidelines, leading stakeholder
          public hearings, and establishing corporate HR structures.
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
        PROCUREMENT &amp; COMPLIANCE
      </p>

      <h2>
        Anti-Corruption
        <span>&amp; Ethics</span>
      </h2>
    </div>

    <div className="services-compliance-content">

      <p>
        We uphold the highest standards of integrity through a strict
        zero-tolerance policy toward fraud, corruption, and collusive
        practices. All advisory services and bid support activities are
        conducted in full compliance with the integrity standards and
        procurement guidelines of ADB, EBRD, and the World Bank. We are
        committed to transparency, accountability, and ethical excellence
        in every engagement with clients, partners, and stakeholders.
      </p>

      <div className="services-compliance-item">
        <h3>Conflict of Interest</h3>

        <p>
          Our corporate advisory framework is built on independence,
          transparency, and neutrality, ensuring objective support
          throughout all engagements. We proactively manage conflicts of
          interest and uphold the highest standards of integrity,
          accountability, and stakeholder confidence. Our governance
          approach promotes fair evaluation, ethical decision-making, and
          reliable outcomes for every project. We remain committed to
          delivering trusted advisory services aligned with international
          best practices.
        </p>
      </div>

      <div className="services-compliance-item">
        <h3>Fair Bidding Alignment</h3>

        <p>
          We guarantee full compliance with international bidding
          regulations, ensuring transparent accounting practices, fair
          competition, and robust administrative procedures across all
          regions. Our approach promotes accountability, efficiency, and
          adherence to global best practices throughout every stage of the
          procurement and project delivery process.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ==================== CTA ==================== */}

     <section className="services-cta">
  <div className="services-cta-container">
    <p className="section-label">
      NHD CONSULTANTS
    </p>

  <h2>
  Building Resilient Communities <br></br>
  <span>Through Responsible Development</span>
</h2>

    <p>
      We embed sustainability, social responsibility, and measurable
      impact into our projects, aligning our advisory services with the
      United Nations Sustainable Development Goals (SDGs). Through
      inclusive approaches and responsible practices, we support
      initiatives that improve communities, strengthen resilience, and
      create long-term value for society. Our commitment extends beyond
      project delivery, focusing on positive transformation, equitable
      opportunities, and sustainable outcomes for future generations. By
      integrating environmental, social, and governance principles, we
      help partners achieve meaningful impact and lasting development
      benefits.
    </p>

    <a href="/contact" className="hero-primary-button">
      Contact Us
    </a>
  </div>
</section>
    </main>
  );
}

export default Services;