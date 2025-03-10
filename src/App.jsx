import React, { useRef } from "react";
import './App.css';
import ScrollBar from './ScrollBar';

import Navbar from './Navbar';
import Card from './Card';
import Canva from './Canva';
import PreOrderModal from "./PreOrderModal";
import PreOrderSection from "./PreOrderSection";


function HeroSection() {

  const handleScroll = () => {
    const section1 = document.getElementById("section1");
    if (section1) {
      section1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Where Wildlife Meets Innovation</h1>
        <p>Detect &nbsp;&nbsp; Dispense &nbsp;&nbsp; Sustain</p>
         <div className="OuterBox" onClick={handleScroll}>
          <div className="InnerCircle"></div>
         </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <ScrollBar></ScrollBar>
      <Navbar />
      <HeroSection />
      <Section id="section1">
        <h1>Under the Hood</h1>
        <p>Explore the key parts that power our wild boar feeding machine. Hover over each component to learn more about its function and how it helps detect, identify, and feed these animals automatically.</p>
   <Canva></Canva>
      </Section>
      <Section id="section2">
        <h1>Benefits</h1>
        <p>Smart, reliable, and efficient – the future of wildlife feeding.</p>
        <Card></Card>
      </Section>
      <Section id="section3">
        <PreOrderSection></PreOrderSection>
        </Section>
    </div>
  );
}

export default App;
