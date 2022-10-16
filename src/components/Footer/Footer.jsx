
import "./footer.scss";




const Footer = () => {
  return (
    <div className= "footerPage">
    <div className="footer">
      <ul className="list">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="home">Services</a>
        </li>
        <li>
          <a href="home">About Us</a>
        </li>
        <li>
          <a href="home">Contact</a>
        </li>
      </ul>

      <p className="copyright">
         OMJ @ 2022
      </p>
    </div>
    </div>
  );
};

export default Footer;
