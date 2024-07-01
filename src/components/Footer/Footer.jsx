import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_socials}></div>
      <div className={styles.footer_about}></div>
      <div className={styles.footer_customer}></div>
      <div className={styles.footer_help_center}></div>
    </div>
  )
}

export default Footer
