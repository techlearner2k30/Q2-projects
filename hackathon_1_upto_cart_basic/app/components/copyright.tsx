import React from 'react'
import HorizontalList from './helper/horizontallist'

const copyright = ['copyright @2023' , "Designed by : IOT-49967 " , "Coded by : IOT-49967" ]

export default function Copyright() {
  return (
    <div className='footer_bottom copyright flex justify-between mt-12 py-4 border-t-2 items-center'>
    <HorizontalList list={copyright} tag='li' wrapper='ul' style=" list-none flex-auto m-auto max-w-7xl"/>
    </div>
  )
}
