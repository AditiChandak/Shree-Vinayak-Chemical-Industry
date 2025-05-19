import React from 'react'
import Logo from '/images/logo.png'
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F6F0F0]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between sm:justify-items-center max-sm:justify-items-center max-sm:mb-4">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={Logo} className="h-14 me-3 sm:h-10" alt="FlowBite Logo" />
                <span className="self-center sm:text-md text-xl font-semibold whitespace-nowrap dark:text-white">Shree Vinayak Chemical Industry</span>
              </a>
              <div className='py-4 w-[400px]'>
                <div className='text-lg max-sm:text-[16px]'>
                  <p className='flex items-top'>
                    <label className='flex me-2 gap-2'>
                      <FaLocationDot className='my-1'/>
                      Address</label> - 
                    <span className='ms-2 max-sm:text-[15px]'>
                      Sambadiya Road,<br/> 
                      Near Ransi HP Gas Godown,<br/>
                      Ransi Gaon, Rajasthan 342601 </span>
                  </p>
                </div>
                <div className='pt-2 text-lg flex items-center gap-2 max-sm:text-[16px]'>
                  <MdEmail />
                  <a href='mailto:vinayakchemicals18@gmail.com'>
                    vinayakchemicals18@gmail.com
                  </a>
                </div>
                <div className='pt-2 text-lg flex items-center gap-2 max-sm:text-[16px]'>
                  <FaPhone />
                  <span>+91 9651506757, +91 9389002169</span>
                </div>
              </div>
            </div>
            <div className="flex w-md justify-between px-6 md:gap-6">
              <div className='me-6'>
                <h2 className="mb-6 text-sm max-sm:text-md font-bold text-gray-900 uppercase dark:text-white">Our Product Range</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/hydrated-lime-powder" className="hover:underline">
                      Hydrated Lime Powder
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/quick-lime-powder" className="hover:underline">Quick Lime Powder</a>
                  </li>
                  <li>
                    <a href="/quick-lime-lumps" className="hover:underline">Quick Lime Lums</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-11 text-sm max-sm:text-md font-bold text-gray-900 uppercase dark:text-white">Industrial Uses</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/industrial-uses" className="hover:underline ">
                      Construction, Road & Building Materials
                    </a>
                  </li>
                  <li>
                    <a href="/industrial-uses" className="hover:underline ">
                      Water Treatment & Wastewater Management
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a href="/industrial-uses" className="hover:underline">
                      More...
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">Shree Vinayak Chemical Industry</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
      
    </>
  )
}
