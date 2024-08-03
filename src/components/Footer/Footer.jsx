import styles from "./Footer.module.css";
import footerData from "../../utils/footer.json";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import Logo from "../../assets/icons/logo.svg";

const socialIcons = {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_header}>
        <div className={`${styles.footer_data} ${styles.footer_section}`}>
          <Link to="/">
            <img
              src={Logo}
              alt="EcoCraft Logo"
              className={styles.logo}
            />
          </Link>
          <p className={styles.tagline}>{footerData.tagline}</p>
          <div className={styles.footer_socials}>
            {footerData.socialLinks.map(({ icon, url }) => {
              const IconComponent = socialIcons[icon];
              return (
                <Link to={url} className={styles.icon_link} key={icon}>
                  <IconComponent className={styles.icon} />
                </Link>
              );
            })}
          </div>
        </div>
        {footerData.sections.map(({ title, links }) => (
          <div className={`${styles.footer_section}`} key={title}>
            <div className={styles.footer_list}>
              <h2 className={styles.footer_title}>{title}</h2>
              {links.map(({ name, url }) => (
                <Link to={url} className={styles.footer_item} key={name}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className={styles.footer_copywrite}>{footerData.copywrite}</p>
    </div>
  );
};

export default Footer;
