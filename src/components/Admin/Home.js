import React, { useEffect } from 'react';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '@icon/themify-icons/themify-icons.css'; 
import './assets/style.css';

import Navbar from './Navbar';
import Sidebar from './Sidebar '

const Home = () => {

 

    return (
      <div>
            <div className="wrapper">
            <Sidebar  />
            
            <div id="content">
            <Navbar />

                <h2>Collapsible Sidebar Using Bootstrap 4</h2>
                <p>Lorem ipsum...</p>
                <p>Lorem ipsum...</p>
                <div className="line"></div>
                <h2>Lorem Ipsum Dolor</h2>
                <p>Lorem ipsum...</p>
                <div className="line"></div>
                <h2>Lorem Ipsum Dolor</h2>
                <p>Lorem ipsum...</p>
                <div className="line"></div>
                <h3>Lorem Ipsum Dolor</h3>
                <p>Lorem ipsum...</p>
            </div>            
            </div>
      </div>
    );
};
  
  export default Home;
  