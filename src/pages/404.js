import * as React from "react"
import { Link } from 'gatsby'
// import '../css/reset.css'
// import '../css/styles.css'
// import InterestListThanks from "../../components/InterestListThanks"
export default function NotFound() {
  return (
    <section>
          <h1>404: Page Not Found</h1>
          <Link to="/"><h2>Go Back to the Homepage</h2></Link>
    </section>

  )
}