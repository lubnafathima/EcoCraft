import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShopComponent.module.css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { db } from "../../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const ShopComponent = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "category"),
      (snapshot) => {
        const categoryData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategoryList(categoryData);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  if (loading)
    return (
      <div className={styles.loading}>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
        <div className={styles.loading_item}></div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.shop}>
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
        {categoryList.map((category) => (
          <SwiperSlide key={category.id}>
            <div className={styles.category_link} onClick={() => navigate("/products", { state: category.title })}>
              <img
                src={category.thumbnail_imgSrc}
                alt={category.title}
                className={styles.category_item}
              />
              <div className={styles.category_overlay}>
                <p className={styles.category_text}>{category.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopComponent;
