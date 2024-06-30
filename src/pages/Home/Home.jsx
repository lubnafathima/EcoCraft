import styles from './Home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Menu />
    </div>
  )
}

export default Home
