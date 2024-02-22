import styles from './Sales.module.scss'

const Sales = () => {
  
  return (
    <section className={styles.salesSection}>

      <div className={styles.textWrapper}>
        <p className={styles.paragraph}>*At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Bonus Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For full details, visit <span className={styles.inlineLink}>www.starbucks.com/bofa</span>. Bank of America, N.A. Member FDIC.</p>
      </div>
    
    </section>
  )
}

export default Sales;