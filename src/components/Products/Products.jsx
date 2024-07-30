import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";
import { db } from "../../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Products = () => {
  const { state } = useLocation();
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribeProducts = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductList(productData);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    const unsubscribeCategory = onSnapshot(
      collection(db, "category"),
      (snapshot) => {
        const categoryData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const matchedCategory = categoryData.find(
          (cat) => cat.title.toLowerCase() === state.toLowerCase()
        );
        setCategory(matchedCategory);
      },
      (err) => {
        setError(err);
      }
    );

    return () => {
      unsubscribeProducts();
      unsubscribeCategory();
    };
  }, [state]);

  if (loading)
    return (
      <div className={styles.loading}>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.products}>
      {state}
      {category && (
        <div className={styles.category}>
          <h2>Sub Categories</h2>
          <ul>
            {category.sub_category.map((subCat, index) => (
              <li key={index}>{subCat}</li>
            ))}
          </ul>
        </div>
      )}
      {productList
        ?.filter(
          (product) => product?.category.toLowerCase() === state.toLowerCase()
        )
        .map((product) => (
          <div key={product?.id} className={styles.productCard}>
            <img
              src={product?.ImgSrc}
              alt={product?.name}
              className={styles.productImage}
            />
            <div className={styles.productData}>
              <h3>{product?.name}</h3>
              <div>
                <div className={styles.productPrice}></div>
                <div className={styles.offer}></div>
              </div>
              <p className={styles.productDelivery}></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
