import * as React from "react"
import { Link } from 'gatsby'
import '../css/reset.css'
import '../css/styles.css'
export default function Home() {
  return (
    <div className="background-image-container">
      <div class='button'>
        <button>Click Me</button>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
        </svg>
      </div>
    </div>
  )
}

// import * as React from 'react'


// import logoGif from '../images/recess-chrome-v2-optimized.gif'
// import backgroundImage from '../images/background.jpg'
// import '../css/font.css'

// import '../css/work-menu.css'
// import { SEO } from '../components/seo'

// import logo from '../images/solana-central-park-logo.svg'

// const Home = () => {
//   return (

//     <div className="background-image-container">
//       {/* <img className="background-image" src={backgroundImage} alt="Background Image" /> */}
//       <div className="grid">
//         <div className="grid-item grid-item--width4 grid-item--1" />
//         <div className="grid-item grid-item--2 grid-item--width6">
//           <Link to="/" >
//             {/* <img className="logo" src={logo} alt="Logo" /> */}
//           </Link>
//         </div>
      
//         <div className="grid-item grid-item--3 grid-item--width6 " />
//         <div className="grid-item grid-item--4 grid-item--width24">Recess Studios is a full service marketing agency &amp; production studio based in New York, Los Angeles, &amp; Portland.</div>
//         <div className="grid-item grid-item--5 grid-item--width4 " />
//         <div className="grid-item grid-item--6 grid-item--width5">
//           {/* <Link to="/work" className="underline-link" title="Work">OUR WORK</Link> */}
//         </div>
//         <div className="grid-item grid-item--7 grid-item--width20 " />
//         <div className="grid-item grid-item--8 grid-item--width11">
//           FOR BUSINESS INQUIRIES
//           <br></br>
//           <a className="underline-link" href="mailto:321@recessworld.com" title="mailto:321@recessworld.com" target="_blank" rel="noreferrer noopener">321@RECESSWORLD.COM</a>
//           <br></br>
//           <br></br>
//           <Link to="/careers" className="underline-link">CAREER OPPORTUNITIES</Link>
//         </div>
//         <div className="grid-item grid-item-9 grid-item--width4 " />
//         <div className="grid-item grid-item--10 grid-item--width6">
//           <a className="underline-link" href="https://www.instagram.com/recess.studios/" target="_blank">@RECESS.STUDIOS</a>
//           <br></br>
//           <a className="underline-link" href="https://www.recess.shop" target="_blank">SHOP</a>
//         </div>
//         <div className="grid-item grid-item--11 grid-item--width10 " />
//       </div>
//     </div>
//   );
// }

// export default Home;

// export const Head = () => (
//   <SEO />
// )