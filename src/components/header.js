import { graphql, useStaticQuery, Link } from "gatsby"

import React, { useState } from 'react';
import HeaderStyles from '../styles/HeaderStyles';
// import { MdClose } from 'react-icons/md';
// import clsx from 'clsx';
// import HeaderStyles from '../styles/HeaderStyles';
// import { menu } from '../constants/menu';
// import Logo from './Logo';
// import ActionButton from './buttons/ActionButton';
// import Button from './buttons/Button';

const Header = () => {
    const data = useStaticQuery (
        graphql`
            query  {
                allContentfulNavigationHeader {
                    edges {
                    node {
                        id
                        callToActionLink
                        callToActionText
                        logo {
                        file {
                            url
                            contentType
                            fileName
                        }
                        gatsbyImageData
                        title
                        url
                        }
                    }
                    }
                }
                }
        `
    );
    const headerData = data.allContentfulNavigationHeader.edges[0].node;
    const logoUrl = headerData.logo.url;
    const logoAltText = headerData.logo.title;
    const callToActionText = headerData.callToActionText;
    const callToActionLink = headerData.callToActionLink;



  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
                {/* <div className="test"></div> */}
        <section>
        <Link to="/" className="logo-container"><img className="logo" src={logoUrl}></img></Link>

        <div className='button'>
        <Link to={callToActionLink}><button>{callToActionText}</button></Link>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
        </svg>
        </div>
        </section>

    </HeaderStyles>  
    )
}; 

export default Header;

