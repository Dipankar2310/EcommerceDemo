import React from "react";
import { Link } from "react-router-dom";
import { topPathsArray } from "../constants";
import CartIcon from "./CartIcon";
import styles from "../../CSSFiles/header.module.css"
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from "../../Redux/Hooks/hooks";
import { changePage } from "../../Redux/Slices/pageSelection";

export const Header = ({active}:any) => {
    const cartCount = useAppSelector(state=>state.cartCounter)
    // console.log(cartCount)
    const dispatch = useAppDispatch();
    console.log(active);
return (
<div className={styles.header}>
<p className={styles.brand}>urban</p>

<nav className="ui inverted segment" >
<div className="ui inverted secondary pointing menu">
<Link to={topPathsArray.HomePagePath} className={`item ${"Home"==active?"active":""}`} state={'Home'} key={"Home"} >Home</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Tops"==active?"active":""}`} state={'Tops'} key={"Tops"} >Tops</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Shirts"==active?"active":""}`} state={'Shirts'} key={"Shirts"}>Shirts</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Shoes"==active?"active":""}`} state={'Shoes'} key={"Shoes"}>Shoes</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Bags"==active?"active":""}`} state={'Bags'} key="Bags">Bags</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Watches"==active?"active":""}`} state={'Watches'} key="Watches">Watches</Link>
<Link to={topPathsArray.ProductListingPagePath} className={`item ${"Jewellery"==active?"active":""}`} state={'Jewellery'} key="Jewellery">Jewellery</Link>
<div className="right menu">
<span className= "item" ><FaUser /></span> 
<Link to={topPathsArray.CheckoutPagePath} className="item" ><span className={styles.icon}><FaShoppingCart /> {cartCount>0?cartCount:""}</span> </Link>
</div>
</div>
</nav>

{/* <CartIcon /> */}
{/* <i class='fas fa-user-alt'></i> */}
</div>
);
};