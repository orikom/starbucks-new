import Navbar from './navbar/Navbar';
import styles from './Header.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import UserActions from './userActions/UserActions';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleIsNavbarActive = () => {
    setIsNavbarActive(() => !isNavbarActive);
   
    if (isNavbarActive) {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    } else {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }
  }

  return (
    <section className={styles.header}>
      <Image
        className={styles.logo}
        src="/svg/logo.svg"
        alt="Starbucks Logo"
        width={51}
        height={51}
      />

      <div className={styles.hamburger} onClick={toggleIsNavbarActive}>
        <div className={`${styles.line} ${styles.topLine} ${isNavbarActive ? styles.topLineActive: ''} `}></div>
        <div className={`${styles.line} ${styles.middleLine} ${isNavbarActive ? styles.middleLineActive: ''}`}></div>
        <div className={`${styles.line} ${styles.bottomLine} ${isNavbarActive ? styles.bottomLineActive: ''}`}></div>
      </div>
      <div className={isNavbarActive ? styles.overlayBackground: ''}></div>
      <div className={`${styles.navAndUserActionsContainer} ${isNavbarActive ? styles.slideRight : ''}`}> 
        <Navbar/>
        <UserActions/>
      </div>


    </section>
  )
}
export default Header;