import React from 'react'
import Header from '../components/Header'

import '../index.css'
import Footer from '../components/Footer';

const Layout = (props) => {
  return(
    <React.Fragment>
      <Header />

      <main className="main-content">
      {props.children}
      </main>
      <Footer />
    </React.Fragment>
    
  );
}

export default Layout;