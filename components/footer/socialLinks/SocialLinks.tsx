import styles from './SocialLinks.module.scss'
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinksContainer}>
      <FaSpotify className={styles.socialLink}/>
      <FaFacebook className={styles.socialLink}/>
      <FaPinterest className={styles.socialLink}/>
      <FaSquareInstagram className={styles.socialLink}/>
      <FaYoutube className={styles.socialLink}/>
      <AiFillTwitterCircle className={styles.socialLink}/>
    </div>
  )
}

export default SocialLinks;