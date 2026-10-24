import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();

  // =========================================================
  // NATIONAL TEAM - PHOTOS PROVIDED BY THE CLIENT
  // =========================================================

 
  const nationalExperts = [
    {
      number: "01",
      name: "Abdulhanon Karimov",
   image: "/images/natioanl%201/Our%20National%20Team%20Abdulhanon%20Karimov%20%20.png",
      position: t("team.nationalExpert1Position"),
      experience: t("team.nationalExpert1Experience"),
    },
    {
      number: "02",
      name: "Amirshoev Siyovush",
   image: "/images/natioanl%201/Our%20National%20Team%20Amirshoev%20Siyovush.png",
      position: t("team.nationalExpert2Position"),
      experience: t("team.nationalExpert2Experience"),
    },
    {
      number: "03",
      name: "Dr. Zulfiya Tilloeva",
     image: "/images/natioanl%201/Our%20National%20Team%20Dr.%20Zulfiya%20Tilloeva.png",
      position: t("team.nationalExpert3Position"),
      experience: t("team.nationalExpert3Experience"),
    },
    {
      number: "04",
      name: "Gulomshoeva Nodira",
      image: "/images/natioanl%201/Our%20National%20Team%20Gulomshoeva%20Nodira.png",
      position: t("team.nationalExpert4Position"),
      experience: t("team.nationalExpert4Experience"),
    },
    {
      number: "05",
      name: "Komron Dadaboev",
    image: "/images/natioanl%201/Our%20National%20Team%20Komron%20Dadaboev%20.png",
      position: t("team.nationalExpert5Position"),
      experience: t("team.nationalExpert5Experience"),
    },
    {
      number: "06",
      name: "Abdullaev Nematullo",
    image: "/images/natioanl%201/Our%20National%20Team%20Namatulla.png",
      position: t("team.nationalExpert6Position"),
      experience: t("team.nationalExpert6Experience"),
    },
    {
      number: "07",
      name: "Nozanin Khudoieva",
    image: "/images/natioanl%201/Our%20National%20Team%20Nozanin%20Khudoieva.png",
      position: t("team.nationalExpert7Position"),
      experience: t("team.nationalExpert7Experience"),
    },
    {
      number: "08",
      name: "Saidshoeva Madina",
  image: "/images/natioanl%201/Our%20National%20Team%20Saidshoeva%20Madina.png",
      position: t("team.nationalExpert8Position"),
      experience: t("team.nationalExpert8Experience"),
    },
    {
      number: "09",
      name: "Shuhrat Jalilov",
   image: "/images/natioanl%201/Our%20National%20Team%20Shuhrat%20Jalilov.png",
      position: t("team.nationalExpert9Position"),
      experience: t("team.nationalExpert9Experience"),
    },
    {
      number: "10",
      name: "Suhrob Khaitov",
image: "/images/natioanl%201/Our%20National%20Team%20Suhrob%20Khaitov.png",
      position: t("team.nationalExpert10Position"),
      experience: t("team.nationalExpert10Experience"),
    },
    {
      number: "11",
      name: "Suyar Yakubov",
      image: "/images/natioanl%201/Our%20National%20Team%20Suyar%20Yakubov.png",
      position: t("team.nationalExpert11Position"),
      experience: t("team.nationalExpert11Experience"),
    },
    {
      number: "12",
      name: "Zebo Nazarova",
  image: "/images/natioanl%201/Our%20National%20Team%20Zebo%20Nazarova.png",
      position: t("team.nationalExpert12Position"),
      experience: t("team.nationalExpert12Experience"),
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

          <p className="team-section-description">
  {t("team.heroDescription")}
</p>
        </div>
      </section>

           {/* =========================================================
         LEADERSHIP SPOTLIGHT
         ========================================================= */}

      
      {/* =========================================================
         LEADERSHIP SPOTLIGHT
         ========================================================= */}

      <section className="team-main leadership-spotlight-section">
        <div className="team-main-container">
          <div className="team-main-heading">
            <p className="section-label">
              {t("team.leadershipLabel")}
            </p>

            <h2>
              {t("team.leadershipTitle1")}{" "}
              <span>{t("team.leadershipTitle2")}</span>
            </h2>
          </div>

          <article className="leadership-spotlight-card">
            <div className="leadership-spotlight-photo">
              <img
                src="/images/Leadership%20pic/leadership-pic.png"
                alt="Rayshan Tuvchizoda"
                loading="lazy"
              />
            </div>

            <div className="leadership-spotlight-content">
              <h3>Rayshan Tuvchizoda</h3>

              <p className="expert-role">
                {t("team.leadershipRole")}
              </p>

              <p className="leadership-spotlight-description">
                {t("team.leadershipDescription")}
              </p>

              <ul className="leadership-spotlight-list">
                <li>{t("team.leadershipPoint1")}</li>
                <li>{t("team.leadershipPoint2")}</li>
                <li>{t("team.leadershipPoint3")}</li>
                <li>{t("team.leadershipPoint4")}</li>
                <li>{t("team.leadershipPoint5")}</li>
                <li>{t("team.leadershipPoint6")}</li>
                <li>{t("team.leadershipPoint7")}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>


      {/* =========================================================
         NATIONAL TEAM
         ========================================================= */}

      <section className="team-main national-team-section">
        <div className="team-main-container">
          <div className="team-main-heading">
            <p className="section-label">
              {t("team.nationalLabel", {
                defaultValue: "OUR NATIONAL TEAM",
              })}
            </p>

            <h2>
              {t("team.nationalTitle1", {
                defaultValue: "Our National",
              })}{" "}
              <span>
                {t("team.nationalTitle2", {
                  defaultValue: "Experts",
                })}
              </span>
            </h2>

           <p className="team-section-description">
              {t("team.nationalDescription", {
                defaultValue:
                  "Our national experts bring local knowledge and professional experience to support sustainable development across Tajikistan.",
              })}
            </p>
          </div>

          <div className="team-grid national-team-grid">
            {nationalExperts.map((expert) => (
              <article className="expert-card" key={expert.number}>
              <div className="national-expert-photo">
  <img
    src={expert.image}
    alt={expert.name}
    loading="lazy"
  />
</div>

                <div className="expert-content">
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

      {/* =========================================================
         INTERNATIONAL EXPERTS
         Existing international team preserved
         ========================================================= */}

     <section className="team-main international-team-section">
        <div className="team-main-container">
          <div className="team-main-heading">
          <p className="section-label international-team-label">
  {t("team.mainLabel")}
</p>

            <h2>
              {t("team.mainTitle1")}
              <span>{t("team.mainTitle2")}</span>
            </h2>

           <p className="team-section-description">
  {t("team.mainDescription")}
</p>
          </div>

          <div className="team-grid international-team-grid">
            <article className="expert-card">
<img
  className="mohd-photo"
  src="/images/international%202/Our%20International%20Team%20Mohd.%20Masood%20Seediqyar.png"
  alt="Mohd Masood Seediqyar"
  loading="lazy"
/>
              <div className="expert-content">
                <h3>Mohd Masood Seediqyar</h3>

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
  className="kelkar-photo"
  src="/images/international%202/Our%20International%20TeamDr.%20Kelkar%20Padmakar%20Waman.png"
  alt="Dr. Kelkar Padmakar Waman"
  loading="lazy"
/>

              <div className="expert-content">
                <h3>Dr. Kelkar Padmakar Waman</h3>

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
  src="/images/international%202/Our%20International%20Team%20Thomas%20Bedour,%20B.A.png"
  alt="Thomas Bedour"
  loading="lazy"
/>

              <div className="expert-content">
                <h3>Thomas Bedour, B.A.</h3>

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
  src="/images/international%202/Our%20International%20Team%20Dr.%20Sanjay%20Bhattacharya.png"
  alt="Dr. Sanjay Bhattacharya"
  loading="lazy"
/>
              <div className="expert-content">
                <h3>Dr. Sanjay Bhattacharya</h3>

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
  src="/images/international%202/Our%20International%20TeamIlkhom%20Tashtemirov.png"
  alt="Ilkhom Tashtemirov"
  loading="lazy"
/>
              <div className="expert-content">
                <h3>Ilkhom Tashtemirov</h3>

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
  src="/images/international%202/Our%20International%20Team%20Mher%20Kelian.png"
  alt="Mher Kelian"
  loading="lazy"
/>
              <div className="expert-content">
                <h3>Mher Kelian</h3>

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
           <p className="team-section-description">
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