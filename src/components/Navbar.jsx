import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="navbar">

        {/* BRAND */}
       <a href="/" className="navbar-brand" onClick={closeMenu}>
  <img
    src="/images/logo/Logo Photo.jpg"
    alt="NHD Consultants"
    className="navbar-logo"
  />
</a>

        {/* DESKTOP NAVIGATION */}
       <nav className="navbar-nav">
  <a href="/">{t("nav.home")}</a>
  <a href="/about">{t("nav.about")}</a>
  <a href="/services">{t("nav.services")}</a>
  <a href="/projects">{t("nav.projects")}</a>
  <a href="/team">{t("nav.experts")}</a>
  <a href="/news">{t("nav.news")}</a>
  <a href="/contact">{t("nav.contact")}</a>
</nav>

        {/* LANGUAGE SELECTOR */}
        <div className="language-selector">
          <button
            type="button"
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>

          <button
            type="button"
            className={i18n.language === "ru" ? "active" : ""}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </button>

          <button
            type="button"
            className={i18n.language === "tg" ? "active" : ""}
            onClick={() => changeLanguage("tg")}
          >
            TJ
          </button>
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <a href="/contact" className="navbar-contact">
          {t("nav.start")}
          <span>→</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE NAVIGATION */}
        <nav
          className={`mobile-navbar ${
            menuOpen ? "mobile-navbar-open" : ""
          }`}
        >
          <a href="/" onClick={closeMenu}>
            {t("nav.home")}
          </a>

          <a href="/about" onClick={closeMenu}>
            {t("nav.about")}
          </a>

          <a href="/services" onClick={closeMenu}>
            {t("nav.services")}
          </a>

          <a href="/projects" onClick={closeMenu}>
            {t("nav.projects")}
          </a>

          <a href="/team" onClick={closeMenu}>
            {t("nav.experts")}
          </a>

          <a href="/news" onClick={closeMenu}>
            {t("nav.news")}
          </a>

          <a href="/contact" onClick={closeMenu}>
            {t("nav.contact")}
          </a>

          {/* MOBILE LANGUAGE SELECTOR */}
          <div className="mobile-language-selector">
            <button
              type="button"
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              English
            </button>

            <button
              type="button"
              className={i18n.language === "ru" ? "active" : ""}
              onClick={() => changeLanguage("ru")}
            >
              Русский
            </button>

            <button
              type="button"
              className={i18n.language === "tg" ? "active" : ""}
              onClick={() => changeLanguage("tg")}
            >
              Тоҷикӣ
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;