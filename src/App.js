import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Gradaint_button from "./components/gradaint_button";
import Animation from "./components/animation";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  return (
    <div className="App">
       { useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])  }
      <Navbar />
      {console.log(windowDimensions.height)}
      <div className="button_top"><Gradaint_button text={windowDimensions.width>900? "join as mentors":"menu"} /></div>
      <div className="Sub_container_1">
        <div><h1>Never Get Blank in job Interviwes</h1></div>
        <div className="header-2">
          <h2>
            Remove the nervousness in English Speaking, Enroll in this 3-day
            Free online Workshop on handling Interviwes, confidently
          </h2>
        </div>
        <div className="button_container_1">
         
          <Gradaint_button text="Explore Programs" />
        </div>
      </div>
      
      <img className="dots" src={require("../src/components/Union.png")} />
      
       <Animation/>
       <img className="dots1" src={require("../src/components/Union.png")} /> 
       <img className="dots2" src={require("../src/components/Union.png")} />
    </div>
  );
}

export default App;
