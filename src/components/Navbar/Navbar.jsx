import "./navbar.scss";
import img from "../../Assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbarPage">
      <header>
        <img className="logo" src={img} alt={img} />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="serve">Services</a>
            </li>
            <li>
              <a href="home">About Us</a>
            </li>
            <li>
              <a href="com">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
