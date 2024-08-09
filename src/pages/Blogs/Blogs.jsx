import styles from './Blogs.module.css';
import Layout from "../Layout/Layout";
import BlogsComponent from "../../components/BlogsComponent/BlogsComponent";

const Blogs = () => {
  return (
    <div>
      <Layout>
        <div className={styles.blogs}>
          <BlogsComponent />
        </div>
      </Layout>
    </div>
  )
}

export default Blogs
