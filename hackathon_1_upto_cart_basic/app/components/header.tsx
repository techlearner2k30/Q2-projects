import React, { useContext } from "react";
import Nav from "./header/nav";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import CartContext from "./Context/cartcontext";

const Header = () => {
  const cartData:any = useContext(CartContext);
  console.log("inside header");
  console.log(cartData.cartGlobalState);

  return (
    <header className="flex gap-5 py-8 justify-between items-center">
      <Link className="" href={`/`}>
        <img src="/assets/Logo.png" alt="logo" />
      </Link>
      <Nav />
      <input
        type="search"
        name="search"
        id="search"
        className="border-solid border-2 border-gray-100 p-1 rounded-lg"
      />
      <div className="circle_wrapper rounded-full relative">
       <Link href='/cart'> 
        <AiOutlineShoppingCart />
          {cartData.cartGlobalState[0] && (
            <span className="absolute text-white text-sm rounded-full w-5 h-5 top-[-5px] text-center bg-red-700">
              {cartData.cartGlobalState.length}
            </span>
          
        )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
