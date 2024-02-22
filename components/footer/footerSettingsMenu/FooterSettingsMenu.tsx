import Link from 'next/link';
import styles from './FooterSettingsMenu.module.scss'

const FooterSettingsMenu = () => {
  return (
    <ul className={styles.settingsMenu}>
      <li className={styles.linkWrapper}>
        <Link href ='/' className={styles.link}>Privacy Notice</Link>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        {/* <a className={styles.link}>Terms of Use</a> */}
        <Link href ='/' className={styles.link}>Terms of Use</Link>
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        {/* <a className={styles.link}>Do Not Share My Personal Information</a> */}
        <Link href ='/' className={styles.link}>Do Not Share My Personal Information</Link>
        
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        {/* <a className={styles.link}>CA Supply Chain Act</a> */}
        <Link href ='/' className={styles.link}>CA Supply Chain Act</Link>
        
      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        {/* <a className={styles.link}>Accessibility</a> */}
        <Link href ='/' className={styles.link}>Accessibility</Link>

      </li>
      <li className={styles.linkWrapper}>
        <span className={styles.separator}>|</span>
        {/* <a className={styles.link}>Cookie Preferences</a> */}
        <Link href ='/' className={styles.link}>Cookie Preferences</Link>
      </li>
    </ul>
  )
}

export default FooterSettingsMenu;