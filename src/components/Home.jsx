import { Link } from 'react-router-dom'
import { paintings, CATEGORIES } from '../data/paintings.js'

const featured = paintings.filter((p) => [1, 6, 9, 14].includes(p.id))

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img src="/images/diwaHome.jpg" alt="Diwa ng Tarlac building" />
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Welcome to</p>
          <h1>The Art Paintings of Diwa ng Tarlac</h1>
          <p>
            Explore a rich and vibrant collection that showcases the heritage and
            talent of local artists. Our gallery is a hub for art lovers and a
            testament to the creative spirit of Tarlac.
          </p>
          <div className="hero__actions">
            <Link to="/paintings" className="btn btn--primary">View the Gallery</Link>
            <Link to="/about" className="btn btn--ghost">About the Project</Link>
          </div>
        </div>
      </section>

      <section className="categories-strip">
        <div className="section-heading">
          <p className="eyebrow">Browse by</p>
          <h2>Category</h2>
        </div>
        <div className="category-cards">
          {CATEGORIES.filter((c) => c !== 'All').map((cat) => {
            const example = paintings.find((p) => p.genre === cat)
            return (
              <Link
                key={cat}
                to={`/paintings?category=${encodeURIComponent(cat)}`}
                className="category-card"
              >
                <img src={example?.image} alt={cat} />
                <div className="category-card__label">
                  <span>{cat}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <p className="eyebrow">A closer look</p>
          <h2>Featured Works</h2>
        </div>
        <div className="featured-grid">
          {featured.map((p) => (
            <Link to="/paintings" key={p.id} className="featured-card">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="featured-card__info">
                <h3>{p.title}</h3>
                <p>{p.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
