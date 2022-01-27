import React , {useState } from "react";
import "../components/navbar.css";

function Navbar() {
  const [Workshop, setWorkshop] = useState(false);
  const [Program, setProgram] = useState(false);
  return (
    <>
   
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-items">
            <div>
              
              <pre> About </pre>
            </div>
          </div>

          <div
            className="navbar-items"
            onMouseLeave={() => {
              setWorkshop(false);
            }}
            onMouseEnter={() => {
              setWorkshop(true);
            }}
          >
            <div>
              <pre> Workshop </pre>
            </div>
          </div>

          <div
            className="navbar-items"
            onMouseLeave={() => {
              setProgram(false);
            }}
            onMouseEnter={() => {
              setProgram(true);
            }}
          >
            <div>
              <pre> Programs </pre>
            </div>
          </div>

          <div className="navbar-items">
            <div>
              <pre> Community </pre>
            </div>
          </div>

          <div className="navbar-items">
            <div>
              <pre> Login </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div
          onMouseLeave={() => {
            setWorkshop(false);
          }}
          onMouseEnter={() => {
            setWorkshop(true);
          }}
          className={Workshop ? "Workshops-active" : "Workshops-passive"}
        >
          <div className="list-element"> Workshop 1</div>
          <div className="list-element"> Workshop 2</div>
          <div className="list-element"> Workshop 3</div>
        </div>
      </div>
      {/* <div className="flex-container">
        <div
          onMouseLeave={() => {
            setProgram(false);
          }}
          onMouseEnter={() => {
            setProgram(true);
          }}
          className={Program ? "prog-active" : "prog-passive"}
        >
          <div className="list-element"> prog 1</div>
          <div className="list-element"> prog 2</div>
          <div className="list-element"> prog 3</div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
