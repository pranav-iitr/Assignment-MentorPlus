import React from 'react';
import "../components/gradaint_button.css"



function Gradaint_button({text,w=240,h=30}) {
  return( <div style={{width : `${w}px`,height : `${h}px`}} className='gradaint-button-container'>
    <div className="gradaint-button-text">{text}</div>
  </div>);
}

export default Gradaint_button;
