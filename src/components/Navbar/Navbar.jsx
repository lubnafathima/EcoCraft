import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/icons/logo.svg";
import { IoSearch } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={Logo} alt="EcoCraft Logo" className={styles.logo} />

      {/* <div className={styles.left_navbar}></div> */}
      <div className={styles.middle_navbar}>
        <Link to="" className={styles.search_button}>
          <IoSearch />
        </Link>
        <input
          type="text"
          placeholder="Searching for ..."
          className={styles.search_input}
        />
      </div>
      <div className={styles.right_navbar}>
        <Link to="" className={`${styles.leaderboard} ${styles.nav_button}`}>
          <MdLeaderboard />
        </Link>
        <Link to="" className={`${styles.wishlist} ${styles.nav_button}`}>
          <FaHeart />
        </Link>
        <Link to="" className={`${styles.cart} ${styles.nav_button}`}>
          <FaShoppingCart />
        </Link>
        <Link to="" className={`${styles.profile} ${styles.nav_button}`}>
          <RiUser3Fill />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
