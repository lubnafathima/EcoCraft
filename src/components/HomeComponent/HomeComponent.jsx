import { Link, useNavigate } from "react-router-dom";
import styles from "./HomeComponent.module.css";
import Banner1 from "../../assets/images/Home/Banner1.svg";
import Banner2 from "../../assets/images/Home/Banner2.svg";
import Banner3 from "../../assets/images/Home/Banner3.svg";
import Banner4 from "../../assets/images/Home/Banner4.svg";

const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.left_banner}>
          <div onClick={() => navigate("/products", { state: "Textiles" })}>
            <img src={Banner1} alt="Textile" className={styles.banner_img} />
            <div className={styles.banner_text}>
              <p className={styles.banner_item_count}>5 Items</p>
              <h2 className={styles.banner_title}>TEXTILES</h2>
              <p className={styles.banner_link}>Shop Now</p>
            </div>
          </div>
        </div>
        <div className={styles.right_banner}>
          <div
            onClick={() => navigate("/products", { state: "Home Decor" })}
            className={`${styles.top_banner} ${styles.banner_container}`}
          >
            <img src={Banner2} alt="Home Decor" className={styles.banner_img} />
            <div className={styles.banner_text}>
              <p className={styles.banner_item_count}>5 Items</p>
              <h2 className={styles.banner_title}>HOME DECOR</h2>
              <p className={styles.banner_link}>Shop Now</p>
            </div>
          </div>
          <div className={styles.bottom_banner}>
            <div
              onClick={() => navigate("/products", { state: "Accessories" })}
              className={styles.banner_container}
            >
              <img
                src={Banner3}
                alt="Accessories"
                className={styles.banner_img}
              />
              <div className={styles.banner_text}>
                <p className={styles.banner_item_count}>5 Items</p>
                <h2 className={styles.banner_title}>ACCESSORIES</h2>
                <p className={styles.banner_link}>Shop Now</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/shop")}
              className={styles.banner_container}
            >
              <img src={Banner4} alt="More" className={styles.banner_img} />
              <div className={styles.banner_text}>
                <p className={styles.banner_item_count}>100+ Items</p>
                <h2 className={styles.banner_title}>SHOP NOW</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
