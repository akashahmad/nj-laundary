import React from 'react'
const ProgressCheckBoxTable = () => {
	const CheckBoxHandler = (id, Checked) => {

		
		if (document.querySelectorAll('input[type=checkbox]'))
		{
			document.getElementById(id).style.backgroundColor = "#FFF";
		}
		else if(document.getElementById(id).checked = false) 
		{
			
			document.getElementById(id).style.backgroundColor = "#fcfcfc";
		}
	}
	return (
		<table class="progress-table table-auto w-full mt-4">
			<thead>
				<tr>
					<th className='w-[7.3%]'>
						<input type="checkbox" className='purple_checkbox' /></th>
					<th className="w-[17.5%] text-xs font-normal opacity-70 text-[#030229] text-left px-2.5 py-4">Order</th>
					<th className="w-[15.3%] text-xs font-normal opacity-70 text-[#030229] text-left px-2.5 py-4">In-Progress</th>
					<th className="w-[14.7%] text-xs font-normal opacity-70 text-[#030229] text-left px-2.5 py-4">Click-able</th>
					<th className="text-xs font-normal opacity-70 text-[#030229] text-left pl-2.5">Notes</th>
				</tr>
			</thead>
			<tbody className='w-full'>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row1">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl   rounded-bl-xl '>
						<input type="checkbox" className='purple_checkbox' id="check1" onClick={() => { CheckBoxHandler('row1') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold  text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>Arrora gaur</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#FEE8E1]  text-[#FF8F6B] px-2 py-0.5 rounded'>In storage</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>2:30 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl '>Lorem Ipsum is simply dummy </td>
				</tr>
				<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF]  rounded-xl w-full customs-shadow' id="row2">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row2') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>James Mullican</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#F0F0FD]  text-[#C0BEFF] px-2 py-0.5 rounded'>Washing</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>4:30 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>
				<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row3">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row3') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>Arrora gaur</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2] '><button className='bg-[#FDF5E1]  text-[#FFD66B] px-2 py-0.5 rounded'>Drying</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>6:30 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>
				<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row4">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row4') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>Arrora gaur</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#D3ECF8]  text-[#2DAAE2] px-2 py-0.5 rounded'>Folding Station</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>2:00 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>	<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row5">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row5') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>Ready</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#CFFDD5]  text-[#18FF2F] px-2 py-0.5 rounded'>Ready</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>9:45 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>
				<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row6">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row6') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>James Mullican</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#FEE8E1]  text-[#FF8F6B] px-2 py-0.5 rounded'>In storage</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>2:30 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>
				<div className='mb-3'></div>
				<tr className='row-bg hover:bg-[#FFF] rounded-xl w-full customs-shadow' id="row7">
					<th className='w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl'>
						<input type="checkbox" className='purple_checkbox' onClick={() => { CheckBoxHandler('row7') }} /></th>
					<td className='w-[17.5%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>Jhon Deo</td>
					<td className='w-[15.3%] text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'><button className='bg-[#F1F0FE]  text-[#C0BEFF] px-2 py-0.5 rounded'>Washing</button></td>
					<td className='w-[14.7%] text-sm font-semibold text-[#030229] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2]'>8:30 Pm</td>
					<td className=' text-sm font-normal text-[#030229] text-left px-2.5 py-6 rounded-tr-xl  rounded-br-xl'>Lorem Ipsum is simply dummy </td>
				</tr>

			</tbody>
		</table>
	)
}

export default ProgressCheckBoxTable