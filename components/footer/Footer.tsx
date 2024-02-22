import FooterSettingsMenu from "./footerSettingsMenu/FooterSettingsMenu";
// import FooterWebsiteMenu from "./footerWebsiteMenu/FooterWebsiteMenu";
import SocialLinks from "./socialLinks/SocialLinks";
import styles from './Footer.module.scss'
import FooterWebsiteMenu from './footerWebsiteMenu/FooterWebsiteMenu';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterWebsiteMenu/>
      <hr className={styles.seperator}/>
      <SocialLinks/>
      <FooterSettingsMenu/>
      <p className={styles.trademark}>© 2024 Starbucks Coffee Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer;