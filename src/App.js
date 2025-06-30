import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import MyWork from './Components/MyWork/My_Work.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;