import AboutHeroImg from "../../components/AboutHeroImg/AboutHeroImg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./aboutPage.scss";
import img from "../../Assets/images/pregnantwoman.jpg";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <AboutHeroImg heading="About Us" />
      <div className="about">
        <div className="left">
          <h1> We care, God heals. </h1>
          <p>
            {" "}
            lola Bethel Hospital is a private medical center located in Lagos, Nigeria. 
            We are the healthcare facility of choice for Lagos communities and its surroundings.
            <br></br>
            <br></br>
            We are made up of like minded health care workers who have a common goal, 
            delivering quality healthcare in Nigeria
            <br></br>
            <br></br>
            We are also accredited by NHIS and we have a range of HMO partners.
          </p>
        </div>
        <div className="right">
            <div className="img-container">
                   <div className="image-stack">
                   <img src={img} alt={img} className="image"/>
                   </div>
            </div>
        </div>
      </div>

      <Footer />
      {/* <img src={img} alt={img} /> */}
    </div>
  );
};

export default AboutPage;
