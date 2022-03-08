import React from 'react'
import Sidebar from './sidebar'
import Header from "./header"
// import Header from '../headerBar'
const Layout = (props) => {
  return (
    <div className='px-[34px]'>
      <div className='flex flex-row my-[30px]'>
        <Sidebar />
        <div className='w-full ml-[104px]'>
          <Header headerText/>
          {props?.children}
        </div>
      </div>
    </div>
  )
}

export default Layout