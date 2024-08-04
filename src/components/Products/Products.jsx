import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";
import { db } from "../../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Products = () => {
  const { state } = useLocation();
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

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
          (category) => category.title?.toLowerCase() === state?.toLowerCase()
        );
        setCategory(matchedCategory || null);
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

  const handleSubCategoryClick = (subCategoryTitle) => {
    setSubCategory(subCategoryTitle);
  };

  const filteredProducts = productList.filter((product) => {
    const matchesCategory =
      product?.category?.toLowerCase() === state?.toLowerCase();
    const matchesSubCategory = subCategory
      ? product?.sub_category?.toLowerCase() === subCategory?.toLowerCase()
      : true;
    return matchesCategory && matchesSubCategory;
  });

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
      {category ? (
        <Swiper
          className={styles.category}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[A11y, Autoplay]}
          slidesPerView={6}
          spaceBetween={10}
        >
          {Object.entries(category?.sub_category || {}).map(([key, value]) => (
            <SwiperSlide key={key}>
              <div
                key={key}
                className={styles.subCategory_link}
                onClick={() => handleSubCategoryClick(value?.title)}
              >
                <img
                  src={value?.imgSrc}
                  alt={value?.title}
                  className={styles.subCategory_item}
                />
                <div className={styles.subCategory_overlay}>
                  <p className={styles.subCategory_text}>{value?.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className={styles.noCategory}>No categories found.</p>
      )}
      <h1 className={styles.title}>{state}</h1>
      <div className={styles.productContainer}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product?.id} className={styles.productCard}>
              <img
                src={product?.imgSrc[0]}
                alt={product?.name}
                className={styles.productImage}
              />
              <div className={styles.productData}>
                <p>{product?.product_name}</p>
                <div>
                  <div className={styles.productPrice}>
                    Rs: {product?.price}
                  </div>
                  <div className={styles.offer}></div>
                </div>
                <p className={styles.productDelivery}></p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
