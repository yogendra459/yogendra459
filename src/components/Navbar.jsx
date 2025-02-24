import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <h1>Yogendra</h1>{" "}
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#home" className="menu-item">
              Home
            </a>
            <a href="#about" className="menu-item">
              About
            </a>
            <a href="#services" className="menu-item">
              Services
            </a>
          </div>

          <a href="#contact" className="Contact-item">
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-menu-item">
            Home
          </a>
          <a href="#about" className="mobile-menu-item">
            About
          </a>
          <a href="#services" className="mobile-menu-item">
            Services
          </a>
          <a href="#contact" className="mobile-menu-item">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
