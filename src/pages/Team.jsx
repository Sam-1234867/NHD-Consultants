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
  {t("team.heroLabel")}
</p>

<h1>
  {t("team.heroTitle1")}
  <span>{t("team.heroTitle2")}</span>
</h1>

<p>
  {t("team.heroDescription")}
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
    {t("team.mainLabel")}
  </p>

  <h2>
    {t("team.mainTitle1")}
    <span>{t("team.mainTitle2")}</span>
  </h2>

  <p>
    {t("team.mainDescription")}
  </p>
</div>
    <div className="team-grid">

      <article className="expert-card">
  <img
    src="/images/experts/mohd-masood-seediqyar.jpg"
    alt="Mohd Masood Seediqyar"
  />

  <div className="expert-content">
    

    <h3>
      Mohd Masood Seediqyar
    </h3>

    <p className="expert-role">
      {t("team.expert1Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert1Experience")}
    </p>
  </div>
</article>


      <article className="expert-card">
  <img
    src="/images/experts/kelkar-padmakar-waman.jpg"
    alt="Dr. Kelkar Padmakar Waman"
  />

  <div className="expert-content">
   

    <h3>
      Dr. Kelkar Padmakar Waman
    </h3>

    <p className="expert-role">
      {t("team.expert2Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert2Experience")}
    </p>
  </div>
</article>

     <article className="expert-card">
  <img
    src="/images/experts/thomas-bedour.jpg"
    alt="Thomas Bedour, B.A."
  />

  <div className="expert-content">
      

    <h3>
      Thomas Bedour, B.A.
    </h3>

    <p className="expert-role">
      {t("team.expert3Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert3Experience")}
    </p>
  </div>
</article>


     <article className="expert-card">
  <img
    src="/images/experts/sanjay-bhattacharya.jpg"
    alt="Dr. Sanjay Bhattacharya"
  />

  <div className="expert-content">
    

    <h3>
      Dr. Sanjay Bhattacharya
    </h3>

    <p className="expert-role">
      {t("team.expert4Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert4Experience")}
    </p>
  </div>
</article>


     <article className="expert-card">
  <img
    src="/images/experts/ilkhom-tashtemirov.jpg"
    alt="Ilkhom Tashtemirov"
  />

  <div className="expert-content">
   

    <h3>
      Ilkhom Tashtemirov
    </h3>

    <p className="expert-role">
      {t("team.expert5Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert5Experience")}
    </p>
  </div>
</article>

    <article className="expert-card">
  <img
    src="/images/experts/mher-kelian.jpg"
    alt="Mher Kelian"
  />

  <div className="expert-content">
   

    <h3>
      Mher Kelian
    </h3>

    <p className="expert-role">
      {t("team.expert6Position")}
    </p>

    <p className="expert-experience">
      {t("team.expert6Experience")}
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
        {t("team.networkLabel")}
      </p>

      <h2>
        {t("team.networkTitle1")}
        <span>{t("team.networkTitle2")}</span>
      </h2>
    </div>

    <div className="team-network-content">
      <p>
        {t("team.networkDescription")}
      </p>

      <a href="/contact" className="hero-primary-button">
        {t("team.networkButton")}
      </a>
    </div>
  </div>
</section>
    </main>
  );
}

export default Team;