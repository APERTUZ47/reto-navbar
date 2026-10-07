function Navbar({ reverse = false }) {
  return (
    <nav className={reverse ? "navbar reverse" : "navbar"}>
      <div className="navbar-brand">Navbar</div>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
