import styles from './Profile.module.css';
import Layout from "../Layout/Layout";

const Profile = () => {
  return (
    <div>
      <Layout>
        <div className={styles.profile}></div>
      </Layout>
    </div>
  )
}

export default Profile
