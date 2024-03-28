import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const openMenu = () => {
  const navbar_links = document.getElementById("navbar_links");
    navbar_links.style.right = 0;
  };

  const closeMenu = () => {
  const navbar_links = document.getElementById("navbar_links");
    navbar_links.style.right = "-300px";
  };


  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <h1>&#60;USMAN /&#62;</h1>
        <div className={styles.navbar_links} id="navbar_links">
          <MdClose onClick={closeMenu}/>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? `${styles.navbar_link} ${styles.active}`
                : `${styles.navbar_link}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) => {
              return isActive
                ? `${styles.navbar_link} ${styles.active}`
                : `${styles.navbar_link}`;
            }}
          >
            Projects
          </NavLink>
          <button>Download CV</button>
        </div>
        <GiHamburgerMenu onClick={() => openMenu()} />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Navbar;
