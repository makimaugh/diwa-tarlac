import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { paintings, CATEGORIES } from '../data/paintings.js'
import CategoryFilter from './CategoryFilter.jsx'
import PaintingModal from './PaintingModal.jsx'

export default function Paintings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('category')
  const active = CATEGORIES.includes(requested) ? requested : 'All'
  const [selected, setSelected] = useState(null)

  const counts = useMemo(() => {
    const c = { All: paintings.length }
    for (const cat of CATEGORIES) {
      if (cat === 'All') continue
      c[cat] = paintings.filter((p) => p.genre === cat).length
    }
    return c
  }, [])

  const visible = useMemo(() => {
    if (active === 'All') return paintings
    return paintings.filter((p) => p.genre === active)
  }, [active])

  const selectCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <>
      <section className="paintings-hero">
        <img src="/images/hero-bg.jpg" alt="" className="paintings-hero__bg" />
        <div className="paintings-hero__overlay" />
        <div className="paintings-hero__content">
          <p className="eyebrow">The Collection</p>
          <h1>ART GALLERY</h1>
          <p>Portraits &middot; Landscapes &middot; Abstract &middot; Historical</p>
        </div>
      </section>

      <section className="page-section paintings-page">
        <div className="section-heading">
          <p className="eyebrow">Filter by</p>
          <h2>Category</h2>
        </div>

        <CategoryFilter
          categories={CATEGORIES}
          active={active}
          onSelect={selectCategory}
          counts={counts}
        />

        <p className="results-count">
          Showing {visible.length} {visible.length === 1 ? 'painting' : 'paintings'}
          {active !== 'All' ? ` in “${active}”` : ''}
        </p>

        <div className="gallery-grid">
          {visible.map((p) => (
            <button
              key={p.id}
              className="gallery-card"
              onClick={() => setSelected(p)}
            >
              <div className="gallery-card__image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="tag tag--floating">{p.genre}</span>
              </div>
              <div className="gallery-card__info">
                <h4>{p.title}</h4>
                <p className="gallery-card__artist">
                  {p.artist} ({p.location} | {p.year})
                </p>
                <p className="gallery-card__medium">{p.medium}</p>
              </div>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="empty-state">No paintings found in this category yet.</p>
        )}
      </section>

      <PaintingModal painting={selected} onClose={() => setSelected(null)} />
    </>
  )
}
