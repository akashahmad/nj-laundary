import React from 'react'
// components 
import ArrowStraight from "../../assets/images/Straight.png"
import Branch1 from "../../assets/images/Branch.png"
import Stright2 from "../../assets/images/Straight2.png"
import Arrow2Up from "../../assets/images/arrow-d-u-2.png"
import Arrow2Down from "../../assets/images/arrow-d-b-2.png"
import smallArrowattendance from "../../assets/images/smallArrowattendance.png"
const AttendenceDriver = () => {
  return (
          <div className='bg-white mt-5 pt-4 rounded-xl'>
            <div className='flex items-center justify-end'>
              <button className='text-sm py-[9px] px-[17px] shadow rounded-xl bg-[#22215B] text-white mr-2.5'>Confirm</button>
              <button className='text-sm py-[9px] px-2.5 shadow rounded-xl mr-4'>Edit</button>
            </div>
            <div className='flex flex-col justify-center items-center mt-[-22px]'>
              <p className='text-[25px] font-normal text-[#22215B] tracking-[-0.69px]'>Attendance/Driver</p>
              <img src={ArrowStraight} className="mt-0.5 w-[22px]" />
              <div className='mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg'>
                <p className='text-xl font-bold bg-[#E0F5FF] text-[#242938] font-roboto py-[9px] px-[98px] rounded-lg'>Service</p>
              </div>
              <img src={Branch1} className="mt-3" />
              <div className='flex items-center justify-between w-[35%] mx-auto mt-5'>
                <div className='py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg'>
                  <p className='text-xl font-bold bg-[#FFF4D8] text-[#242938] font-roboto py-[9px] px-8 rounded-lg'>Pickup</p>
                </div>
                <div className='py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg'>
                  <p className='text-xl font-bold bg-[#D9E2FF] text-[#242938] font-roboto py-[9px] px-6 rounded-lg'>Drop-Off</p>
                </div>
              </div>
              <div className='flex items-center justify-between w-[25.5%] mx-auto mt-3'>
                <img src={smallArrowattendance} />
                <img src={smallArrowattendance} />
              </div>
              <div className='flex items-center justify-between w-[38.5%] mx-auto'>
                <div className='mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg'>
                  <p className='text-xl font-bold bg-[#FFE2D9] leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-3 rounded-lg text-center'>Customer name/ Order #</p>
                </div>
                <div className='mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg w-[43.5%] '>
                  <p className='text-xl font-bold bg-[#E2E1FF] text-[#242938] font-roboto py-[17px] px-3 rounded-lg'>Customer name</p>
                </div>
              </div>
              <div>
                <img src={Arrow2Up} className="mt-3" />
              </div>
              <div className='mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg'>
                <p className='text-xl font-normal bg-[#F4F5F7] text-[#242938] font-roboto py-[9px] px-[98px] rounded-lg'># of Bags</p>
              </div>
              <div>
                <img src={Arrow2Down} className="mt-3" />
              </div>
              <div className='flex items-center justify-between w-[38.5%] mx-auto'>
                <div className='mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA]  rounded-lg w-[43.5%] '>
                  <p className='text-xl font-normal bg-[#F4F5F7] text-[#242938]  font-roboto py-[17px] px-3 rounded-lg text-center'>Bag Color</p>
                </div>
                <div className='mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg'>
                  <p className='text-xl font-normal bg-[#F4F5F7] leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-3 rounded-lg text-center'>Weight in=X # of Bags</p>
                </div>
              </div>
              <div className='flex items-center justify-between w-[25.5%] mx-auto mt-[22px]'>
                <img src={Stright2} />
                <img src={Stright2} />
              </div>
              <div className='flex items-center justify-between w-[38.5%] mx-auto'>

                <div className='mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg'>
                  <p className='text-xl font-normal bg-[#F4F5F7] leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-3 rounded-lg text-center'>Are all bass Tagged?</p>
                </div>
                <div className='mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA]  rounded-lg w-[43.5%] '>
                  <p className='text-xl font-normal bg-[#F4F5F7] text-[#242938]  font-roboto py-[17px] px-3 rounded-lg text-center'>Read Prompt</p>
                </div>
              </div>
              <div className='d-flex m-10'>
                <button className='text-sm font-bold py-[9px] bg-[#FBDBDB] text-[#FF5B5B] px-4 btn-shadow rounded-xl mr-2.5'>Stop</button>
                <button className='text-sm font-bold py-[9px] px-[17px] btn-shadow rounded-xl bg-[#22215B] text-white mr-2.5'>New Customer</button>
                <button className='text-sm font-bold py-[9px] px-2.5 btn-shadow rounded-xl mr-2.5 text-[#22215B]'>Service</button>
              </div>
            </div>
          </div>
      
  )
}

export default AttendenceDriver

