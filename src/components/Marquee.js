
import * as React from "react"
import { Link } from 'gatsby';
import MarqueeStyles from "../styles/MarqueeStyles";

export default function Marquee ({text}) {
 
  return (

    <MarqueeStyles>

  <div className="marquee marquee--hover-pause">
      <ul className="marquee__content">
        <li key="1" className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
        <li key="2"className="scroll-text">Coming 2024.</li>
        <li key="3"className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
        <li key="4"className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
        <li key="5"className="scroll-text">Coming 2024.</li>
        <li key="6"className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
        {/* <li className="h2 scroll-text">5</li>
        <li className="h2 scroll-text">6</li> */}
      </ul>

      <ul aria-hidden="true" className="marquee__content">
        <li key="1" className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
        <li key="2"className="scroll-text">Coming 2024.</li>
        <li key="3"className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
        <li key="4"className="scroll-text">Studio, 1 & 2 Bedroom Apartments.</li>
        <li key="5"className="scroll-text">Coming 2024.</li>
        <li key="6"className="scroll-text"><Link to="/interest-list">Join the Priority List</Link><span className="arrow">→</span></li>
        {/* <li className="h2 scroll-text">5</li>
        <li className="h2 scroll-text">6</li> */}
      </ul>
    </div>
    </MarqueeStyles>

  )
}