import { useRef, useState } from "react";
import "../styles/Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right= "-350px";
  }
  return (
    <div className="navbar">
      <h1>dev. <span>Anurag</span></h1>
      <span onClick={openMenu} className="material-symbols-outlined menu-open-icon">
        menu
      </span>
      <ul ref={menuRef} className="nav-menu">
        <span onClick={closeMenu} className="material-symbols-outlined menu-close-icon">
          close
        </span>
        <li onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : "raise"}`}><AnchorLink className="anchor-link" offset={50} href="#home">Home</AnchorLink></li>
        <li onClick={() => setMenu("about")} className={`${menu === "about" ? "active" : "raise"}`}><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li>
        <li onClick={() => setMenu("skills")} className={`${menu === "skills" ? "active" : "raise"}`}><AnchorLink className="anchor-link" offset={50} href="#skills">Skills</AnchorLink></li>
        <li onClick={() => setMenu("myWorks")} className={`${menu === "myWorks" ? "active" : "raise"}`}><AnchorLink className="anchor-link" offset={50} href="#work">My Works</AnchorLink></li>
      </ul>
      <div className="contact-me"><AnchorLink className="anchor-link" offset={50} href="#contact"><span></span>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;