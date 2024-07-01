import styles from "./Home.module.css";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className={styles.home}></div>
      </Layout>
    </div>
  );
};

export default Home;
