import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className={styles.products}>
      {state}
    </div>
  );
};

export default Products;
