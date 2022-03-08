import React from 'react'
import ActionBtn from "../../assets/images/action-btn.svg"
import CheckImg from "../../assets/images/check-btn.svg"
import BucketImg from "../../assets/images/bucketCheck.svg"
import ProgressImg from "../../assets/images/progress.png"
import EventImg from "../../assets/images/event-img.svg"
import CalenderImg from "../../assets/images/action-calendar.svg"
import ArrowLeft from "../../assets/images/arrow-left.svg"
import ArrowRight from "../../assets/images/arrow-right.svg"
import CommentImg from "../../assets/images/comment.svg"
// import DotICon from "../../assets/images/doticon.svg"
// import Author2Img from "../../assets/images/author2.svg"
// import VehicleImg from "../../assets/images/vehicle.svg"
// import DressImg from "../../assets/images/dress.svg"
import EventShowImg from "../../assets/images/event-show.svg"
//carosule
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CardsAction = () => {
  return (
    <div className='flex justify-between mt-[28px]'>
      <div className='w-[51.5%]'>
        <div className='flex justify-between items-center px-4 mt-2.5'>
          <p className='text-[22px] font-extrabold '>Action Buttons</p>
          <img src={ActionBtn} className="w-9" />
        </div>
        <div className='relative'>
          <div className='line-img1 flex justify-between bg-[#FF8F6B] py-[42px] pl-[52px] pr-[38px] rounded-xl mt-5'>
            <img src={CheckImg} className="w-12" />
            <div className='mr-[38px]'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>Check-In</h2>
              <p className='text-[14px] font-light text-[#030229]'>If you want to make Check-In</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img2 flex justify-between bg-[#FFD66B] py-12 pl-[52px] pr-[38px] rounded-xl mt-8'>
            <img src={ProgressImg} className="w-[50px]" />
            <div className='mr-2'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>In Progress</h2>
              <p className='text-[14px] font-light text-[#030229]'>Want to put Launry in In-Progress</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img3 flex justify-between bg-[#C0BEFF] py-12 pl-[52px] pr-[38px] rounded-xl mt-8'>
            <img src={BucketImg} className="w-[54px]" />
            <div className='mr-20'>
              <h2 className='text-[22px] font-extrabold text-[#030229]'>Check-Out</h2>
              <p className='text-[14px] font-light text-[#030229]'>Lets make it Check-Out</p>
            </div>
            <button className='text-white bg-black py-3 px-14 rounded-lg border border-2 text-base font-extrabold'>Lets go</button>
          </div>
        </div>

      </div>
      <div className='w-[46.5%] bg-white rounded-xl' >
        <div className='flex justify-between items-center mt-4 pl-5 pr-8'>
          <p className='text-lg font-semibold '>December 2, 2021</p>
          <div className='flex justify-center items-center '>
            <div className='mr-4 px-[7px] py-[6px] bg-white shadow rounded-lg'>
              <img src={EventImg} className="w-[14px]" />
            </div>

            <div className='mr-4 px-[7px] py-[6px] bg-white shadow rounded-lg'>
              <img src={CommentImg} className="w-[14px]" />
            </div>
            <div className='mr-4 px-[7px] py-[6px] bg-white shadow rounded-lg'>
              <img src={CalenderImg} className="w-[14px]" />
            </div>
            <div className='mr-3 '>
              <img src={ArrowLeft} className="w-[10px]" />
            </div>
            <div className=''>
              <img src={ArrowRight} className="w-[10px]" />
            </div>
          </div>
        </div>
        <div>
          <div className='mt-7 mr-8 ml-5  '>
           <div>
             {/* <img src={EventShowImg} /> */}
             <Carousel showThumbs={false} ariaLabel={false} autoPlay={true} labels={false}>
                <div>
                <img src={EventShowImg} />  
                </div>
                <div>
                <img src={EventShowImg} />
                </div>
                <div>
                <img src={EventShowImg} />
                </div>
            </Carousel>
           </div>


             {/* comment Three */}
            {/* <div className='bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-semibold text-[#0D062D]'>$11.9</p>
                  <span className='text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1'>Price</span>
                </div>
                <div className='flex justify-between items-center'>
                  <button className='mr-[14px] bg-[#FBF3DE] text-[#FFBF1B] font-semibold text-[10px] py-1.5 px-2 rounded'>In Process</button>
                  <img src={DotICon} className="w-[20px]" />
                </div>
              </div>
              <p className='font-normal leading-4 text-[10px] mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <div className='flex justify-between mt-3'>
                <div>
                  <img src={Author2Img} className="w-[22px]" />
                </div>
                <div className='flex'>
                  <div className='flex items-center mr-10'>
                    <div className='mr-1'>
                      <img src={VehicleImg} className="w-[18px]" />
                    </div>
                    <p className='text-xs font-normal  text-[#787486]'>12/4/2022</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='mr-1'>
                      <img src={DressImg} className="w-[12px]" />
                    </div>
                    <p className='text-xs font-normal text-[#787486]'>10 cloths</p>
                  </div>
                </div>
              </div>
            </div>
           
            <div className='bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-semibold text-[#0D062D]'>$11.9</p>
                  <span className='text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1'>Price</span>
                </div>
                <div className='flex justify-between items-center'>
                  <button className='mr-[14px] bg-[#FBE5DE] text-[#FF8F6B] font-semibold text-[10px] py-1.5 px-2 rounded'>Check-In</button>
                  <img src={DotICon} className="w-[20px]" />
                </div>
              </div>
              <p className='font-normal leading-4 text-[10px] mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <div className='flex justify-between mt-3'>
                <div>
                  <img src={Author2Img} className="w-[22px]" />
                </div>
                <div className='flex'>
                  <div className='flex items-center mr-10'>
                    <div className='mr-1'>
                      <img src={VehicleImg} className="w-[18px]" />
                    </div>
                    <p className='text-xs font-normal  text-[#787486]'>12/4/2022</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='mr-1'>
                      <img src={DressImg} className="w-[12px]" />
                    </div>
                    <p className='text-xs font-normal text-[#787486]'>10 cloths</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-semibold text-[#0D062D]'>$11.9</p>
                  <span className='text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1'>Price</span>
                </div>
                <div className='flex justify-between items-center'>
                  <button className='mr-[14px] bg-[#EEEEFC] text-[#9C99FF] font-semibold text-[10px] py-1.5 px-2 rounded'>Check-Out</button>
                  <img src={DotICon} className="w-[20px]" />
                </div>
              </div>
              <p className='font-normal leading-4 text-[10px] mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <div className='flex justify-between mt-3'>
                <div>
                  <img src={Author2Img} className="w-[22px]" />
                </div>
                <div className='flex'>
                  <div className='flex items-center mr-10'>
                    <div className='mr-1'>
                      <img src={VehicleImg} className="w-[18px]" />
                    </div>
                    <p className='text-xs font-normal  text-[#787486]'>12/4/2022</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='mr-1'>
                      <img src={DressImg} className="w-[12px]" />
                    </div>
                    <p className='text-xs font-normal text-[#787486]'>10 cloths</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default CardsAction