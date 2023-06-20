import Link from "next/link";
import React from "react";

export default function Product({
  id,
  imgUrl,
  title,
  price,
  textStyle,
  wrapperstyle,
} : any) {
  return (
    <div className={wrapperstyle}>
      {/* {          <img src={`./assets/${imgUrl}`} alt={title} /> */}
      <Link href={`/products/${id}`}>
        {" "}
        <img src={imgUrl} alt={title} />
      </Link>
      <div className="self-end">
        <h3 className={textStyle}>{title}</h3>
        <h3 className={textStyle}>$ {price}</h3>
      </div>
    </div>
  );
}
