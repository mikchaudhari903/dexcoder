import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to add/remove class from body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    // Cleanup the class when the component is unmounted
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileMenuOpen]);

    // Effect to track scroll position
    useEffect(() => {
      const handleScroll = () => {
        // Set sticky if the user has scrolled down 100 pixels
        if (window.scrollY > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <header id="header" className={`header d-flex align-items-center p-4 ${isSticky ? 'sticky-top' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1 className="sitename">DexCoder</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/protfolio">
                  Portfolio
                </Link>
              </li>
              <li >
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>
            </ul>
            <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>
       

      </div>
    </header>
    </>
  );
};

export default Header;
