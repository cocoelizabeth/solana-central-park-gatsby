import { graphql, useStaticQuery, Link } from "gatsby"
import React from 'react';
import FooterStyles from "../styles/FooterStyles";

const Footer = () => {


  return (
    <FooterStyles>
        
        <section className="">
            <div className="h2">Stay tuned for more updates!</div>
            <div className="address">
                <div className="title">SOLANA CENTRAL PARK</div>
                <p>8355 E 32nd Ave</p>
                <p>Denver, Colorado 80238</p>
            </div>
            <a href="mailto:info@solanacentralpark.com">info@SolanaCentralPark.com</a>
            <div className="team">
                <div className="title">Team</div>
                <div className="team-item">
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
                  </div>
            </div>
        </section>

    </FooterStyles>  
    )
}; 

export default Footer;

