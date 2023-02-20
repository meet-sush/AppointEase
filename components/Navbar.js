import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={` navbarArea ${styles.header__area}`}>
        <nav className={`${styles.navbar__area} navbar navbar-expand-lg  `}>
          <a className={`${styles.logo} navbar-brand`} href="/">
            &#9739; Appointment Booking
          </a>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul className={`${styles.nabar__items} navbar-nav mr-auto`}>
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" href="#aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/appointment">
                  Book Appoointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  LogIn
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
