import ContactHeroImg from "../../components/ContactHeroImg/ContactHeroImg";
import Footer from "../../components/Footer/Footer"; 
import Navbar from "../../components/Navbar/Navbar";
import "./contactPage.scss";
import img from "../../Assets/images/maincontact.jpg";


const ContactPage = () => {
  return (
    <div className="contactPage">
      <Navbar />
      <ContactHeroImg heading="Contact Us" />
      <div className="about">
        <div className="left">
          <h1> Get In Touch</h1>
          <p>
            {" "}
            We would love to hear from you.
            <br></br>
            {/* <br></br> */}
            Your Care is Our Priority.
            <br></br>
            Our staff provides exceptional and compassionate care to our patients.
            
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

    
    
    </div>
  );
};

export default ContactPage;

