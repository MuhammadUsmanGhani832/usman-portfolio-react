import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <h1>&#60;USMAN /&#62;</h1>
        <div className={styles.navbar_links}>
          <NavLink
          to='/'
            className={({ isActive }) => {
              return isActive
                ? `${styles.navbar_link} ${styles.active}`
                : `${styles.navbar_link}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
          to={'/projects'}
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
       
      </div>
      <div className={styles.divider}></div>
    </>
  );
}

export default Navbar