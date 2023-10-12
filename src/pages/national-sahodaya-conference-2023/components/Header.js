import React from 'react'
import logo from "static/images/sahodaya-logo.png";

export const Header = () => {
   return (
      <>
         <header className="header-light fixed-top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 navbar-header">
                     <a className="navbar-brand" exact href="/">
                        <img src={logo} alt="true" className="logo-text-dark" />
                        <img src={logo} alt="true" className="logo-text-light" />
                     </a>
                  </div>
                  <div className="col-lg-6 navbar-wrapper justify-content-center">
                     <nav id="navigation" className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                           <ul className="nav navbar-nav">

                              <li className="nav-item">
                                 <a className="nav-link page-scroll" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link page-scroll" href="#venue">Venue</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link page-scroll" href="#hotels">Hotels</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link page-scroll" href="#nsc-theme">NSC Theme</a>
                              </li>

                              {/* <li className="nav-item">
                              <a className="nav-link page-scroll" href="#speakers">Speakers</a>
                           </li> */}
                              <li className="nav-item">
                                 <a className="nav-link page-scroll" href="#schedule">Schedule</a>
                              </li>
                              {/* <li className="nav-item">
                              <a className="nav-link page-scroll" href="https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/viewform?edit_requested=true">Register</a>
                           </li> */}
                           </ul>
                        </div>
                     </nav>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block pe-lg-0">
                     <div className="align-items-center d-flex h-100 justify-content-end">
                        <a href="https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/edit" className="btn btn-extra-small btn-orange page-scroll" target='_blank'>Register Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>

   )
}
