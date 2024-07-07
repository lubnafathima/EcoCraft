import styles from "./Shop.module.css";
import Layout from "../Layout/Layout";
import ShopComponent from "../../components/ShopComponent/ShopComponent";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Layout>
        <div className={styles.shop_container}>
          <ShopComponent />
        </div>
      </Layout>
    </div>
  );
};

export default Shop;
