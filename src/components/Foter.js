import React from "react";

const Foter = () => {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-5 mx-5 my-4 text-white" id="foot">
            <h3>About Fazaia</h3>
            <p>
              Fazaia Intermediate College Islamabad is one of the Institutions
              of Fazaia chain of schools and colleges established in the private
              sector. It envisions provision of quality education to students,
              commensurate with national aspirations and present day educational
              requirements in an atmosphere conducive to their healthy mental
              and physical growth. The college is affiliated with Federal Board
              of Intermediate and Secondary Education Islamabad for the board
              exams.{" "}
            </p>
          </div>
          <div className="col-2  mx-5 my-4 text-white" id="foot">
            <h3>Important Links</h3>
            <ul>
              <li>* FAQs </li>
              <li>* Careers</li>
              <li>* Alumni</li>
              <li>* E-Library</li>
            </ul>
          </div>
          <div className="col-2 text-white mx-6 my-4" id="foot" >
            <h3>Resources</h3>
            <ul>
              <li>* Contact us</li>
              <li>* Alumni Registration</li>
            </ul>
          </div>
        </div>
        <hr/>
        <span id="copywrite">copywrite @ 2023 Fazaia School.All Rights Reserved. </span>
      </div>
    </>
  );
};

export default Foter;
