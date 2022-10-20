import "./homepage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/HeroImg";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar/>
      <Hero heading='Welcome to Owolola Bethel Hospital' 
      text=' We deliver premier and innovative healthcare service.'
      secondtext='Adhering to the very highest standards of quality care and clinical excellence.'/>
      <Footer/>
    </div>
   
  );
};

export default HomePage;
