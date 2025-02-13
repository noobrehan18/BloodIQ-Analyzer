import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <FAQs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
