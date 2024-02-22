
import styles from './UserActions.module.scss'
import Button from '@/components/button/Button';
import { FaLocationDot } from "react-icons/fa6";

const UserActions = () => {

  return (
    <nav className={styles.userActions}>
      <div className={styles.findStoreContainer}>

        <FaLocationDot className={styles.locationIcon}/>
        <span>find a store</span>
      </div>
      <div className={styles.signInBtnWrapper}>
        
        <Button backgroundColor='white' textColor='black' label='Sign In'/>
      </div>
      <div className={styles.joinNowBtnWrapper}>
        <Button backgroundColor="black" textColor="white" label="Join now"/>
      </div>
    </nav>
  )
}
export default UserActions;