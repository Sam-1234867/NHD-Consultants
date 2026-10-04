import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();

  const experts = [
    {
      number: "01",
      name: "Mohd Masood Seediqyar",
      image: "/images/experts/mohd-masood-seediqyar.jpg",
      position: t("team.expert1Position"),
      experience: t("team.expert1Experience"),
      description: t("team.expert1Description"),
    },
    {
      number: "02",
      name: "Dr. Kelkar Padmakar Waman",
      image: "/images/experts/kelkar-padmakar-waman.jpg",
      position: t("team.expert2Position"),
      experience: t("team.expert2Experience"),
      description: t("team.expert2Description"),
    },
    {
      number: "03",
      name: "Thomas Bedour, B.A.",
      image: "/images/experts/thomas-bedour.jpg",
      position: t("team.expert3Position"),
      experience: t("team.expert3Experience"),
      description: t("team.expert3Description"),
    },
    {
      number: "04",
      name: "Dr. Sanjay Bhattacharya",
      image: "/images/experts/sanjay-bhattacharya.jpg",
      position: t("team.expert4Position"),
      experience: t("team.expert4Experience"),
      description: t("team.expert4Description"),
    },
    {
      number: "05",
      name: "Ilkhom Tashtemirov",
      image: "/images/experts/ilkhom-tashtemirov.jpg",
      position: t("team.expert5Position"),
      experience: t("team.expert5Experience"),
      description: t("team.expert5Description"),
    },
    {
      number: "06",
      name: "Mher Kelian",
      image: "/images/experts/mher-kelian.jpg",
      position: t("team.expert6Position"),
      experience: t("team.expert6Experience"),
      description: t("team.expert6Description"),
    },
  ];

  return (
    <main>
      {/* =========================================================
         TEAM HERO
         ========================================================= */}

      <section className="team-page-hero">
  <div className="team-page-hero-container">
    <p className="section-label">
      OUR INTERNATIONAL TEAM
    </p>

    <h1>
      Experts with
      <span>Global Experience.</span>
    </h1>

    <p>
      Our international team brings extensive professional experience
      across development, infrastructure, institutional reform, and
      advisory services.
    </p>
  </div>
</section>

      {/* =========================================================
         INTERNATIONAL EXPERTS
         ========================================================= */}

      <section className="team-main">
  <div className="team-main-container">

    <div className="team-main-heading">
      <p className="section-label">
        OUR EXPERTS
      </p>

      <h2>
        International Experience.
        <span>Practical Expertise.</span>
      </h2>

      <p>
        Our experts bring diverse professional backgrounds and international
        experience to support complex development and advisory challenges.
      </p>
    </div>

    <div className="team-grid">

      <article className="expert-card">
        <img
          src="/images/experts/mohd-masood-seediqyar.jpg"
          alt="Mohd Masood Seediqyar"
        />

        <div className="expert-content">
          <span className="expert-number">01</span>

          <h3>
            Mohd Masood Seediqyar
          </h3>

          <p className="expert-role">
            Electrical Engineer and Utility Management Specialist
          </p>

          <p className="expert-experience">
            Specialist in utility management, power sector engineering,
            strategic planning, utility financial modeling, and cost-effective
            tariff design. Nearly 25 years of experience in utility management,
            Financial planning corporate management consulting. Proven expertise
            in developing sustainable and enhancing utility performance.
          </p>
        </div>
      </article>


      <article className="expert-card">
        <img
          src="/images/experts/kelkar-padmakar-waman.jpg"
          alt="Dr. Kelkar Padmakar Waman"
        />

        <div className="expert-content">
          <span className="expert-number">02</span>

          <h3>
            Dr. Kelkar Padmakar Waman
          </h3>

          <p className="expert-role">
            Water Resources and Automation Specialist
          </p>

          <p className="expert-experience">
            Specialist in instrumentation, canal engineering, automation
            systems, and water resources management. Expert in monitoring
            and control systems for canal networks, irrigation infrastructure,
            and water distribution. Experienced in applying automation
            solutions to enhance water sector efficiency and sustainability.
          </p>
        </div>
      </article>


      <article className="expert-card">
        <img
          src="/images/experts/thomas-bedour.jpg"
          alt="Thomas Bedour, B.A."
        />

        <div className="expert-content">
          <span className="expert-number">03</span>

          <h3>
            Thomas Bedour, B.A.
          </h3>

          <p className="expert-role">
            Senior Water and Wastewater Specialist
          </p>

          <p className="expert-experience">
            Thomas is a senior Water and Wastewater Specialist with over 10
            years of experience in municipal and industrial utility operations,
            treatment systems, infrastructure management, regulatory compliance,
            and operational optimization. He has successfully managed and
            supported a wide range of water utility projects across Canada.
          </p>
        </div>
      </article>


      <article className="expert-card">
        <img
          src="/images/experts/sanjay-bhattacharya.jpg"
          alt="Dr. Sanjay Bhattacharya"
        />

        <div className="expert-content">
          <span className="expert-number">04</span>

          <h3>
            Dr. Sanjay Bhattacharya
          </h3>

          <p className="expert-role">
            Senior Strategy &amp; Transformation Advisor
          </p>

          <p className="expert-experience">
            Professor of Practice and an expert in strategic management and
            project management, with over 30 years of combined academic and
            industry experience. His expertise is backed by extensive research,
            publications, and executive leadership across strategy, innovation,
            and organizational competitiveness.
          </p>
        </div>
      </article>


      <article className="expert-card">
        <img
          src="/images/experts/ilkhom-tashtemirov.jpg"
          alt="Ilkhom Tashtemirov"
        />

        <div className="expert-content">
          <span className="expert-number">05</span>

          <h3>
            Ilkhom Tashtemirov
          </h3>

          <p className="expert-role">
            Senior IFI Procurement &amp; Dev. Projects Specialist
          </p>

          <p className="expert-experience">
            Senior IFI Procurement &amp; Project Management Specialist with
            20+ years of experience delivering World Bank and ADB-funded
            projects across Central Asia. Dual Master’s in Engineering and
            Economics, with expertise in leadership, government advisory,
            healthcare, digital, and water infrastructure.
          </p>
        </div>
      </article>


      <article className="expert-card">
        <img
          src="/images/experts/mher-kelian.jpg"
          alt="Mher Kelian"
        />

        <div className="expert-content">
          <span className="expert-number">06</span>

          <h3>
            Mher Kelian
          </h3>

          <p className="expert-role">
            Senior Water Infrastructure &amp; Systems Engineer
          </p>

          <p className="expert-experience">
            Experienced Water and Mechanical Engineer with 12+ years of
            expertise delivering over 300 infrastructure, treatment plant,
            and conveyance projects across the Middle East and Africa.
            Member of the Order of Engineers and Architects with proven
            success in process optimization, system design, and large-scale
            project execution.
          </p>
        </div>
      </article>

    </div>
  </div>
</section>
      {/* =========================================================
         GLOBAL NETWORK
         ========================================================= */}

      <section className="team-network">
  <div className="team-network-container">
    <div className="team-network-heading">
      <p className="section-label">
        OUR NETWORK
      </p>

      <h2>
        A broader network.
        <span>A stronger perspective.</span>
      </h2>
    </div>

    <div className="team-network-content">
      <p>
        Our international network allows us to bring together diverse
        expertise and perspectives when projects require specialized
        knowledge.
      </p>

      <a href="/contact" className="hero-primary-button">
        Work With Our Team
      </a>
    </div>
  </div>
</section>
    </main>
  );
}

export default Team;