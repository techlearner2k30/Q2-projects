import React from "react";
import Product from "./product";

export default function ProductList({ productsList } :any) {
  return (
    <div className="products flex gap-8 flex-wrap justify-center">
      {productsList.map((product:any, index:number) => (
        <Product
          id={product.id}
          title={product.title}
          imgUrl={product.image}
          price={product.price}
          textStyle=" font-bold text-xl text-black-900 py-1"
          wrapperstyle="flex flex-col py-6 w-96 gap-8 item-end justify-around"
        />
      ))}
    </div>

    // <div className='products flex gap-6'>
    //     {
    //         products.map( (product , index) => <Product title={product.title} imgUrl={product.imgUrl} price={product.price} textStyle='text-bold text-2xl text-black-900'/>)
    //     }

    // </div>
  );
}
