import React from 'react'
import Notation from './Notation'
import Carousel from '../components/Carousel'
import { GrFavorite } from "react-icons/gr";



function Post() {
  return (
    <section className="w-max relative">
      <div>
        <Carousel/>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-xl font-semibold">Localita Punta Farm, Italie</p> 
        <Notation/>
      </div>
      <p className="text-stone-500 text-xl">Particulier</p>
      <p className="text-stone-500 text-xl">2-9 Nov</p>
      <p className="mt-2 text-xl"><span className="text-xl font-semibold">84€</span> par nuit</p>  
      <GrFavorite className="text-3xl absolute top-4 right-4"/>
    </section>
  )
}

export default Post