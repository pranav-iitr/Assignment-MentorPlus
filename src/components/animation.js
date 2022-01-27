import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/animation.css";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
function Animation() {
  const [photoArray, setphotoArray] = useState(true);

  return (
    <div>
      {useEffect(() => {
        async function getData() {
          if (photoArray == true) {
            const res = await axios.get(
              "https://bolkar-club.s3.ap-south-1.amazonaws.com/task/tutors.json"
            );

            console.log(res.data);
            setphotoArray(res.data);
          }
        }
        getData();
      })}
      <div className="circle_1">
        <div className="flex_verticle">
          <img className="photo_circle_1" src={photoArray[0]} />
        </div>
      </div>
     
      <div className="line_1"></div>
      <div className="circle_2">
        <div className="flex_verticle">
          <img className="photo_circle_2" src={photoArray[1]} />
        </div>
      </div>
      <div className="line_2"></div>
      <div className="circle_3">
        <div className="flex_verticle">
          <img className="photo_circle_3" src={photoArray[3]} />
        </div>
      </div>
      
      <div className="line_3"></div>
      <img className="photo_4" src={photoArray[2]} />
      <div className="circle_4">
        <div className="flex_verticle">
          <img className="photo_circle_4" src={photoArray[4]} />
        </div>
      </div>
      <div className="line_4"></div>
      <ReactCSSTransitionGroup transitionName = "example"
      transitionAppear = {true} transitionAppearTimeout = {5000}
      transitionEnter = {false} transitionLeave = {false}>
      <div className="circle_5">
        <div className="flex_verticle">
          <img className="photo_circle_5" src={photoArray[5]} />
        </div>
      </div>
      
      <div className="line_5"></div>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName = "example1"
      transitionAppear = {true} transitionAppearTimeout = {10000}
      transitionEnter = {false} transitionLeave = {false}>
      <div className="circle_6">
        <div className="flex_verticle">
          <img className="photo_circle_6" src={photoArray[7]} />
        </div>
      </div>
      <div className="line_6"></div>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName = "example2"
      transitionAppear = {true} transitionAppearTimeout = {10000}
      transitionEnter = {false} transitionLeave = {false}>
      <div className="circle_7">
        <div className="flex_verticle">
          <img className="photo_circle_7" src={photoArray[8]} />
        </div>
      </div>
      <div className="line_7"></div>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName = "example3"
      transitionAppear = {true} transitionAppearTimeout = {20000}
      transitionEnter = {false} transitionLeave = {false}>
      <img className="photo_7" src={photoArray[6]} />
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName = "example"
      transitionAppear = {true} transitionAppearTimeout = {10000}
      transitionEnter = {false} transitionLeave = {false}>
      <div className="line_8"></div>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName = "example3"
      transitionAppear = {true} transitionAppearTimeout = {20000}
      transitionEnter = {false} transitionLeave = {false}>
      <div className="line_9"></div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Animation;
