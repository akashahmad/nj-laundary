import React, { useState } from 'react';
import EventImg from "../../../assets/images/event-img.svg";
import CalenderImg from "../../../assets/images/action-calendar.svg";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import CommentImg from "../../../assets/images/comment.svg";
import EventShowImg from "../../../assets/images/event-show.svg";
import VehicleImg from "../../../assets/images/vehicle.svg";
import DotICon from "../../../assets/images/doticon.svg";
import Author2Img from "../../../assets/images/author2.svg";
import DressImg from "../../../assets/images/dress.svg";
import CalenderIcon from "../../../assets/images/calendar-h-icon.svg"
//carosule
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carousels = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const changeHandler = (param1, param2, param3) => {
    setShowCarousel(param1);
    setShowCalendar(param2);
    setShowCards(param3);
  }
  return (
    <div className='w-[46.5%] bg-white rounded-xl' >
      <div className='flex justify-between items-center mt-4 pl-5 pr-8'>
        <div className='flex'>
        <p className='text-lg font-semibold mr-4'>December 2, 2021</p>
        <button className='mr-2'>
            <div className="w-[14px] text-[#364A87]" >
              <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4109 0.768617L13.4119 1.51824C16.1665 1.73413 17.9862 3.61119 17.9891 6.48975L18 14.9155C18.0039 18.054 16.0322 19.985 12.8718 19.99L5.15188 20C2.01119 20.004 0.0148166 18.027 0.0108673 14.8795L6.64975e-06 6.55272C-0.00394266 3.65517 1.75153 1.78311 4.50617 1.53024L4.50518 0.780611C4.5042 0.340832 4.83001 0.00999726 5.26444 0.00999726C5.69886 0.00899776 6.02468 0.338833 6.02567 0.778612L6.02666 1.47826L11.8914 1.47027L11.8904 0.770616C11.8894 0.330837 12.2152 0.00100177 12.6497 2.26549e-06C13.0742 -0.000997234 13.4099 0.328838 13.4109 0.768617ZM1.52148 6.86157L16.4696 6.84158V6.49175C16.4272 4.34283 15.349 3.21539 13.4138 3.04748L13.4148 3.81709C13.4148 4.24688 13.0801 4.5877 12.6556 4.5877C12.2212 4.5887 11.8943 4.24887 11.8943 3.81909L11.8934 3.0095L6.02863 3.01749L6.02962 3.82609C6.02962 4.25687 5.70479 4.5967 5.27036 4.5967C4.83594 4.5977 4.50913 4.25887 4.50913 3.82809L4.50815 3.05847C2.58286 3.25137 1.51753 4.38281 1.52049 6.55072L1.52148 6.86157ZM12.2399 11.4043V11.4153C12.2498 11.8751 12.625 12.2239 13.0801 12.2139C13.5244 12.2029 13.8789 11.8221 13.869 11.3623C13.8483 10.9225 13.4918 10.5637 13.0485 10.5647C12.5944 10.5747 12.2389 10.9445 12.2399 11.4043ZM13.0554 15.892C12.6013 15.882 12.235 15.5032 12.234 15.0435C12.2241 14.5837 12.5884 14.2029 13.0426 14.1919H13.0525C13.5165 14.1919 13.8927 14.5707 13.8927 15.0405C13.8937 15.5102 13.5185 15.891 13.0554 15.892ZM8.17212 11.4203C8.19187 11.8801 8.56804 12.2389 9.02221 12.2189C9.46651 12.1979 9.82096 11.8181 9.80121 11.3583C9.79035 10.9085 9.42504 10.5587 8.98074 10.5597C8.52657 10.5797 8.17113 10.9605 8.17212 11.4203ZM9.02616 15.8471C8.57199 15.8671 8.1968 15.5082 8.17607 15.0485C8.17607 14.5887 8.53052 14.2089 8.98469 14.1879C9.42899 14.1869 9.79529 14.5367 9.80516 14.9855C9.82589 15.4463 9.47046 15.8261 9.02616 15.8471ZM4.10433 11.4553C4.12408 11.915 4.50025 12.2749 4.95442 12.2539C5.39872 12.2339 5.75317 11.8531 5.73243 11.3933C5.72256 10.9435 5.35725 10.5937 4.91196 10.5947C4.45779 10.6147 4.10334 10.9955 4.10433 11.4553ZM4.95837 15.8521C4.5042 15.8731 4.12901 15.5132 4.10828 15.0535C4.10729 14.5937 4.46273 14.2129 4.9169 14.1929C5.3612 14.1919 5.7275 14.5417 5.73737 14.9915C5.7581 15.4513 5.40365 15.8321 4.95837 15.8521Z" fill="currentColor" />
              </svg>
            </div>
          </button>
          <img src={CalenderIcon} className="w-2.5 cursor-pointer" />
          </div>
        <div className='flex justify-center items-center '>
          <button className='index-component-button mr-4 pl-[7px] pr-2 py-[6px] bg-white shadow rounded-lg  btn-hover hover:bg-[#364A87] focus:bg-[#364A87] hover:text-white'>
            <div className="w-[14px]  text-[#364A87] hover:text-white" onClick={() => { changeHandler(true, false, false) }} >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7802 5.02865C15.7709 4.9705 15.7615 4.91113 15.7518 4.84965L15.748 4.82688C15.6287 4.08432 15.2334 3.35002 14.6572 2.74785C14.0811 2.14568 13.3508 1.7089 12.6012 1.553C12.4196 1.5155 12.2181 1.47834 12.0033 1.44397C11.995 1.28148 11.9862 1.11889 11.9768 0.956187C11.9525 0.544056 11.6228 0.175006 11.2434 0.143752C10.8641 0.112503 10.5697 0.429667 10.5841 0.849255C10.5891 0.98741 10.594 1.12557 10.5988 1.26396C9.99539 1.20459 9.34891 1.16397 8.69986 1.14712C8.69863 1.02336 8.69752 0.899484 8.6964 0.775268C8.69149 0.350309 8.37934 0 7.9997 0C7.62005 0 7.30791 0.350309 7.30288 0.772811C7.30288 0.897799 7.30176 1.02178 7.29942 1.14466C6.64883 1.16151 5.99866 1.20247 5.39335 1.26217C5.39792 1.12402 5.40283 0.985747 5.40808 0.847269C5.42247 0.427881 5.12685 0.108284 4.74877 0.141966C4.37069 0.175669 4.03981 0.543813 4.01536 0.955944C4.0052 1.11876 3.99616 1.28148 3.98824 1.44395C3.77576 1.479 3.57768 1.51549 3.39855 1.55265C2.64863 1.70889 1.91935 2.14633 1.34218 2.7475C0.765123 3.34879 0.370389 4.08432 0.252344 4.82676C0.252344 4.83424 0.249889 4.84171 0.248884 4.8493C0.238841 4.9118 0.229466 4.9705 0.220093 5.02864C5.39959 4.64607 10.6005 4.64607 15.7803 5.02864L15.7802 5.02865Z" fill="currentColor" />
                <path d="M15.9262 6.10715C10.6536 5.87346 5.3461 5.87346 0.0734682 6.10715C0.0293868 6.56839 -0.00498431 7.15147 0.000595145 8.09098C0.02749 9.97429 0.159286 10.5905 0.313079 11.5024C0.313079 11.5098 0.315869 11.5177 0.317096 11.5251C0.449004 12.2713 0.853644 13.0165 1.43139 13.6334C2.00913 14.2502 2.73315 14.7014 3.47216 14.8692C4.55988 15.1217 6.3356 15.3314 8.00115 15.3242C9.66662 15.3314 11.4422 15.1218 12.5301 14.8692C13.2691 14.7014 13.9918 14.2483 14.5709 13.6334C15.1499 13.0185 15.5536 12.2714 15.6852 11.5251C15.6852 11.5173 15.6877 11.5098 15.6892 11.502C15.8417 10.5903 15.9736 9.97372 15.9994 8.09122C16.0048 7.15168 15.9704 6.5686 15.9265 6.10738L15.9262 6.10715ZM10.3348 9.84935L9.64734 10.7434C9.60147 10.8032 9.57759 10.8769 9.5796 10.9524L9.61085 12.0792C9.61364 12.1872 9.56319 12.2897 9.47581 12.3533C9.38843 12.417 9.27528 12.4335 9.17339 12.3975L8.11098 12.0203C8.04011 11.9956 7.963 11.9956 7.89225 12.0203L6.82984 12.3975C6.72784 12.4335 6.61479 12.417 6.52741 12.3533C6.44003 12.2897 6.38948 12.1872 6.39238 12.0792L6.42363 10.9524C6.42563 10.8769 6.40164 10.8032 6.35577 10.7434L5.66836 9.84935C5.60251 9.76354 5.5831 9.65071 5.61658 9.54781C5.65006 9.44481 5.73208 9.36502 5.83586 9.33444L6.91702 9.01481V9.0147C6.98933 8.99339 7.05205 8.94786 7.09479 8.8857L7.73256 7.9561C7.79382 7.86682 7.89515 7.81359 8.00351 7.81359C8.11176 7.81359 8.21309 7.86682 8.27436 7.9561L8.91212 8.8857C8.95487 8.94786 9.01758 8.99339 9.0899 9.0147L10.1711 9.33433V9.33444C10.2743 9.36591 10.3553 9.44615 10.388 9.54893C10.4207 9.65171 10.4008 9.76397 10.3348 9.84935H10.3348Z" fill="currentColor" />
              </svg>
            </div>
          </button>
          <button className='index-component-button mr-4 pl-[7px] pr-2 py-[6px] bg-white hover:bg-[#364A87] focus:bg-[#364A87] shadow rounded-lg btn-hover'>
            <div className="w-[14px] text-[#364A87]" onClick={() => { changeHandler(false, false, true) }}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27556 0H11.7253C14.4711 0 16 1.7286 16 4.69054V14.7223C16 17.7327 14.4711 19.4225 11.7253 19.4225H4.27556C1.57333 19.4225 0 17.7327 0 14.7223V4.69054C0 1.7286 1.57333 0 4.27556 0ZM4.27803 4.02154C3.80548 4.02154 3.42241 4.40461 3.42241 4.87716C3.42241 5.3497 3.80548 5.73277 4.27803 5.73277H11.9786C12.4511 5.73277 12.8342 5.3497 12.8342 4.87716C12.8342 4.40461 12.4511 4.02154 11.9786 4.02154H4.27803ZM3.42241 10.0109C3.42241 9.53835 3.80548 9.15527 4.27803 9.15527H11.9786C12.4511 9.15527 12.8342 9.53835 12.8342 10.0109C12.8342 10.4834 12.4511 10.8665 11.9786 10.8665H4.27803C3.80548 10.8665 3.42241 10.4834 3.42241 10.0109ZM4.27803 14.289C3.80548 14.289 3.42241 14.6721 3.42241 15.1446C3.42241 15.6172 3.80548 16.0002 4.27803 16.0002H11.9786C12.4511 16.0002 12.8342 15.6172 12.8342 15.1446C12.8342 14.6721 12.4511 14.289 11.9786 14.289H4.27803Z" fill="currentColor" />
              </svg>
            </div>
          </button>
          <button className='index-component-button mr-4 pl-[7px] pr-2.5 py-[6px] bg-white hover:bg-[#364A87] focus:bg-[#364A87] shadow rounded-lg btn-hover'>
            <div className="w-[14px] text-[#364A87] hover:text-white"  onClick={() => { changeHandler(false, true, false) }}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4109 0.768617L13.4119 1.51824C16.1665 1.73413 17.9862 3.61119 17.9891 6.48975L18 14.9155C18.0039 18.054 16.0322 19.985 12.8718 19.99L5.15188 20C2.01119 20.004 0.0148166 18.027 0.0108673 14.8795L6.64975e-06 6.55272C-0.00394266 3.65517 1.75153 1.78311 4.50617 1.53024L4.50518 0.780611C4.5042 0.340832 4.83001 0.00999726 5.26444 0.00999726C5.69886 0.00899776 6.02468 0.338833 6.02567 0.778612L6.02666 1.47826L11.8914 1.47027L11.8904 0.770616C11.8894 0.330837 12.2152 0.00100177 12.6497 2.26549e-06C13.0742 -0.000997234 13.4099 0.328838 13.4109 0.768617ZM1.52148 6.86157L16.4696 6.84158V6.49175C16.4272 4.34283 15.349 3.21539 13.4138 3.04748L13.4148 3.81709C13.4148 4.24688 13.0801 4.5877 12.6556 4.5877C12.2212 4.5887 11.8943 4.24887 11.8943 3.81909L11.8934 3.0095L6.02863 3.01749L6.02962 3.82609C6.02962 4.25687 5.70479 4.5967 5.27036 4.5967C4.83594 4.5977 4.50913 4.25887 4.50913 3.82809L4.50815 3.05847C2.58286 3.25137 1.51753 4.38281 1.52049 6.55072L1.52148 6.86157ZM12.2399 11.4043V11.4153C12.2498 11.8751 12.625 12.2239 13.0801 12.2139C13.5244 12.2029 13.8789 11.8221 13.869 11.3623C13.8483 10.9225 13.4918 10.5637 13.0485 10.5647C12.5944 10.5747 12.2389 10.9445 12.2399 11.4043ZM13.0554 15.892C12.6013 15.882 12.235 15.5032 12.234 15.0435C12.2241 14.5837 12.5884 14.2029 13.0426 14.1919H13.0525C13.5165 14.1919 13.8927 14.5707 13.8927 15.0405C13.8937 15.5102 13.5185 15.891 13.0554 15.892ZM8.17212 11.4203C8.19187 11.8801 8.56804 12.2389 9.02221 12.2189C9.46651 12.1979 9.82096 11.8181 9.80121 11.3583C9.79035 10.9085 9.42504 10.5587 8.98074 10.5597C8.52657 10.5797 8.17113 10.9605 8.17212 11.4203ZM9.02616 15.8471C8.57199 15.8671 8.1968 15.5082 8.17607 15.0485C8.17607 14.5887 8.53052 14.2089 8.98469 14.1879C9.42899 14.1869 9.79529 14.5367 9.80516 14.9855C9.82589 15.4463 9.47046 15.8261 9.02616 15.8471ZM4.10433 11.4553C4.12408 11.915 4.50025 12.2749 4.95442 12.2539C5.39872 12.2339 5.75317 11.8531 5.73243 11.3933C5.72256 10.9435 5.35725 10.5937 4.91196 10.5947C4.45779 10.6147 4.10334 10.9955 4.10433 11.4553ZM4.95837 15.8521C4.5042 15.8731 4.12901 15.5132 4.10828 15.0535C4.10729 14.5937 4.46273 14.2129 4.9169 14.1929C5.3612 14.1919 5.7275 14.5417 5.73737 14.9915C5.7581 15.4513 5.40365 15.8321 4.95837 15.8521Z" fill="currentColor" />
              </svg>
            </div>
          </button>
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
          {showCarousel &&
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
          }

          {/* comment Three */}
          {showCards &&
            <>
              <div className='bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2'>
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
              </div>
            </>
          }
        </div>

      </div>

    </div>
  )
}

export default Carousels