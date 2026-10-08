import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      {/* HERO */}
      {/* HERO */}
{/* HERO */}
<section className="contact-page-hero">
  <div className="contact-page-hero-container">
    <p className="section-label">
      {t("contact.heroLabel")}
    </p>

    <h1>
      {t("contact.heroTitle1")}
      <span>{t("contact.heroTitle2")}</span>
    </h1>

    <p>
      {t("contact.heroDescription")}
    </p>
  </div>
</section>

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        <div className="contact-main-container">
          <div className="contact-information">
            <p className="section-label">
  {t("contact.getInTouchLabel")}
</p>

<h2>
  {t("contact.getInTouchTitle1")}{" "}
  <span>{t("contact.getInTouchTitle2")}</span>
</h2>

<p>
  {t("contact.getInTouchDescription")}
</p>
            <div className="contact-details">
             <div className="contact-detail">
  <span>01</span>

  <div>
    <h3>{t("contact.organizationLabel")}</h3>
    <p>{t("contact.organizationName")}</p>
    <p>{t("contact.organizationBrand")}</p>
  </div>
</div>

             <div className="contact-detail">
  <span>02</span>

  <div>
    <h3>{t("contact.countryLabel")}</h3>
    <p>{t("contact.countryName")}</p>
  </div>
</div>
             <div className="contact-detail">
  <span>03</span>

  <div>
    <h3>{t("contact.inquiryLabel")}</h3>
    <p>{t("contact.inquiryName")}</p>
  </div>
</div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
          <p className="contact-form-label">
  {t("contact.formLabel")}
</p>

<form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();
      console.log("CUSTOM FORM SUBMIT IS RUNNING");


 const form = e.currentTarget;
const formData = new FormData(form);
const data = Object.fromEntries(formData);
const json = JSON.stringify(data);

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: json,
});

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      form.reset();
    }
  }}
>
  <input
    type="hidden"
    name="access_key"
    value="34757ac7-93d1-4e3c-80d6-9e1883b5a278"
  />

  <div className="contact-form-row">
    <div className="contact-field">
      <label htmlFor="name">{t("contact.fullName")}</label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder={t("contact.fullNamePlaceholder")}
        required
      />
    </div>

    <div className="contact-field">
      <label htmlFor="email">{t("contact.email")}</label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder={t("contact.emailPlaceholder")}
        required
      />
    </div>
  </div>

  <div className="contact-field">
    <label htmlFor="subject">{t("contact.subject")}</label>

    <input
      id="subject"
      name="subject"
      type="text"
      placeholder={t("contact.subjectPlaceholder")}
      required
    />
  </div>

  <div className="contact-field">
    <label htmlFor="message">{t("contact.message")}</label>

    <textarea
      id="message"
      name="message"
      rows="7"
      placeholder={t("contact.messagePlaceholder")}
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="contact-submit-button"
  >
    {t("contact.sendInquiry")}
  </button>

  {submitted ? (
  <p className="contact-form-note">
     {t("contact.formSuccess")}
  </p>
) : (
  <p className="contact-form-note">
    {t("contact.formNote")}
  </p>
)}
</form>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      {/* CLOSING */}
<section className="contact-closing">
  <div className="contact-closing-container">
    <p className="section-label">
      {t("contact.ctaLabel")}
    </p>

    <h2>
      {t("contact.ctaTitle1")}
      <span>{t("contact.ctaTitle2")}</span>
    </h2>

    <p>
      {t("contact.ctaDescription")}
    </p>
  </div>
</section>
    </main>
  );
}

export default Contact;