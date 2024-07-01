import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Menu />
      <div className={styles.content}>{children}</div>
      <Newsletter />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
