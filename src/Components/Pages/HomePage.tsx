import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Elements/Header";
import { Footer } from "../Elements/Footer";
import img from "../../Images/main.png";
import img1 from "../../Images/product1.jpg"
import img2 from "../../Images/product2.jpg"
import img3 from "../../Images/product3.jpg"
import styles from "../../CSSFiles/homePage.module.css";

export const HomePage = () => {
const { state } = useLocation();
return (
<>
<Header active={state} />
<div className={styles.gridContainer}>
<img className={styles.heroImg} src={img} alt="Hero" />
<div className={styles.bestseller}>BESTSELLER</div>
<div className={styles.lowerRow}>
<img className={styles.img} src={img1} alt="Image 1" />
<img className={styles.img} src={img2} alt="Image 2" />
<img className={styles.img} src={img3} alt="Image 3" />
</div>
</div>
<Footer />
</>
);
};