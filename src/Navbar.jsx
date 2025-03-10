import React, { useState, useEffect  } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the logo if scrolled more than 80px, otherwise show it
      setShowLogo(window.pageYOffset < 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Scroll to the section with the given id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  return (
    <div>
   
    <div className="nav">

      <div className="nav-container">
        <div className="navbar">
        <img
        src="/logo.webp"
        alt="Logo"
        className={`logoImg ${showLogo ? "visible" : "hidden"}`}
      />
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("home")}
                style={{
                  top: navOpen ? "0" : "120px",
                  opacity: navOpen ? "1" : "0",
                  transitionDuration: navOpen ? "2s" : "1s",
                  transitionDelay: navOpen ? "0.1s" : "0s",
                }}
              >
                Home
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("section1")}
                style={{
                  top: navOpen ? "0" : "120px",
                  opacity: navOpen ? "1" : "0",
                  transitionDuration: navOpen ? "2s" : "1s",
                  transitionDelay: navOpen ? "0.1s" : "0s",
                }}
              >
                Components
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("section2")}
                style={{
                  top: navOpen ? "0" : "120px",
                  opacity: navOpen ? "1" : "0",
                  transitionDuration: navOpen ? "2s" : "1s",
                  transitionDelay: navOpen ? "0.1s" : "0s",
                }}
              >
                Benefits
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("section3")}
                style={{
                  top: navOpen ? "0" : "120px",
                  opacity: navOpen ? "1" : "0",
                  transitionDuration: navOpen ? "2s" : "1s",
                  transitionDelay: navOpen ? "0.1s" : "0s",
                }}
              >
                Pre-Order
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
              }}
            >
              <span>Hegemat</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/hegemat.official/?igsh=bmxhNmk1bGJkemg1&utm_source=qr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                    }}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
