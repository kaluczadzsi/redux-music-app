import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className="section-nav">
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">Redux Music App</h1>

          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default NavBar
