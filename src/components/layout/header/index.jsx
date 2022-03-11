import React from 'react'
const Header = ({ headerText, headerBtnShow }) => {

    return (
        <div className='flex flex-row justify-between mt-5'>
            <p className='text-2xl font-extrabold'>{headerText}</p>
            <div className='flex justify-between'>
                {headerBtnShow &&
                    <button className="bg-[#2DA9DF] text-white py-2 px-4 rounded-md mr-3 customs-shadow">Chat</button>
                }
                <button className='bg-[#2DA9DF] text-white py-2 px-4 rounded-md customs-shadow'>Contact us</button>
            </div>
        </div>
    )
}

export default Header