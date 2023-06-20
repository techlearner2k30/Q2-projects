import React from 'react'
import LeftSec from './hero/leftsec'
import RightSec from './hero/rightsec'

function Hero() {
  return (
    <section className='flex justify-center items-center w-full gap-12'>
        <LeftSec />
        <RightSec />
    </section>
  )
}

export default Hero