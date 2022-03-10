import React from 'react'
import ActionBtn from "../../../assets/images/action-btn.svg"
import CheckImg from "../../../assets/images/check-btn.svg"
import BucketImg from "../../../assets/images/bucketCheck.svg"
import ProgressImg from "../../../assets/images/progress.png"
const CardsAction = () => {
  return (
      <div className='w-[51.5%]'>
        <div className='flex justify-between items-center px-4 mt-2.5'>
          <p className='text-[22px] font-extrabold '>Action Buttons</p>
          <img src={ActionBtn} alt="loading" className="w-9 cursor-pointer" />
        </div>
        <div className='relative'>
          <div className='line-img1 flex justify-between bg-[#FF8F6B] py-[42px] pl-[52px] pr-[38px] rounded-xl mt-5'>
            <img src={CheckImg} alt="loading" className="w-12" />
            <div className='mr-[38px]'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>Check-In</h2>
              <p className='text-[14px] font-light text-[#030229]'>If you want to make Check-In</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img2 flex justify-between bg-[#FFD66B] py-12 pl-[52px] pr-[38px] rounded-xl mt-8'>
            <img src={ProgressImg} alt="loading" className="w-[50px]" />
            <div className='mr-2'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>In Progress</h2>
              <p className='text-[14px] font-light text-[#030229]'>Want to put Launry in In-Progress</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img3 flex justify-between bg-[#C0BEFF] py-12 pl-[52px] pr-[38px] rounded-xl mt-8'>
            <img src={BucketImg} alt="loading" className="w-[54px]" />
            <div className='mr-20'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>Check-Out</h2>
              <p className='text-[14px] font-light text-[#030229]'>Lets make it Check-Out</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>

      </div>
    
  )
}

export default CardsAction