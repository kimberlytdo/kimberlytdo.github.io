import React from "react";
import { Link } from 'react-router-dom';
import Return from './Return.js';
import bird from './img/graphic_design/horizons/bird.svg';
import bunny from './img/graphic_design/horizons/bunny.svg';
import banner from './img/graphic_design/horizons/banner.png';
import otter from './img/graphic_design/horizons/otter.svg';
import mouse from './img/graphic_design/horizons/mouse.svg';
import propic from './img/propic.png';
 
function Horizons(props) {
  return (
    <div id="root">
    <header>
      <a className="skip-link" href='#about'>Skip to content</a>
    </header>
      <Return></Return>
      <div className="content">
        <div className="page_block"></div>
        <div className="title" id="about"><h1>Horizons: An Arts and Tech Make-a-thon</h1></div>
        <div className="test">
          {/* <img className="banner" src={banner} alt="Horizons banner of a cartoon retro computer and a small butterfly resting on it"/>
          <p>In Spring 2020, I helped to design the marketing and branding for Horizons, an arts and tech make-a-thon. Our team chose an art style inspired by wood block prints with imagery inspired by woodland animals and retro technology.</p>
          <img className="otter" id="otter" src={otter} alt="A cartoon otter listening to music on headphones"/>
          <img className="bunny" src={bunny} alt="A cartoon rabbit rests beside a large rabbit-eared televison"/>
          <img width="250" className="bird" src={bird} alt="A cartoon small bird perched on a branch holds a retro camera in its beak"/>     
          <img className="mouse" src={mouse} alt="A cartoon mouse runs on a turntable"/>              */}
        </div>
      </div>
    {/* <Return></Return> */}
    </div>
  )
}
 
export default Horizons;