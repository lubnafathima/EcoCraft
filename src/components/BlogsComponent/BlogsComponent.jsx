import styles from "./BlogsComponent.module.css";

const BlogsComponent = () => {
  return (
    <>
      <div className={styles.blogs}>
        <h1 className={styles.title}>Blogs</h1>
        <div className={styles.blogsContainer}>
          <div className={styles.blogsCard}></div>
          <div className={styles.blogsCard}></div>
          <div className={styles.blogsCard}></div>
          <div className={styles.blogsCard}></div>
        </div>
      </div>
    </>
  );
};

export default BlogsComponent;
