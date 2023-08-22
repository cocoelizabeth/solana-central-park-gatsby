import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../css/reset.css'
import '../css/styles.css'
import InterestListThanksStyles from "../styles/InterestListThanksStyles"
import Image from "./Image"
export default function InterestListThanks({textContent, thankYouGraphic, signatureGraphic}) {

  return (

    <InterestListThanksStyles>
        <section>
        <Image file={thankYouGraphic.file} svg={thankYouGraphic.svg} alt={thankYouGraphic.title} cssClass="thank-you-graphic"/>
       <div className="text-content">
          {textContent}
        </div> 
        <Image file={signatureGraphic.file} svg={signatureGraphic.svg} alt={signatureGraphic.title} cssClass="signature-graphic"/>
        <Link to="/" className="cta">Return to Homepage</Link>

        </section>
    </InterestListThanksStyles>

  )
}
