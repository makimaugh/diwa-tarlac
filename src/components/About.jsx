import { team } from '../data/paintings.js'

export default function About() {
  return (
    <section className="page-section about-page">
      <div className="section-heading">
        <p className="eyebrow">Our Story</p>
        <h1>About Us</h1>
      </div>
      <p className="about-lede">
        "The Art Paintings of Diwa ng Tarlac" is an online art portfolio showcasing
        a diverse collection of paintings, including portraits, landscapes,
        abstracts, and historical pieces. We aim to reach artists, art enthusiasts,
        collectors, and local residents alike. The website features detailed
        presentations of each artwork, including title, artist, date, genre, and
        materials used — a virtual gallery that lets artists present their best
        works in a curated manner, essential for attracting potential buyers and
        collaborators.
      </p>

      <div className="section-heading" style={{ marginTop: '3rem' }}>
        <p className="eyebrow">Meet the</p>
        <h2>Team</h2>
      </div>
      <div className="team-grid">
        {team.map((m) => (
          <div className="team-card" key={m.name}>
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <span>{m.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
