import React from 'react'

const ProgressAttendent = () => {
    return (
        <div className='flex justify-between items-center  mt-2.5'>
            <div>
                <p className='font-bold text-xl text-[#22215B]'>Select Attendant</p>
            </div>
            <div className='progress-dropdown flex items-center '>
                <p className="text-xs font-bold text-[#22215B] mr-5">Total Processes are 173 in a row.</p>
                <select className='font-bold text-sm py-2.5 pl-4 pr-8 bg-[#fff]  rounded-xl btn-shadow mr-3 outline-none border-0'>
                    <option class="font-bold text-sm tracking-[-1px] bg-white  px-4 py-2">Sort & Load</option>
                    <option className='font-bold text-sm tracking-[-1px] bg-white  px-4 py-2'>Dumy</option>
                    <option className='font-bold text-sm tracking-[-1px] bg-white  px-4 py-2'>Dumy</option>
                </select>
                <button className='font-bold text-sm py-2.5 px-5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow mr-3 tracking-[-0.4px]'>Filter</button>
                <button className='font-bold text-sm py-2.5 px-5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow mr-3 tracking-[-0.4px]'>Move to Dryer</button>
                <button className='font-bold text-sm bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white py-2.5 px-5 rounded-xl btn-shadow tracking-[-0.4px]'>Show All</button>
            </div>
        </div>
    )
}

export default ProgressAttendent