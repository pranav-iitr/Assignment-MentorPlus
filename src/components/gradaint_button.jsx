import React from 'react';
import "../components/gradaint_button.css"
function Gradaint_button({text}) {
  return( <div className='gradaint-button-container'>
    <div className="gradaint-button-text">{text}</div>
  </div>);
}

export default Gradaint_button;
