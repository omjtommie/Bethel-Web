import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import ServicesHeroImg from "../../components/ServicesHeroImg/ServicesHeroImg";
import "./servicesPage.scss";

const ServicesPage = () => {
    return (
        <div className="servicesPage">
      <Navbar />
      <ServicesHeroImg heading="Our Services"/>
      <ServicesCards />
      <Footer />
     </div>
    );
  };
  
  export default ServicesPage;