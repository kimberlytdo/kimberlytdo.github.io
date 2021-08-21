// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import './footer.css';
import propic from './img/propic.png';
// import bird from './img/graphic_design/horizons/bird.svg';
import Return from './Return.js'

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if  (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.paddingTop = "10px";
    document.getElementById("navigation").style.paddingBottom = "10px";
    document.getElementById("propic").style.width = "0px";
    document.getElementById("propic").style.height = "0px";
    document.getElementById("propic").style.marginBottom = "0px";
  } else {
    if (document.getElementById("navigation") != null) {
      document.getElementById("navigation").style.paddingTop = "2rem";
      document.getElementById("navigation").style.paddingBottom = "2rem";
    }
    if (document.getElementById("propic") != null) {
      document.getElementById("propic").style.width = "5rem";
      document.getElementById("propic").style.height = "5rem";
      document.getElementById("propic").style.marginBottom = "20px";
    }
  }
}

function Home(props) {
  return (
    <div id="root">
      <header>
        <a className="skip-link" href='#about'>Skip to content</a>
      </header>
      <div id="navigation" className="navigation"> 
        {/* <img src="C:\Users\Kimberly\Desktop\portfolio\src\propic.png" alt="Headshot of Kimberly Do"/>      */}
        <img className="propic" id="propic" src={propic} alt="Headshot"/>
        {/* <img height="50" className="bird" src={bird} alt="A cartoon small bird perched on a branch holds a retro camera in its beak"/>      */}
        <h1 id="name">Kimberly Do</h1>
        <div id="links">
          <span id="email">kimberlydo [at] gatech [dot] edu</span>
          <br/>
          <Link to="/" className="item">Home</Link>
          <span> / </span>
          <Link to="/research" className="item">Research</Link>
          {/* <Link to="/portfolio" className="item" class="header_link">Portfolio</Link> */}
          <span> / </span>
          <a href='https://drive.google.com/file/d/1g01nu9hq-LEhl6O57vcSubJIPSxYtuSp/view?usp=sharing' target='_blank' rel='noopener noreferrer'>CV</a>
        </div>
      </div>
      <div className="content">
        <div className="block"></div>
        <div className="title" id="about"><h1>About</h1></div>
        <div className="test">
          <p>I am Kimberly, a fourth year computer science major at Georgia Tech, where I am a member of the <a>Ubiquitous Computing Lab</a>.</p>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h1>Publications</h1>
        </div>
        <div className="test">
          <p>Using Diaries to Probe the Illness Experiences of Adolescent Patients and Parental Caregivers. Matthew K. Hong, Udaya Lakshmi, <b>Kimberly Do</b>, Sampath Prahalad, Thomas Olson, and Lauren Wilcox. Proceedings of the 38th Annual ACM Conference on Human Factors in Computing Systems (CHI 2020), Honolulu, HI, USA, 2020 (24.3% acceptance rate).</p><a>[Paper Link]</a>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="test">
          <p>Below are some selected projects from my academic research, student organization, freelancing, and personal work.</p>
          <h3>Ongoing Research</h3>
            <ul>
              <li><Link to="/vlogs">Understanding the Motivations of Chronic Illness Vlog Watchers</Link></li>
              <li><Link to="/unintendedconsequences">How Researchers Anticipate and Mitigate Unintended Consequences</Link></li>
              <li><Link to="/largescale">Surveying and Anticipating Unintended Consequences of Developmental Technology</Link></li>
            </ul>
          <h3>Past Research</h3>
            <ul>
              <li><Link to="/chronicillness">Probing the Illness Experiences of Adolescent Patients and Parental Caregivers</Link></li>
              <li><Link to="/nurses">Identifying Nurse Contributions in Medical Making</Link></li>
            </ul>
            <h3>Graphic Design [COMING SOON!]</h3>
            <ul>
              <li>Horizons: An Arts and Tech Make-a-thon</li>
              <li>Totally Awesome Hack at the Cafe</li>
              <li>CMU HCII Summer REU 2020 T-Shirt Design</li>
              <li>Lychee Jelly (<span lang="zh">荔枝椰果</span>)</li>
            </ul>
            {/* <h3>UX Design</h3>
            <ul>
              <li>Google Scholar Redesign [COMING SOON]</li>
            </ul> */}
        </div>
      </div>

    </div>
  )
}
 
export default Home;