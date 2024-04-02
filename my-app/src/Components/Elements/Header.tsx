import { Link } from "react-router-dom";
import { topPathsArray } from "../constants";
import styles from "../../CSSFiles/main.module.css"
import CartIcon from "./CartIcon";
export const Header = () => {
    
    return (
        <div>
      <p>URBAN</p>

      <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}>Tops</button>
              </Link>
            </div>
            <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}> Shirts</button>
              </Link>
            </div>

            <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}>Shoes</button>
              </Link>
            </div>
            <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}>Bags</button>
              </Link>
            </div>

            <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}>Watches</button>
              </Link>
            </div>
            <div className={styles.topbtn}>
              <Link
                style={{ textDecoration: "none" }}
                to={topPathsArray.ProductListingPagePath}
              >
                <button className={styles.btn1}>Jewellery</button>
              </Link>
              {/* <CartIcon></CartIcon> */}
              {/* <i class='fas fa-user-alt'></i> */}
            </div>

           
            

            </div>
    );
  };