import Button from '../button/Button';
import styles from './Banner.module.scss'

interface BannerProps  {
  bannerData: {
    heading: string;
    subHeading: string;
    imgURL: string;
    imgAltText: string;
    btnText: string;
    backgroundColor: string;
    textColor: string;
    isImgOnRightSide: boolean;
    isBiggestBanner: boolean;
  },

  key: number;
}

const Banner = ({ bannerData }: BannerProps ) => {
  return (
    <div 
      className={`
        ${styles.banner} 
        ${bannerData.isImgOnRightSide ? '' : styles.flexReverse }
        ${bannerData.isBiggestBanner ? styles.biggestHeight : '' }
      `} 
      style={
        {backgroundColor: bannerData.backgroundColor}
      }>
      
      <section className={ styles.bannerTextSection}>
        <div className={styles.textWrapper} style={{color: bannerData.textColor}}>
          <div 
            className={`
              ${bannerData.isBiggestBanner ? 
                styles.bannerBiggerHeading : 
                styles.bannerHeading}`}>
                  { bannerData.heading }
          </div>
          <div 
            className={`
              ${bannerData.isBiggestBanner ? 
              styles.bannerBiggerSubHeading : 
              styles.bannerSubHeading}`}>
                { bannerData.subHeading }
          </div>
          {/* <button className={styles.bannerBtn}>{bannerData.btnText}</button> */}
          <Button label={bannerData.btnText} backgroundColor='transparent' textColor={bannerData.textColor}/>
        </div>
      </section>

      {/* <section className={styles.bannerImgSection} style={{backgroundColor: 'red'}}> */}
      <section className={styles.bannerImgSection}>
        <img className={styles.img} src={ bannerData.imgURL } alt={ bannerData.imgAltText } />
      </section>
    </div>
  )
}

export default Banner;
