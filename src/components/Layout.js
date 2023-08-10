import React from 'react';
// import GlobalStyles from '../styles/GlobalStyles';
import Header from './Navigation';
import Footer from './Footer';
import '../css/reset.css'
import '../css/styles.css';
import GlobalStyles from '../styles/GlobalStyles';

function Layout({ children }) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Header />
      {/* <div className="smooth-scroll-content"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Layout;

