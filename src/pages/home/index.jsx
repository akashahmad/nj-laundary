import React from 'react'
// components 
import Cards from '../../components/home/Cards'
import CardsAction from "../../components/home/CardsAction"
import Carousels from '../../components/home/Carousel'
const Home = () => {
  return (
    <>
        <Cards />
        <div className='flex justify-between mt-[28px]'>
          <CardsAction />
          <Carousels />
        </div>
    </>

  )
}

export default Home;