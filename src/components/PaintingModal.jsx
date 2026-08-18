import { useEffect } from 'react'

export default function PaintingModal({ painting, onClose }) {
  useEffect(() => {
    if (!painting) return // no modal open — don't touch page scroll at all

    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [painting, onClose])

  if (!painting) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="modal-box__image">
          <img src={painting.image} alt={painting.title} />
        </div>
        <div className="modal-box__info">
          <span className="tag">{painting.genre}</span>
          <h3>{painting.title}</h3>
          <p className="modal-box__artist">
            {painting.artist} &middot; {painting.location} &middot; {painting.year}
          </p>
          <p className="modal-box__medium">{painting.medium}</p>
        </div>
      </div>
    </div>
  )
}
