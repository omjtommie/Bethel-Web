import "./homepage.scss";
import img from "../../Assets/images/homepage-bg.jpg";

;

const HomePage = () => {
  return (
  
    <div className="homePage">
      <div className="home text-center text-white">
        <div className="container grid">
          <div className="home-left">
            <h1>Your most trusted <br/> <span>health partner<span/></span></h1>
            <p className="lead">the best match services for you.</p>
            <p className="text text-md">hsfj ksfjbhff jkffs kfjhf jkfh</p>
          </div>
          <div className="home-right">
          <img className="home" src={img} alt={img} />
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default HomePage;
