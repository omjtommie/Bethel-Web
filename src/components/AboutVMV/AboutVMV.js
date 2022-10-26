import React, { Component } from "react";
import "./AboutVMV.scss";

class AboutVMV extends Component {
  render() {
    return <div className="aboutvmvPage">
        <div className="aboutvmv">
            <h1>Mission, Vision & Values</h1>
            <br></br>
            <p> It does not matter who we are or what we do, there are fundamentals beliefs
                that guide our objectives and decisions.
                <br></br> 
                These beliefs help in strengthening our focus 
                and encourage unity among us as an organization. Our vision, mission and core values serve to inspire 
                how we interact, create and deliver on our promise to our patients and ourselves.
            </p>
        </div>
        <div className="box-container">
            <div className="box">
                <h3> Vision </h3>
                <p> To alter the landscape of healthcare practice in our communities by partnering
                    with experts and providing high quality healthcare services.
                </p>
            </div>
            <div className="box">
                <h3> Mission </h3>
                <p> To provide world standard healthcare services in Nigeria. </p>
            </div>
            <div className="box">
                <h3> Values </h3>
                <p> Integrity, Care, Quality, Compassion </p>
            </div>
          
        </div>
    </div>;
  }
}

export default AboutVMV;
