import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link href="/">menu</Link></li>
        <li><Link href="/">rewards</Link></li>
        <li><Link href="/">gift card</Link></li>
      </ul>
    </nav>
  )

}
export default Navbar;