import styles from './Main.module.scss'
import bannersData from '../../data/bannersData'
import Banner from '../banner/Banner'
import Sales from '../sales/Sales'

const MainSection = () => {
  return (
    <main className={styles.main}>
      {bannersData.map((bannerData, index) => ( <Banner bannerData={bannerData} key={index} />) )}
      <Sales/>
    </main>

  )
}

export default MainSection;