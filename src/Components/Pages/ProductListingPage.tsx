import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Elements/Header";
import { Footer } from "../Elements/Footer";
import { ProductItem } from "../Elements/ProductItem";
import { Pagination } from "../Elements/Pagination";
import {useMultipleQuery} from "../../Hooks/useMultipleQuery"

export const ProductListingPage = () => {
    
    const {state}=useLocation();
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(12);
      const responses = useMultipleQuery(currentPage);
      let resp=responses.filter(res=>res.key===state);
      let {data,isLoading,isError,error}=resp[0];
      if(data?.total==0){

         resp=responses.filter(res=>res.key=="Tops");
       data=resp[0].data;
       let x = Math.random() * 10;
       if(x>4)data.products.reverse();
      }
    let productListngPageData;
    let productList=[];

    if (isLoading) productListngPageData= <p>Loading...</p>;
    else if (isError) productListngPageData=  <p>Error: {(error as any).message}</p>;
    else if (data.total==0) productListngPageData=  <p>No data available</p>;
    else{
   
    productList = data.products.map((prod:IProducts)=>{
       return <ProductItem brand={prod.brand} category={prod.category} description={prod.description}
       discountPercentage={prod.discountPercentage} id={prod.id} images={prod.images} price={prod.price}
       rating={prod.rating} stock={prod.stock} thumbnail={prod.thumbnail} title={prod.title}
       ></ProductItem>
    });

    productList=[...productList,...productList,...productList,...productList,...productList];
    const lastPostIndex = currentPage*itemsPerPage;
    const firstPostIndex = lastPostIndex-itemsPerPage;
    const paginatedProdList = productList.filter((prod:any,index:any)=>{
        if(index>=firstPostIndex&&index<lastPostIndex)return prod;
    })
    productListngPageData= paginatedProdList;

    }
    return (
        
      <>
      <Header active={state}></Header>
      <div className= "ui  four column fluid centered grid " style={{padding:"20rem, 20rem"}}>
        <div className="row">
      {productListngPageData}
      </div>
      <div className="row">
  
      <Pagination totalItems= {productList.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
     
      </div>
      </div>
     
      <Footer></Footer>
      </>
    );
  };

  export interface IProdData{
    limit:number,
    products:IProducts[],
    skip:number,
    total:number
  }
 export interface IProducts{
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