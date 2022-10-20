import React, { Component } from 'react'
import './HeroImg.scss'

class HeroImg extends Component {
    render() {
        return (
            <div className='HeroImgPage'>
                <div className='hero-img'>
                    <div className='heading'>
                        <h1>{this.props.heading}</h1>
                        <p> {this.props.text} </p>
                        <p> {this.props.secondtext} </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default HeroImg;















// import "./hero.scss";
// import img from "../../Assets/images/homepage.jpg";

// const Hero = () => {
//   return (
//     <div className="heroPage">
//       <img src={img} alt={img} className="hero-background" />

//       <div className="hero-container">
//         <div className="hero-content">
//           <span>
//             Welcome to <br></br>Owolola Bethel Hospital
//           </span>
//         </div>
//         <div className="hero-subcontent">
//           <span>
//             {" "}
//             We deliver premier and innovative healthcare service. <br></br>
//             <br></br>
//             Adhering to the very highest standards of quality care and clinical
//             excellence.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
