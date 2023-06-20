import React from 'react'

export default function HorizontallistImages( { list  } : any) {
  return (
    <div className='flex justify-between mt-auto pt-10'>
    {
      list.map( (img:string) => <img src={`./assets/${img}.png`} alt ={img} /> )
    }
  </div>
  )
}
