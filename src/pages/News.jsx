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
      NEWS &amp; UPDATES
    </p>

   <h1>
  News
  <span>&amp; Updates.</span>
</h1>

    <p>
      Company announcements, project milestones, professional insights,
      and updates from NHD Consultants.
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
        SDG &amp; SOCIAL IMPACT
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
    </div>

    <div className="news-empty">

      <span>01</span>

      <div>
        <p className="news-category">
          SDG &amp; SOCIAL IMPACT
        </p>

        <h3>
          Building Resilient Communities Through Responsible Development
        </h3>

        <p>
          Through inclusive approaches and responsible practices, we
          support initiatives that improve communities, strengthen
          resilience, and create long-term value for society. Our
          commitment extends beyond project delivery, focusing on
          positive transformation, equitable opportunities, and
          sustainable outcomes for future generations.
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
      NHD CONSULTANTS
    </p>

    <h2>
      Building Resilient Communities
      <span>Through Responsible Development</span>
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

export default News;