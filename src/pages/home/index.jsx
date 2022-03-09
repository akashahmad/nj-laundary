import React from 'react'
// components 
import Cards from '../../components/home/Cards'
import CardsAction from "../../components/home/CardsAction"
import SwitchComponents from '../../components/home/SwitchComponents'
const Home = () => {
  return (
    <>
        <Cards />
        <div className='flex justify-between mt-[28px]'>
          <CardsAction />
          <SwitchComponents />
        </div>
    </>

  )
}

export default Home;