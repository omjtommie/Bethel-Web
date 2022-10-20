import "./footer.scss";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerPage">
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaSearchLocation
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <div>
                <p>2, Semiu Tiamiyu Street, Hilltop Estate.</p>
                <h4>Pipeline, Aboru, Lagos.</h4>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />{" "}
                08188196055
              </h4>
            </div>
            <div className="mail">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />{" "}
                xyz@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4> Owolola Bethel Hospital <br></br>
            <br></br>
             Opens 24/7</h4>
            <p>
              {" "}
              We Care, God Heals.
            </p>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaWhatsapp
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
