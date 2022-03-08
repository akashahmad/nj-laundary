import React from 'react'
import ArrowV from "../../../assets/images/arrowV.svg"
import UserImg1 from "../../../assets/images/c-r-img1.png"
import UserImg2 from "../../../assets/images/c-r-img2.png"
import UserImg3 from "../../../assets/images/c-r-img3.png"
import UserImg4 from "../../../assets/images/c-r-img4.png"
const  CustomerCards = () => {
  return (
    <div className='bg-white rounded-xl w-[32.5%] px-5 py-5 overflow-y-scroll h-[732px]'>
    <div className='flex justify-between pr-10 mb-2.5'>
        <h2 className='text-2xl font-bold'>Customers</h2>
         {/* dropdown start */}
         <div className="group relative">
                    <button className="button-effects-sec">
                        <img src={ArrowV} />
                    </button>
                    <nav tabindex="0" className="bg-white invisible  w-32 absolute right-0 top-[24px] transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow rounded-md z-40" >
                        <ul className="">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Edit</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Delete</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Reply</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* dropdown end here */}
    </div>
       {/* First Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#567DF4] hover:rounded-xl NC'>
        <div><p className='font-extrabold p-2.5 text-[#567DF4] bg-[#EEF2FE] rounded-full'>NC</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold text-[#22215B] NC-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] NC-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1  NC-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Second Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#FFC700] hover:rounded-xl Gf'>
        <p className='font-extrabold p-2.5 text-[#FFC700] bg-[#FCF7E4] rounded-full'>GF</p>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] GF-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] GF-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 GF-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Third Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#22215B] hover:rounded-xl DH'>
        <div><p className='font-extrabold p-2.5 text-[#22215B] bg-[#E9E9EF] rounded-full'>DH</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] text-DH'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] text-DH'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 text-DH'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Fourth Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#4CE364] hover:rounded-xl DM'>
        <div><p className='font-extrabold p-2.5 text-[#4CE364] bg-[#EDFCF0] rounded-full'>DM</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] DM-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] DM-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 DM-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Fifth Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#FF5A5A] hover:rounded-xl PC'>
        <div><p className='font-extrabold p-2.5 text-[#FF5A5A] bg-[#FFEFEF] rounded-full'>PC</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] PC-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] PC-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 PC-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Six Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#567DF4] hover:rounded-xl SM'>
        <div><p className='font-extrabold p-2.5 text-[#567DF4] bg-[#EEF2FE] rounded-full'>SM</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] SM-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] SM-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 SM-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* seventh Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#567DF4] hover:rounded-xl NC'>
        <div><p className='font-extrabold p-2.5 text-[#567DF4] bg-[#EEF2FE] rounded-full'>NC</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] NC-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] NC-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 NC-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Eight Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#FFC700] hover:rounded-xl Gf'>
        <div><p className='font-extrabold p-2.5 text-[#FFC700] bg-[#FCF7E4] rounded-full'>GF</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] GF-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] GF-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 GF-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Nine Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#22215B] hover:rounded-xl DH'>
        <div><p className='font-extrabold p-2.5 text-[#22215B] bg-[#E9E9EF] rounded-full'>DH</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] DH-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] DH-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 DH-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
    {/* Ten Customer */}
    <div className='flex justify-between items-center mt-1  py-2.5 px-5 border border-white hover:border-[#4CE364] hover:rounded-xl DM'>
        <div><p className='font-extrabold p-2.5 text-[#4CE364] bg-[#EDFCF0] rounded-full'>DM</p></div>
        <div className='flex flex-col mr-3'>
            <h2 className='text-sm font-bold  text-[#22215B] DM-text'>Name</h2>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm font-bold text-[#22215B] DM-text'>Start at:</h3>
                <span className='text-xs text-[#22215B] ml-1 DM-text'>2pm-14 Jan,2021</span>
            </div>
        </div>
        <div className='flex justify-center items-center relative'>
            <div className=' w-[6px]'>
                <img src={UserImg4} className="absolute w-full -top-[14px] z-30 -left-[22px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg3} className="absolute w-full -top-[14px] z-20  -left-[8px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg2} className="absolute w-full -top-[14px] z-10 left-[4px]" />
            </div>
            <div className=' w-[6px]'>
                <img src={UserImg1} className="absolute w-full -top-[14px] z-0 " />
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomerCards