function TopNav() {
   return(
    <nav
    className="navbar navbar-dark navbar-expand-xl bg-dark navbar-smala"
    style={{ height: 30, color: "#fff", fontWeight: 100, fontSize: 11 }}
  >
    <a className="navbar-brand" href="/">
      RScom Networking LTD.
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample06"
      aria-controls="navbarsExample06"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample06 ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link disabled" href="/">
            Login{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Support
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-link">Cross</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Reference</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Sustainability</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Where to Buy </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">GB | EN</div>
        </li>
      </ul>
    </div>
  </nav>
   )

}

export default TopNav;