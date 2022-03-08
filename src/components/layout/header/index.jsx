import React from 'react'
const Header = ({ headerText }) => {
console.log(window.location.pathname)
    return (
        <div className='flex flex-row justify-between mt-5'>
            <p className='text-2xl font-extrabold'>{headerText}</p>
            <div className='flex justify-between'>
                <button className={`bg-[#2DA9DF] text-white py-2 px-4 rounded-md mr-3 ${window.location.pathname === "/" ? "block" : "hidden"}`}>Chat</button>
                <button className='bg-[#2DA9DF] text-white py-2 px-4 rounded-md'>Contact us</button>
            </div>
        </div>
    )
}

export default Header