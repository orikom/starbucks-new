import styles from './FooterWebsiteMenu.module.scss'
import FooterWebsiteMenuItem from "./footerWebsiteMenuItem/footerWebsiteMenuItem";

const FooterWebsiteMenu = () => {
  const menuItems = [
    {
      heading: "About Us",
      innerLinks: [
        "Our Company", 
        "Our Coffee", 
        "Stories and News", 
        "Starbucks Archive", 
        "Investor Relations", 
        "Contact Us"
      ]
    },
    {
      heading: "Careers",
      innerLinks: [
        "Culture and Values", 
        "Inclusion, Diversity, and Equity", 
        "College Achievement Plan", 
        "Alumni Community", 
        "U.S. Careers", 
        "International Careers", 
      ]
    },
    {
      heading: "Social Impact",
      innerLinks: [
        "People", 
        "Planet", 
        "Environmental and Social Impact Reporting", 
      ]
    },    
    {
      heading: "For Business Partners",
      innerLinks: [
        "Landlord Support Center", 
        "Suppliers", 
        "Corporate Gift Card Sales", 
        "Office and Foodservice Coffee", 
      ]
    },
    {
      heading: "Order and Pick Up",
      innerLinks: [
        "Order on the App", 
        "Order on the Web", 
        "Delivery", 
        "Order and Pick Up Options", 
        "Explore and Find Coffee for Home", 
      ]
    },

  ]

  return (
    <ul>
      <li className={styles.menu}>
        {menuItems.map((item, index) => <FooterWebsiteMenuItem menuItem={item} key={index}/>)}
      </li>
    </ul>
  )
}

export default FooterWebsiteMenu;