import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span>NHD</span>
            <small>CONSULTANTS</small>
          </a>

          <p className="footer-description">
            {t("footer.description")}
          </p>

          <div className="footer-tagline">
            <span>{t("footer.localExpertise")}</span>
            <span>{t("footer.socialImpact")}</span>
            <span>{t("footer.sustainableSolutions")}</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>{t("footer.company")}</h3>
          <a href="/">{t("footer.home")}</a>
          <a href="/about">{t("footer.about")}</a>
          <a href="/services">{t("footer.services")}</a>
          <a href="/news">{t("footer.news")}</a>
          <a href="/contact">{t("footer.contact")}</a>
        </div>

        <div className="footer-column">
          <h3>{t("footer.expertise")}</h3>
          <a href="/services">{t("footer.waterSanitation")}</a>
          <a href="/services">{t("footer.infrastructureUtilities")}</a>
          <a href="/services">{t("footer.socialDevelopment")}</a>
          <a href="/services">{t("footer.digitalTransformation")}</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>{t("footer.connect")}</h3>
          <p>{t("footer.companyName")}</p>
          <p>{t("footer.country")}</p>

          <a href="/contact" className="footer-link">
            {t("footer.contactNhd")}
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.companyName")}</p>
      </div>
    </footer>
  );
}

export default Footer;