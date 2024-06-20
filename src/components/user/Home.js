import React from 'react';
import NavBar from './Navbar';
import Nav from './Nav';
import Footer
 from './Footer';
const Home = () => {
  return (
    <div>
        <NavBar />
        <Nav />
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <Footer />
    </div>
  );
};

export default Home;
