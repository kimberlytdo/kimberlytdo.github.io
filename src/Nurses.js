import React from "react";
import { Link } from 'react-router-dom';
import Return from './Return.js';
 
function Nurses(props) {
  return (
    <div id="root">
      <Return></Return>
      <div className="content">
        <div className="page_block"></div>
        <div className="title" id="about"><h1>Identifying Nurse Contributions in Medical Making</h1></div>
        <div className="test">
          <p>I am Kimberly, a fourth year computer science major at Georgia Tech, where I am a member of the <a>Ubiquitous Computing Lab</a>.</p>
        </div>
      </div>
    {/* <Return></Return> */}
    </div>
  )
}
 
export default Nurses;