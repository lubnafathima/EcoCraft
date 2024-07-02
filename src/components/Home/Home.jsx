import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Banner1 from "../../assets/images/Home/Banner1.svg";
import Banner2 from "../../assets/images/Home/Banner2.svg";
import Banner3 from "../../assets/images/Home/Banner3.svg";
import Banner4 from "../../assets/images/Home/Banner4.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.left_banner}>
          <Link to="">
            <img src={Banner1} alt="Textile" className={styles.banner_img} />
            <div className={styles.banner_text}>
              <p className={styles.banner_item_count}>5 Items</p>
              <h2 className={styles.banner_title}>TEXTILES</h2>
              <p className={styles.banner_link}>Read More</p>
            </div>
          </Link>
        </div>
        <div className={styles.right_banner}>
          <Link
            to=""
            className={`${styles.top_banner} ${styles.banner_container}`}
          >
            <img src={Banner2} alt="Home Decor" className={styles.banner_img} />
            <div className={styles.banner_text}>
              <p className={styles.banner_item_count}>5 Items</p>
              <h2 className={styles.banner_title}>HOME DECOR</h2>
              <p className={styles.banner_link}>Read More</p>
            </div>
          </Link>
          <div className={styles.bottom_banner}>
            <Link to="" className={styles.banner_container}>
              <img
                src={Banner3}
                alt="Jewellery"
                className={styles.banner_img}
              />
              <div className={styles.banner_text}>
                <p className={styles.banner_item_count}>5 Items</p>
                <h2 className={styles.banner_title}>JEWELLERY</h2>
                <p className={styles.banner_link}>Read More</p>
              </div>
            </Link>
            <Link to="" className={styles.banner_container}>
              <img src={Banner4} alt="More" className={styles.banner_img} />
              <div className={styles.banner_text}>
                <p className={styles.banner_item_count}>100+ Items</p>
                <h2 className={styles.banner_title}>VIEW MORE</h2>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
