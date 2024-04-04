import { useQuery } from "react-query";
import axios from "axios";
export const useMultipleQuery = (currentPage:number) => {

     const fetchDataTops = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Tops?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };
     const fetchDataShirts = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Shirts?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };
     const fetchDataShoes = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Shoes?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };
     const fetchDataBags = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Bags?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };
     const fetchDataWatches = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Watches?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };
     const fetchDataJewellery = async () => {
        const response = await axios.get(
           `https://dummyjson.com/products/category/Jewelery?limit=12&skip=${(currentPage-1)*12}`
        );
        const data = await response.data;
        // setProdData(data);
         return data
     };

    
    const res1 = useQuery(["Tops"], fetchDataTops);
    const res2 = useQuery(["Shoes"], fetchDataShoes);
    const res3 = useQuery(["Bags"], fetchDataBags);
    const res4 = useQuery(["Shirts"], fetchDataShirts);
    const res5 = useQuery(["Watches"], fetchDataWatches);
    const res6 = useQuery(["Jewellery"], fetchDataJewellery);
      
    return [{...res1,key:"Tops"}, {...res2,key:"Shoes"},{...res3,key:"Bags"},
    {...res4,key:"Shirts"}, {...res5,key:"Watches"},{...res6,key:"Jewellery"}];


  }