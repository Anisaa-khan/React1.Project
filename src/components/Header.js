import React from "react";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="Navigation">
          <h1 className="logo">
            FIC<span>.</span>
          </h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Info</a>
            </li>
            <li>
              <a href="/">Admissions</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </div>

        <div className="heading">
          <h1>
            {" "}
            What <br />
            Are You <br />
            Waiting For?
          </h1>
          <p>Give your future a boost at FIC Schools/Colleges</p>
          <button type="button" className="btn btn-primary mx-1" id="btn">
            {" "}
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
