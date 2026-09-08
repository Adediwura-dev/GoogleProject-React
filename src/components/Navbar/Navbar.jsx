import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="blue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="blue">g</span>
        <span className="green">l</span>
        <span className="red">e</span>
      </div>

      <nav>
        <a className="active" href="#">
          About
        </a>

        <a href="#">Products</a>

        <a href="#">Company Info</a>

        <a href="#">News</a>
      </nav>
    </header>
  );
}

export default Navbar;