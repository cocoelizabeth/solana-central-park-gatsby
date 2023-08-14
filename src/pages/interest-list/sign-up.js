import * as React from "react"
// import '../css/reset.css'
// import '../css/styles.css'
// import InterestListForm from "../../components/InterestListForm"
import PriorityListForm from "../../components/PriorityListForm"
// import ApartmentInterestForm from "../../components/ApartmentInterestForm"

export default function PriorityList() {
  return (
    // <ApartmentInterestForm />
    <PriorityListForm />

  )
}


export function Head() {
  return (
    <>
    <title>Interest List Sign Up | Solana Central Park Apartments</title>
    <meta name="description" content="Be among the first to experience the new standard in Denver living. Sign up for our interest list today and receive exclusive updates and leasing opportunities." />
    </>
  )
}
