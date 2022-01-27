import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Gradaint_button from "./components/gradaint_button";
import Animation from "./components/animation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="button_top"><Gradaint_button text="join as mentors" /></div>
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
    </div>
  );
}

export default App;
