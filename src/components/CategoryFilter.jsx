export default function CategoryFilter({ categories, active, onSelect, counts }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter paintings by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`filter-pill ${active === cat ? 'is-active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
          <span className="filter-pill__count">{counts[cat]}</span>
        </button>
      ))}
    </div>
  )
}
