import styles from "./Products.module.css";
import Layout from "../Layout/Layout";
import ProductsComponent from "../../components/Products/Products";

const Products = () => {
  return (
    <div>
      <Layout>
        <div className={styles.products}>
          <ProductsComponent />
        </div>
      </Layout>
    </div>
  );
};

export default Products;
