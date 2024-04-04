import { useRef, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CheckoutForm } from "./CheckoutForm";
import styles from "../../CSSFiles/productItem.module.css"
import { increment,decrement , clearCart} from "../../Redux/Slices/cartCounter";
import { useAppDispatch } from "../../Redux/Hooks/hooks";
export const ProductItem = (props:IProducts) => {
    const dispatch = useAppDispatch();
  const addToCart=()=>{
    return dispatch(increment());

  }
    return (
        <>
        <div className="four column stackable" key={props.id} style={{ margin: '10px' }}>
          <div className="ui link stackable cards ">
          <div className="card">
            <div className="image">
        <img src={props.thumbnail} alt={props.images?.length>0?props.images[0]:""} style={{aspectRatio:"4/5"}} />
        </div>
        <div className="content">
        <div className="header">{props.title}</div>
        <p className="meta price">${props.price}</p>
        <div onClick={addToCart} className="ui teal vertical animated fluid button">
        
  <div className="hidden content">
    <i className="shop icon"></i>
  </div>
  <div className="visible content">
          Add to Cart</div></div>
        </div>
        </div>
        </div>
        </div>

</>
        
        
    );
  };
  interface IProducts{
    brand: string,
category: string,
description:string,
discountPercentage:number,

id:number,
images:string[],
price:number,
rating:number,
stock:number,
thumbnail:string,
title:string


  }