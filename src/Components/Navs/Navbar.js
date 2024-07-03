import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"
// Sticky Navbar
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var navbar = document.querySelector('.sticky-top');
  var navLinks = document.querySelectorAll('.hide');
  var logo = document.querySelector('.Logo');
  
  if (scrollTop > 300) {
      navbar.classList.add('shadow-sm');
      navbar.style.top = '0px';
      
      navLinks.forEach(function(link) {
          link.classList.add('linkBt');
          link.style.color = '#000';
          link.addEventListener('mouseover', function() {
              this.style.color = '#F08233';
          });
          link.addEventListener('mouseout', function() {
              this.style.color = '#000';
          });
      });
      
// Set the minimum screen width threshold
var minWidthThreshold = 768; // Adjust this value as needed

// Check if the screen width is above the threshold
if (window.innerWidth >= minWidthThreshold) {
  
    document.querySelector('.hide').style.cssText = 'backdrop-filter: blur(6px); border-radius: 5px; background-color: #0000004c; margin-top: -88px;';
}
      logo.addEventListener('mouseover', function() {
          this.style.backgroundColor = 'rgba(240, 130, 51, 0.2)';
      });
      logo.addEventListener('mouseout', function() {
          this.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      });
      
      logo.style.cssText = 'padding: 8px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); background-color: rgba(255, 255, 255, 0); backdrop-filter: blur(3px); border-radius: 5px;';
  } else {
      navbar.classList.remove('shadow-sm');
      navbar.style.top = '-150px';
      
      navLinks.forEach(function(link) {
          link.classList.remove('linkBt');
          link.style.color = '#F4F7FE';
          link.addEventListener('mouseover', function() {
              this.style.color = '#F08233';
          });
          link.addEventListener('mouseout', function() {
              this.style.color = '#fff';
          });
      });
      
      document.querySelector('.hide').style.cssText = '';
      
      logo.style.cssText = 'padding: 0px; background: none; border-radius: 0px; box-shadow: none;';
  }
});



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown display
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };



  return (
    
    <div className="container-fluid sticky-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark p-1">
        <Link to="/" className="navbar-brand">
            <h1 className="text-white">
              <img src="img/rscomLogo.png" className="Logo" srcSet="" alt="" />
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="menu__wrapper navbar-nav ms-auto">
              <div className="menu__bar">
                <nav>
                  <ul className="navigation hide" >
                    <li className="nav-item nav-link">
                      {/* Button to toggle the dropdown */}
                      <button className="dropdownBt" onClick={toggleDropdown}>
Our Solutions

                        <svg
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                        >
                          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                        </svg>
                      </button>
                      <div className="dropdown__wrapper">
                        
                      {/* Dropdown content */}
                <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                          <ul className="list-items-with-description">
                            <li>
                              
                              <div className="item-title">
                                <a href="/solutions/Data_Center_Solutions">
                                <h3>Data Center Solutions</h3>
                                <p>Fiber Optic and Copper ...</p></a>
                              </div>
                            </li>
                            <li>
                              
                              <div className="item-title">
                              <a href="/solutions/Enterprise_Network_Solutions">
                                <h3>Enterprise Network Solutions</h3>
                                <p>Customizable network infrastructure...</p></a>
                              </div>
                            </li>
                            <li>
                              
                              <div className="item-title">
                              <a href="/solutions/Transportation_Network_Solutions">
                                <h3>Transportation Network Solutions</h3>
                                <p>Robust and reliable transportation...</p></a>
                              </div>
                            </li>
                            <li>
                              <div className="item-title"><a href="/solutions/Broadcast_and_CATV_Network_Solutions">
                                <h3>Broadcast and CATV Network Solutions</h3>
                                <p>specializes in providing...</p></a>
                              </div>
                            </li>
                            <li>
                              <div className="item-title"><a href="/solutions/Telecom_and_FTTx_Solutions">
                                <h3>Telecom and FTTx Solutions</h3>
                                <p>offers advanced telecom...</p></a>
                              </div>
                            </li>
                            <li>
                              <div className="item-title"><a href="/solutions">
                                <h3>All Solutions...</h3></a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/about" title="Docs">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/contact" title="Templates">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/news" title="Customers">
                        News
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
