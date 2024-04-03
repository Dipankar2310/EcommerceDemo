import { Header } from "../Elements/Header";
import { Footer } from "../Elements/Footer";
import img from "../../Images/CheckOut.png"
import styles from "../../CSSFiles/homePage.module.css"
import { useLocation } from "react-router-dom";
export const HomePage = () => {
  const {state}=useLocation();
    return (
        <>
      <Header active={state}/>
        <div className={styles.hero}>
            <img className={styles.img} src={img} alt="../" />
        </div>

        <h2>Bestseller</h2>
        <div>SMALL</div>
        <div>SMALL</div>
      <Footer/>
      </>
    );
  };