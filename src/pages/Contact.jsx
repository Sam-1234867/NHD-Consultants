function Contact() {
  return (
    <main>
      {/* HERO */}
   <section className="contact-page-hero">
  <div className="contact-page-hero-container">
    <p className="section-label">
      CONTACT NHD CONSULTANTS
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

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        <div className="contact-main-container">
          <div className="contact-information">
            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Start a <span>conversation.</span>
            </h2>

            <p>
              We welcome inquiries from governments, international
              organizations, development partners, institutions, and other
              stakeholders seeking practical and sustainable solutions.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span>01</span>

                <div>
                  <h3>Organization</h3>
                  <p>New Horizons of Dushanbe LLC</p>
                  <p>NHD Consultants</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>02</span>

                <div>
                  <h3>Country</h3>
                  <p>Republic of Tajikistan</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>03</span>

                <div>
                  <h3>Inquiry</h3>
                  <p>Development & Advisory Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <p className="contact-form-label">SEND AN INQUIRY</p>

            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  rows="7"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="button"
                className="contact-submit-button"
              >
                Send Inquiry →
              </button>

              <p className="contact-form-note">
                Contact form submission will be connected after the website
                content and design are approved.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="contact-closing">
  <div className="contact-closing-container">
    <p className="section-label">
      NHD CONSULTANTS
    </p>

    <h2>
      Practical, Sustainable
      <span>Solutions</span>
    </h2>

    <p>
      We provide practical, sustainable, and institutionally embedded
      solutions for community development, infrastructure, and public
      policy reform.
    </p>
  </div>
</section>
    </main>
  );
}

export default Contact;