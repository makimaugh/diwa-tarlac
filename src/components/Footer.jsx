import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <h2>The Art Gallery of Diwa ng Tarlac</h2>
        <p>A curated online showcase of paintings by local artists of Tarlac.</p>
      </div>

      <div className="site-footer__grid">
        <div>
          <h4>Visit Us</h4>
          <p>FHMQ+256, Romulo Blvd,</p>
          <p>Tarlac City, Tarlac</p>
        </div>
        <div>
          <h4>Pages</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/paintings">Paintings</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
        <div>
          <h4>Categories</h4>
          <p><Link to="/paintings?category=Portrait">Portrait</Link></p>
          <p><Link to="/paintings?category=Landscape">Landscape</Link></p>
          <p><Link to="/paintings?category=Abstract">Abstract</Link></p>
          <p><Link to="/paintings?category=Historical">Historical</Link></p>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <p>Diwa Ng Tarlac, San Vicente, Tarlac City</p>
          <p><a href="mailto:Diwangtarlac@gmail.com">Diwangtarlac@gmail.com</a></p>
        </div>
      </div>

      <div className="site-footer__bottom">
        © {year} Pancho · Quitalig · Gamundoy · Calma · Velasco
      </div>
    </footer>
  )
}
