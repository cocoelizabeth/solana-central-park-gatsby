import { graphql, useStaticQuery, Link } from "gatsby"
import React from 'react';
import FooterStyles from "../styles/FooterStyles";

const Footer = () => {


  return (
    <FooterStyles>
        
        <section className="">


          <div className="footer-container">
          <div className="h2">Stay tuned for more updates!</div>
            <div className="footer-contact">
     
     
            <div className="address">
            <div className="title">SOLANA CENTRAL PARK</div>
                <Link to="https://goo.gl/maps/9GafJcQn2cn1KYB47">
                  <p>8355 E 32nd Ave</p>
                  <p>Denver, Colorado 80238</p>
                </Link> 

            </div>
            <a href="mailto:info@solanacentralpark.com">info@SolanaCentralPark.com</a>
            </div>
            <div className="team">
                <div className="title">Team</div>

           
                <div className="team-items-container">
                  <div className="team-item">
                      <a href="https://reylenn.com/reylenn-properties">Reylenn Properties</a>
                  Developer
                  </div>
          
                  <div className="team-item">
                      <a href="https://reylenn.com/reylenn-construction">Reylenn Construction</a>
                    General Contractor
                    </div>

                    <div className="team-item">
                      <a href="https://www.woodpartners.com/property-management/">Wood Residential</a>
                      Property Management 
                    </div>
                  </div>

                  </div>
                  </div>

                  <div className="copyright">
                    <svg fill="#F7F6F6" fillRule="evenodd" role="img" alt="Equal Housing Logo" aria-labelledby="svgeho" focusable="false" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1em" height=".884em" viewBox="0 0 15.2 10.72">
                        <title id="svgeho">Equal housing opportunity</title>
                        <defs><style>.cls-1</style></defs>
                        <path class="cls-1" d="M7.54,0,0,3.72V5.46H.84V10.7H14.19V5.46h1V3.72Zm5,9.12H2.48V4.34l5.06-2.6,5,2.6Z"></path>
                        <polygon class="cls-1" points="9.85 6.02 5.18 6.02 5.18 4.34 9.85 4.34 9.85 6.02 9.85 6.02"></polygon>
                        <polygon class="cls-1" points="9.85 8.44 5.18 8.44 5.18 6.76 9.85 6.76 9.85 8.44 9.85 8.44"></polygon>
                    </svg>

                    <span className="copyright-text"> © Reylenn Properties LLC {new Date().getFullYear()}. All rights reserved.</span>
                  </div>
                {/* <div className="team-item">
                    <a href="https://reylenn.com/reylenn-properties">Reylenn Properties</a>
                  | Developer
                </div>
        
                <div className="team-item">
                    <a href="https://reylenn.com/reylenn-construction">Reylenn Construction</a>
                  | General Contractor
                  </div>

                  <div className="team-item">
                    <a href="https://reylenn.com/reylenn-properties">Wood Residential</a>
                  | Property Management 
                  </div> */}
          
        </section>

    </FooterStyles>  
    )
}; 

export default Footer;

