
import * as React from "react"
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import { FiActivity } from "react-icons/fi";
import MarqueeStyles from "../styles/MarqueeStyles";

export default function Marquee ({text}) {
    console.log(text)
  return (

    <MarqueeStyles>
     {/* <div className="marquee">
        <div>
            <span className="first">You spin me right round, baby. Like a record, baby.</span>
            <span className="second">You spin me right round, baby. Like a record, baby.</span>
        </div>
    </div> */}

    {/* <div className="cssmarquee">
        <h1 className="first">Leasing 2024. </h1>
        <h1 className="second">Leasing 2024. </h1>
        <h1 className="third">Leasing 2024. </h1>
    </div> */}

    {/* <div className="marquee">
        <div className="marquee__inner" aria-hidden="true">
            <span className="first">Leasing 2024. </span>
            <span className="second">Leasing 2024. </span>
            <span className="third">Leasing 2024. </span>
            <span className="fouth">Leasing 2024. </span>
        </div>
      
    </div> */}

<div class="marquee marquee--hover-pause">
    <ul class="marquee__content">
      <li className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
      <li className="scroll-text">Coming 2024.</li>
      <li className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
      <li className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
      <li className="scroll-text">Coming 2024.</li>
      <li className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
      {/* <li className="h2 scroll-text">5</li>
      <li className="h2 scroll-text">6</li> */}
    </ul>

    <ul aria-hidden="true" class="marquee__content">
    <li className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
      <li className="scroll-text">Coming 2024.</li>
      <li className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
      <li className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
      <li className="scroll-text">Coming 2024.</li>
      <li className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
      {/* <li className="h2 scroll-text">5</li>
      <li className="h2 scroll-text">6</li> */}
    </ul>
  </div>
    </MarqueeStyles>

  )
}