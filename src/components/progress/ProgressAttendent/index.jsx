import React from 'react'
import { Link } from 'react-router-dom'
const ProgressAttendent = () => {
    return (
        <div className='flex justify-between items-center  mt-2.5'>
            <div>
                <p className='font-bold text-xl text-[#22215B]'>Select Attendant</p>
            </div>
            <div className='progress-dropdown flex items-center '>
                <p className="text-xs font-bold text-[#22215B] mr-5">Total Processes are 173 in a row.</p>
                <div className="">
                    <div className="group relative">
                        <button className="button-effects-sec button-atnd  bg-white pl-5 pr-5 py-2.5 flex justify-between text-[#22215B] text-sm items-center btn-shadow rounded-xl  tracking-[-1px] font-bold hover:bg-[#22215B]  hover:text-white mr-3">
                            Sort & Load
                            <svg
                                className="ml-3 form-btn"
                                width="9"
                                height="7"
                                viewBox="0 0 9 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.10204 6.14683C4.80848 6.56284 4.19152 6.56284 3.89796 6.14683L0.556596 1.41167C0.212164 0.923569 0.561243 0.25 1.15864 0.25L7.84136 0.249999C8.43876 0.249999 8.78784 0.923567 8.4434 1.41167L5.10204 6.14683Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <nav
                            tabindex="0"
                            className="bg-white invisible rounded w-32 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl z-40"
                        >
                            <ul className="">
                                <li>
                                    <Link
                                       to="#"
                                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                    >
                                        Filter
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Move to Dryer</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100 text-sm" >
                                        Show All
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className='button-atnd font-bold text-sm py-2.5 px-5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow mr-3 tracking-[-0.4px]'>Filter</button>
                <button className='button-atnd font-bold text-sm py-2.5 px-5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow mr-3 tracking-[-0.4px]'>Move to Dryer</button>
                <button className='button-atnd font-bold text-sm bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white py-2.5 px-5 rounded-xl btn-shadow tracking-[-0.4px]'>Show All</button>
            </div>
        </div>
    )
}

export default ProgressAttendent