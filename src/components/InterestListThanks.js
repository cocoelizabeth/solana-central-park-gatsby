import * as React from "react"
import { Link } from 'gatsby'
// import '../css/reset.css'
// import '../css/styles.css'
import InterestListThanksStyles from "../styles/InterestListThanksStyles"
export default function InterestListThanks() {
  return (

    <InterestListThanksStyles>
        <section>
        <div>Thanks</div>
        <Link to="/">Return to Homepage</Link>
        </section>
    </InterestListThanksStyles>

  )
}