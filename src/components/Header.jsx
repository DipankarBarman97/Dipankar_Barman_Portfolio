import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <BiMenuAltRight />
      </button>
    </>
  );
};

export const NavContent = ({setMenuOpen}) => (
  <>
    <h2>Dipankar.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
      <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">Testimonial</a> */}
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:dipankar.db37@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
