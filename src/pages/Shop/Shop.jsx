import styles from "./Shop.module.css";
import Layout from "../Layout/Layout";
import Filter from "../../components/Filter/Filter";
import ShopComponent from "../../components/ShopComponent/ShopComponent";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Layout>
        <div className={styles.shop_container}>
          <Filter />
          <ShopComponent />
        </div>
      </Layout>
    </div>
  );
};

export default Shop;
