import React from "react";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";

const Services = (props) => {
  return (
    <>
      <div className="service">
        <h1>OUR FACILITIES</h1>

        <div className="flexbox">
          <div className="box">
            <img src={image1} />
            <h1>Certification</h1>
            <p>
              {" "}
              personnel, but also helped a big segment of population residing in
              the vicinity of PAF bases to avail the facility of educational
              environment of Fazaia chain
            </p>
          </div>
          <div className="box">
            <img src={image2} />
            <h1>Connections</h1>
            <p>
              {" "}
              personnel, but also helped a big segment of population residing in
              the vicinity of PAF bases to avail the facility of educational
              environment of Fazaia chain
            </p>
          </div>
          <div className="box">
            <img src={image3} />
            <h1>Libraries</h1>
            <p>
              {" "}
              personnel, but also helped a big segment of population residing in
              the vicinity of PAF bases to avail the facility of educational
              environment of Fazaia chain
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
