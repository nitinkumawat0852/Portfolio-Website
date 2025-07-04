import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Nitin (1).png";
import underline from "../../Assets/underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../Assets/menu-icon.svg';
import menu_close from '../../Assets/close.svg' 
function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
   const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className="navbar">
      <img src={logo} className="imgnav" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link"  href="#home"> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
           <AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
           <AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
           <AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfiio</p></AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
           <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
