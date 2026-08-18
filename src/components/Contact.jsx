export default function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="section-heading">
        <p className="eyebrow">Reach out</p>
        <h1>Contact</h1>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:Diwangtarlac@gmail.com">
          <span className="contact-card__icon" aria-hidden="true">✉️</span>
          <h3>Email</h3>
          <p>Diwangtarlac@gmail.com</p>
        </a>
        <a
          className="contact-card"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-card__icon" aria-hidden="true">📘</span>
          <h3>Facebook</h3>
          <p>Diwa Ng Tarlac, San Vicente, Tarlac City</p>
        </a>
        <a
          className="contact-card"
          href="https://maps.google.com/?q=Romulo+Blvd,+Tarlac+City,+Tarlac"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-card__icon" aria-hidden="true">📍</span>
          <h3>Visit</h3>
          <p>FHMQ+256, Romulo Blvd, Tarlac City, Tarlac</p>
        </a>
      </div>
    </section>
  )
}
