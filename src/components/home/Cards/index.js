import React from 'react'
import BagImg from "../../../assets/images/Bag.svg"
import Calendar from "../../../assets/images/Calendar.svg"
import Check from "../../../assets/images/check.svg"
import Subtract from "../../../assets/images/Subtract.svg"
const Cards = () => {
    return (
        <div className='flex justify-between mt-6'>
            <div className='w-[22.5%] flex justify-center items-center bg-white rounded-xl pl-7 pr-12 py-7'>
                <div className='p-5 bg-[#EAF6FC] rounded-full'>
                    <img src={BagImg} className="w-[16px]" />
                </div>
                <div className='flex flex-col ml-6'>
                    <h4 className='text-2xl font-extrabold text-[#030229]'>20</h4>
                    <p className='text-[14px] text-[#030229] opacity-70'>Check-In Waiting</p>
                </div>
            </div>
            <div className='w-[24%] flex justify-center items-center bg-white rounded-xl pl-7 pr-12 py-7'>
                <div className='p-5 bg-[#FFF7E1] rounded-full'>
                    <img src={Calendar} className="w-[16px]" />
                </div>
                <div className='flex flex-col ml-6'>
                    <h4 className='text-2xl font-extrabold text-[#030229]'>5</h4>
                    <p className='text-[14px] text-[#030229] opacity-70'>In Progress Laundry</p>
                </div>
            </div>
            <div className='w-[25%] flex justify-center items-center bg-white rounded-xl pl-7 pr-12 py-7'>
                <div className='p-5 bg-[#FFF4F0] rounded-full'>
                    <img src={Subtract} className="w-[16px]" />
                </div>
                <div className='flex flex-col ml-6'>
                    <h4 className='text-2xl font-extrabold text-[#030229]'>3</h4>
                    <p className='text-[14px] text-[#030229] opacity-70'>Upcoming Check-Out</p>
                </div>
            </div>
            <div className='w-[24%] flex justify-center items-center bg-white rounded-xl pl-7 pr-12 py-7'>
                <div className='p-5 bg-[#EFEFFF] rounded-full'>
                    <img src={Check} className="w-[16px] h-[18px]" />
                </div>
                <div className='flex flex-col ml-6'>
                    <h4 className='text-2xl font-extrabold text-[#030229]'>252</h4>
                    <p className='text-[14px] text-[#030229] opacity-70'>Completed Laundry</p>
                </div>
            </div>

        </div>
    )
}

export default Cards