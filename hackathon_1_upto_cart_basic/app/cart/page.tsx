"use client";
import React, { useContext } from "react";
import CartContext from "../components/Context/cartcontext";

export default function Cart() {
  const cartData:any = useContext(CartContext);
  {
    if (!cartData.cartGlobalState || !cartData.cartGlobalState[0])
      return <h2>No items in cart yet</h2>;
  }

  let totalQuantity = 0;

  return (
    <div className="flex m-auto flex-col">
      {cartData.cartGlobalState.map((item:any, index:number) => {
        let specKeys = Object.keys(item?.specs);
       
        return (
          <div className="flex gap-5 w-[760px] p-8 bg-grey-300 shadow-lg my-4 rounded-2xl">
            <img src={item.imageurl} alt="Product" className="w-[40%]" />
            <div className="flex flex-col p-5 gap-4 w-[60%]">
              <h2 className="font-bold text-xl text-blue-800">{item.title} </h2>
          <div
            key={index}
            className="flex flex-col gap-4"
          >
            
            
            
            
            {specKeys.map((key) => {
              totalQuantity = totalQuantity + Number(item.specs[key]);
              console.log("totalQuantity" , totalQuantity);
              return (
                <ul className="flex gap-2 items-center text-base">
                  <li className="border-2 p-4 ">
                    {" "}
                    Size : <span className="font-bold">{key}</span>
                  </li>
                  <li className="border-2 p-4 ">
                    {" "}
                    Quantity :{" "}
                    <span className="font-bold">{item?.specs[key]}</span>
                  </li>
                  <li className="border-2 p-4 ">
                    {" "}
                    Unit Price : <span className="font-bold">{item.unitPrice}</span>
                  </li>
                </ul>
              );
            })}
            </div>
           
            <div className="flex justify-between items-center">
              <ul className="flex w-full">
              <li className="border-2 p-4 ">
              Total Quantity :
              <span className="font-bold">
                {totalQuantity}
              </span>
              </li>
              <li className="border-2 p-4 ">
              Total Price :
              <span className="font-bold">
                {item.unitPrice * totalQuantity}
              </span>
              </li>
              </ul>
            </div>
          
          </div>
          </div>
        );
      })}
    </div>
  );
}
