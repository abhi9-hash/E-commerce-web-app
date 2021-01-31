import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function RelatedProducts() {
  const [data ,setData] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=> {
            try{
                const res = await axios.get('/products');
                setData(res.data);
            }catch(err){
                throw new Error(err);
            }
             };
          fetchData(); 
},[]);
  return (
    <>
      <div Style="padding-bottom:60px">
        <Carousel breakPoints={breakPoints}>
            {data.map((x,i)=>(                
                <Item key={i}>  
                  <a href={`/products/${x._id}`} Style="display:flex; justify-content:center; align-items:center"><img  Style="max-height: 40%; max-width:50%;" src={x.image}></img>
                  </a>
                 </Item>
            ))}
        </Carousel>
      </div>
    </>
  );
}

export  default RelatedProducts