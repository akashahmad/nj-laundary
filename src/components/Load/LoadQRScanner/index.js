import React from 'react'
import ArrowV from "../../../assets/images/arrowV.svg"
import InstImg from "../../../assets/images/instnt-img.svg"
import ProductImg from "../../../assets/images/product.png"
import ArrowRight from "../../../assets/images/btn-arrow-r.svg"
import TimeArrow from "../../../assets/images/timearrow.png"
import product1Img from "../../../assets/images/product-1.webp"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
const LoadQRScanner = () => {
    const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    return (
        <div className='ml-12   w-[63%] '>
            <form action="" method="">
                <div className='w-full rounded-xl bg-white px-[28px] pt-6 pb-[28px] mb-5'>
                    <div className='flex justify-between'>
                        <div className='w-[60.3%]'>
                            <label className='font-bold text-sm text-[#22215B] mr-[18px]'>Washing Intst.</label>
                            <div className='mt-2.5 relative'>
                                <input type="text" name="" value="418369532143dfgfghg567" className='text-sm font-normal w-full py-3 px-[18px] customer-shadow rounded-xl ' />
                                <img src={InstImg} className="absolute top-[13px] right-[28px]" />
                            </div>
                        </div>
                        <div className='w-[37.5%]'>
                            <label className='font-bold text-sm text-[#22215B]'>Washing Time</label>
                            <div className='mt-2 relative'>
                                {/* <input type="time" name="" className='text-sm font-normal w-full py-3 px-[18px] customer-shadow rounded-xl outline-none' /> */}
                                <div className="shadow-xl px-5 pt-3 pb-[9px] flex justify-between rounded-xl mt-3">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={1}>
                                            <DesktopTimePicker
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                {/* <img src={TimeArrow} className="absolute top-[2px] right-[6px] w-[30px]" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-xl bg-white px-[28px] pt-[30px] pb-[28px]'>
                    {/* <img src={ProductImg} /> */}
                    {/* Product listing Start */}
                    <div className='flex justify-start  items-center pb-1 bg-[#F6F6F9]'>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                    </div>
                    <div className='flex justify-start  items-center pb-1 bg-[#F6F6F9]'>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                    </div>
                    <div className='flex justify-start  items-center pb-1 bg-[#F6F6F9]'>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[8px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                    </div>
                    <div className='flex justify-start  items-center pb-1 bg-[#F6F6F9]'>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                    </div>
                    <div className='flex justify-start  items-center  bg-[#F6F6F9]'>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                        <div className='flex flex-col items-center bg-white w-[12%] button-effect px-0.5 pt-1 pb-2.5 mr-1'>
                            <p className='text-[8px] font-bold'>Backing Soda</p>
                            <img src={product1Img} className="w-[38px]" />
                            <p className='text-[10px] font-bold'>$1.25 per load</p>
                        </div>
                    </div>
                    {/* Product Listing End */}
                    <div className='flex justify-center items-center mt-10'>
                        <div className='relative'>
                            <button className='text-sm font-bold text-[#22215B] bg-[#FFF] pr-11 pl-5 py-2.5  rounded-xl customer-shadow'>Load Another</button>
                            <img src={ArrowRight} className="absolute top-[15px] right-[20px] " />
                        </div>
                        <button className='text-sm font-bold text-white bg-[#22215B] px-4 py-2.5 ml-5 rounded-xl customer-shadow'>Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoadQRScanner