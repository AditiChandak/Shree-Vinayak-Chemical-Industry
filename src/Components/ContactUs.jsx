import React from 'react'
import gsap from "gsap"
import banner from '../../public/images/contact-us-banner.avif'
import { IoCallSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Breadcrumbs from './Breadcrumbs';
import { useGSAP } from '@gsap/react';

export default function ContactUs() {

    useGSAP(() => {

        let tlHeading = gsap.timeline();

        tlHeading.from(".heading1",{opacity:0, y:-300, duration:1, ease:'bounce'})
        .from(".heading2",{opacity:0, y:-300, duration:0.5,});

        let tlBox = gsap.timeline({
            scrollTrigger:{
                trigger: '.banner',
                start:'end end'
            }
        })

        tlBox.from(".box1",{x:-200, duration:0.5, opacity:0})
        .from(".box2",{x:200, duration:0.5, opacity:0})
        .from(".box3",{x:-200, duration:0.5, opacity:0})
        .from(".box4",{x:200, duration:0.5, opacity:0})
    })

    return (
        <>
            <Breadcrumbs menu='Contact Us'/>
            <section className='max-w-full'>
                {/* Banner Start */}
                <div className="banner mx-auto relative h-120 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <img
                        alt=""
                        src={banner}
                        className="absolute inset-0 -z-10 size-full object-cover md:object-center"
                    />

                    <div className="max-w-4xl mx-10 px-6 lg:px-8">
                        <div className="mx-auto max-w-full lg:mx-0">
                            <h2 className="heading1 text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
                                Let's Talk Lime !
                            </h2>
                            <p className="heading2 mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
                                We're here to provide the right lime solutions—whether it's quick lime, hydrated lime, or lime lumps, our experts are ready to help.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Banner End */}

                <div className='md:max-w-5xl m-14 mx-auto flex flex-wrap sm:gap-12 justify-center'>
                    {/* Contact Number */}
                    <div class="box1 max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-200 w-60-xs">
                        <div className='w-18 h-14 rounded-full bg-cyan-950 relative mb-4'>
                            <IoCallSharp  className='absolute text-white text-3xl top-3 left-5' />
                        </div>
                        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Connect With Us!
                        </h5>
                        <p class="mb-3 mt-4 font-normal text-xl text-gray-500 dark:text-gray-400">
                            <a href='tel:9651506757'>+91 9651506757</a><br/>
                            <a href='tel:9389002169'>+91 9389002169</a>
                        </p>
                    </div>

                    {/* Factory Location */}
                    <div class="box2 max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-200">
                        <div className='w-18 h-14 rounded-full bg-cyan-950 relative mb-4'>
                            <FaMapLocationDot  className='absolute text-white text-3xl top-3 left-5' />
                        </div>
                        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Factory Location!
                        </h5>
                        <p class="mb-3 mt-4 font-normal text-xl text-gray-500 dark:text-gray-400">
                            <a href='https://maps.app.goo.gl/qeiMUdSguiTxhrDf7' target='_blank'>
                            Sambadiya Road,<br/> 
                            Near Ransi HP Gas Godown,<br/>
                            Ransi Gaon, Rajasthan 342601
                            </a>
                        </p>
                    </div>

                    {/* Mail */}
                    <div class="box3 max-w-sm p-8 px-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-200">
                        <div className='w-18 h-14 rounded-full bg-cyan-950 relative mb-4'>
                            <MdMarkEmailRead className='absolute text-white text-3xl top-3 left-5' />
                        </div>
                        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Mail Us!
                        </h5>
                        <p class="mb-3 mt-4 font-normal text-xl text-gray-500 dark:text-gray-400">
                            <a href='mailto:vinayakchemicals18@gmail.com'>
                                vinayakchemicals18@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Office Location */}
                    <div class="box4 max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-200">
                        <div className='w-18 h-14 rounded-full bg-cyan-950 relative mb-4'>
                            <FaLocationDot  className='absolute text-white text-3xl top-3 left-5' />
                        </div>
                        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Office Location!
                        </h5>
                        <p class="mb-3 mt-4 font-normal text-xl text-gray-500 dark:text-gray-400">
                            Plot No. 251-A, Shyam Kunj,<br/> 
                            Laxmi Nagar, Paota B Road,<br/>
                            Jodhpur, Rajasthan 342006
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}
