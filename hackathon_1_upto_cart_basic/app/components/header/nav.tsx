import Link from 'next/link'
import React from 'react'

const navList = ["Female", "Male" , "Kids" , "All Products"];
const navUrl = ["female", "male" , "kids" , "products"];

export default function Nav () {


  return (
    <ul className='flex justify-evenly gap-8'>
      {
        navList.map( (item,index) => <li key={index}> <Link href={`/${navUrl[index]}`}>{item}</Link> </li> )
      }
    </ul>
  )
}
