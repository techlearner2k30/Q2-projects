import Image from 'next/image'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer/footer'
import Copyright from './components/copyright'
import HomePromo from './components/homepromo'
import HomeFeaturedProducts from './components/homefeaturedproducts'


const productsList = [
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
]

export default function Home() {
  return (
  <>

      <Hero />

      <HomePromo productsList={productsList.slice(0,2)} />

      <HomeFeaturedProducts productsList={productsList.slice(0,3)}/>

    </>
  )
}
