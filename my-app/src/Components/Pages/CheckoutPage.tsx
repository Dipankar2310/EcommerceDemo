import { useRef } from "react";
import { Header } from "../Elements/Header";
import { Footer } from "../Elements/Footer";
import { CheckoutForm } from "../Elements/CheckoutForm";
import styles from "../../CSSFiles/checkoutPage.module.css"
export const CheckoutPage = () => {
  
    return (
        <div className={styles.checkoutBody}>
        <Header/>
        <div>
        <CheckoutForm/>
        </div>
        <Footer/>
        </div>
    );
  };