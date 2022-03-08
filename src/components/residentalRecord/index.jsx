// import { tab } from '@testing-library/user-event/dist/tab'
// import React from 'react'
// import DateImg from "../../assets/images/date-arrow.svg"
// const ResidentalRecord = () => {
//     return (
//         <table className='mt-2.5 w-full '>
//             <tr>
//                 <div className='flex'>
//                     <th className='font-normal text-[11px] w-[7%] pl-2 text-left  text-[#030229] text-opacity-70 relative'>Date
//                         <img src={DateImg} className="" /></th>
//                     {/* <img src={DateImg} className="absolute right-[40px] top-[12px]" /></th> */}
//                 </div>
//                 <th className='font-normal text-[11px] w-[7%] text-[#030229] text-opacity-70'>Customer Name</th>
//                 <th className='font-normal text-[11px] w-[6.5%]  text-[#030229] text-opacity-70'>Service Type</th>
//                 <th className='font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70'>Weight in</th>
//                 <th className='font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70'>Weight out</th>
//                 <th className='font-normal text-[11px] w-[5.5%] text-[#030229] text-opacity-70'>Total Bags Picked Up</th>
//                 <th className='font-normal text-[11px] w-[6%] text-[#030229] text-opacity-70'>Total Hangers To Deliver</th>
//                 <th className='font-normal text-[11px] w-[5.3%] text-[#030229] text-opacity-70'>Total bags To Deliver</th>
//                 <th className='font-normal text-[11px] w-[6%] text-[#030229] text-opacity-70'>Bag color</th>
//                 <th className='font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70'>Washer #</th>
//                 <th className='font-normal text-[11px] w-[6.5%] text-[#030229] text-opacity-70'>Washer Time</th>
//                 <th className='font-normal text-[11px] w-[4.3%] text-[#030229] text-opacity-70'>Dryer #</th>
//                 <th className='font-normal text-[11px] w-[5.5%] text-[#030229] text-opacity-70'>Dryer Time</th>
//                 <th className='font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70'>Fold Station</th>
//                 <th className='font-normal text-[11px] w-[5.2%] text-[#030229] text-opacity-70'>Fold Time</th>
//                 <th className='font-normal text-[11px] w-[11.5%] text-[#030229] text-opacity-70 text-left pl-4'>Notes</th>
//             </tr>
//             <tbody>
//                 <div className='mt-3'></div>
//                 <tr className='bg-[#FDFDFE] custom-shadow'>
//                     <td className='w-[7%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r rounded-tl-xl rounded-bl-xl'>12/8/2020</td>
//                     <td className='w-[7%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Arrora gaur</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#000000] border-r'>Dry Clean</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 kg</td>
//                     <td className='w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 lb</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Blue grey</td>
//                     <td className='w-[5%] text-xs py-5 font-semibold pl-2 text-[#000000] border-r'>1</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r' >1-5</td>
//                     <td className='w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>30 min</td>
//                     <td className='w-[12.5%] text-xs font-semibold py-5 pl-2 rounded-tr-xl rounded-br-xl'>Lorem Ipsum is simply..</td>
//                 </tr>
//                 <div className='mt-3'></div>
//                 <tr className='bg-[#FDFDFE] custom-shadow'>
//                     <td className='w-[7%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r rounded-tl-xl rounded-bl-xl'>12/8/2020</td>
//                     <td className='w-[7%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Arrora gaur</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#000000] border-r'>Dry Clean</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 kg</td>
//                     <td className='w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 lb</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Blue grey</td>
//                     <td className='w-[5%] text-xs py-5 font-semibold pl-2 text-[#000000] border-r'>1</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r' >1-5</td>
//                     <td className='w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>30 min</td>
//                     <td className='w-[12.5%] text-xs font-semibold py-5 pl-2 rounded-tr-xl rounded-br-xl'>Lorem Ipsum is simply..</td>
//                 </tr>
//                 <div className='mt-3'></div>
//                 <tr className='bg-[#FDFDFE] custom-shadow'>
//                     <td className='w-[7%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r rounded-tl-xl rounded-bl-xl'>12/8/2020</td>
//                     <td className='w-[7%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Arrora gaur</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#000000] border-r'>Dry Clean</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 kg</td>
//                     <td className='w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 lb</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Blue grey</td>
//                     <td className='w-[5%] text-xs py-5 font-semibold pl-2 text-[#000000] border-r'>1</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r' >1-5</td>
//                     <td className='w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>30 min</td>
//                     <td className='w-[12.5%] text-xs font-semibold py-5 pl-2 rounded-tr-xl rounded-br-xl'>Lorem Ipsum is simply..</td>
//                 </tr>
//                 <div className='mt-3'></div>
//                 <tr className='bg-[#FDFDFE] custom-shadow'>
//                     <td className='w-[7%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r rounded-tl-xl rounded-bl-xl'>12/8/2020</td>
//                     <td className='w-[7%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Arrora gaur</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#000000] border-r'>Dry Clean</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 kg</td>
//                     <td className='w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>1.2 lb</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>4</td>
//                     <td className='w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>Blue grey</td>
//                     <td className='w-[5%] text-xs py-5 font-semibold pl-2 text-[#000000] border-r'>1</td>
//                     <td className='w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30</td>
//                     <td className='w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r'>30 min</td>
//                     <td className='w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r' >1-5</td>
//                     <td className='w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r'>30 min</td>
//                     <td className='w-[12.5%] text-xs font-semibold py-5 pl-2 rounded-tr-xl rounded-br-xl'>Lorem Ipsum is simply..</td>
//                 </tr>

//             </tbody>
//         </table>
//     )
// }

// export default ResidentalRecord