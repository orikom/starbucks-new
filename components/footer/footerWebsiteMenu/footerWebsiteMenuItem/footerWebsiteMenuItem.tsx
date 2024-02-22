import { useState } from 'react';
import styles from './footerWebsiteMenuItem.module.scss'

import { PiCaretDownBold } from "react-icons/pi";
import Link from 'next/link';

interface MenuItemProp {
  menuItem:{
    heading: string;
    innerLinks: string[];
  }
}

const FooterWebsiteMenuItem = ({ menuItem }: MenuItemProp) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () =>{
    setIsOpen((prev) => !prev);
  }

  return (
    <ul className={styles.websiteMenuItem}>
      <li>
        <div className={styles.heading} onClick={toggleMenu}>
          <span className={styles.headingText}>{menuItem.heading}</span>
          <PiCaretDownBold className={`${styles.caretIcon} ${isOpen ? styles.caretFlipped : ''}`}/>
        </div>
        <ul className={`${styles.links} ${isOpen ? styles.linksExtended : ''}`} >
          {menuItem.innerLinks.map((link, index) => <li className={styles.link} key={index}><Link href ='/'>{link}</Link></li>)}
        </ul>
      </li>
    </ul>
  )
}


export default FooterWebsiteMenuItem;