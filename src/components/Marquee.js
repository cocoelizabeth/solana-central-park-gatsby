
import * as React from "react"
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import { FiActivity } from "react-icons/fi";
import MarqueeStyles from "../styles/MarqueeStyles";

export default function Marquee ({text}) {
 
  return (

    <MarqueeStyles>

  <div className="marquee marquee--hover-pause">
      <ul className="marquee__content">
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