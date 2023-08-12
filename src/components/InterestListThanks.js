import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../css/reset.css'
import '../css/styles.css'
import InterestListThanksStyles from "../styles/InterestListThanksStyles"
export default function InterestListThanks({textContent}) {

  return (

    <InterestListThanksStyles>
        <section>
        {textContent}
        <Link to="/" className="cta">Return to Homepage</Link>
        </section>
    </InterestListThanksStyles>

  )
}
