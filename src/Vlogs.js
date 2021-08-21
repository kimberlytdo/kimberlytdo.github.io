import React from "react";
import { Link } from 'react-router-dom';
import Return from './Return.js';
import bird from './img/graphic_design/horizons/bird.svg';
import pic from './img/Ye-Guo.png';

function Vlogs(props) {
  return (
    <div id="root">
      <Return></Return>
      <div className="content">
        <div className="page_block"></div>
        <div className="title" id="about"><h1>Understanding the Motivations of Chronic Illness Vlog Watchers</h1></div>
        <div className="test">
          <p>I am Kimberly, a fourth year computer science major at Georgia Tech, where I am a member of the <a>Ubiquitous Computing Lab</a>.</p>
          <img height="50" className="bird" src={bird} alt="A cartoon small bird perched on a branch holds a retro camera in its beak"/>
          <img height="50" className="asdf" src={pic} alt="A fdfdsfd cartoon small bird perched on a branch holds a retro camera in its beak"/>
        </div>
      </div>
     <Return></Return>
    </div>
  )
}
 
export default Vlogs;