import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/icons/logo.svg";
import { IoSearch } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = (e) => {
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <img src={Logo} alt="EcoCraft Logo" className={styles.logo} />
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
        <Link
          to=""
          className={`${styles.profile} ${styles.nav_button}`}
          onClick={handleProfileClick}
        >
          <div
            className={styles.profile_container}
            ref={profileRef}
            onClick={handleProfileClick}
          >
            <RiUser3Fill />
          </div>
          {isProfileOpen && (
            <div className={styles.profile_option}>
              <Link to="/profile" className={styles.profileOption_item}>
                Profile
              </Link>
              <Link to="/settings" className={styles.profileOption_item}>
                Settings
              </Link>
              <Link to="/logout" className={styles.profileOption_item}>
                Login
              </Link>
            </div>
          )}
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
