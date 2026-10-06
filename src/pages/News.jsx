import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();

  return (
    <main>
      {/* =========================================================
          NEWS HERO
          ========================================================= */}

      <section className="news-page-hero">
  <div className="news-page-hero-container">
<p className="section-label">
  {t("news.heroLabel")}
</p>

<h1>
  {t("news.heroTitle1")}
  <span>{t("news.heroTitle2")}</span>
</h1>

<p>
  {t("news.heroDescription")}
</p>
  </div>
</section>
      {/* =========================================================
          LATEST UPDATES
          ========================================================= */}
<section className="news-main">
  <div className="news-main-container">

   <div className="news-heading">
  <p className="section-label">
    {t("news.mainLabel")}
  </p>

  <h2>
    {t("news.mainTitle1")}
    <span>{t("news.mainTitle2")}</span>
  </h2>

  <p>
    {t("news.mainDescription")}
  </p>
</div>

   <div className="news-empty">

  <span>01</span>

  <div>
    <p className="news-category">
      {t("news.updateCategory")}
    </p>

    <h3>
      {t("news.updateTitle")}
    </h3>

    <p>
      {t("news.updateDescription")}
    </p>
  </div>

</div>

  </div>
</section>
      {/* =========================================================
          NEWS CTA
          ========================================================= */}
<section className="news-cta">
  <div className="news-cta-container">
    <p className="section-label">
      {t("news.ctaLabel")}
    </p>

   <h2>
  {t("news.ctaTitle1")}
  <br />
  <span style={{ color: "#7A1F2B" }}>
    {t("news.ctaTitle2")}
  </span>
</h2>
    <p>
      {t("news.ctaDescription")}
    </p>

    <a href="/contact" className="hero-primary-button">
      {t("news.ctaButton")}
    </a>
  </div>
</section>
    </main>
  );
}

export default News;