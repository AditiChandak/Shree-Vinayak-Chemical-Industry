import React from 'react'
import gsap from "gsap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import homePage1 from '../../public/images/homePage1.webp'
import homePage2 from '../../public/images/homePage2.jpeg'
import homePage3 from '../../public/images/homePage3.jpeg'
import Breadcrumbs from './Breadcrumbs';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutUs() {

    useGSAP(() => {

        gsap.from(".heading",{
            opacity:0,
            y:-100,
            duration:1,
            scrollTrigger: {
				trigger:"#carousel",
				start:"center center"
			},
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger:'.heading',
                start:"center center"
            },
            delay:0.5
        });

        tl.fromTo("#chooseUs",{y:50, opacity:0}, {y:-10, opacity:10})
        .fromTo("#capabilities",{y:50, opacity:0}, {y:-10, opacity:10})
    })

    return (
        <>
            <Breadcrumbs menu="About Us" />
            <section className="pb-10 mx-auto">

                {/* Carousel Section */}
                <div id='carousel' className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        //   navigation
                        //   pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="rounded-lg shadow-lg"
                    >
                        <SwiperSlide>
                            <img
                                src={homePage1}
                                alt="Product 1"
                                className="w-full h-120 rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={homePage2}
                                alt="Product 2"
                                className="w-full h-120 rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={homePage3}
                                alt="Product 3"
                                className="w-full h-120 rounded-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2 className="heading mt-14 text-5xl font-bold mb-6 text-center">Company Overview</h2>
                <div className='max-w-full text-lg mx-auto px-4 sm:px-6 lg:px-10 p-4 text-gray-800'>
                    <p className='mb-4'>
                        With over 25 years of industry experience, our company has established itself as a trusted and reliable name in the lime manufacturing sector. We proudly serve a wide network of clients across India, delivering high-quality lime products tailored to the diverse needs of industries such as leather, construction, water treatment, and more.
                    </p>
                    <p className='mb-4'>
                        Since our inception, we have focused on delivering uncompromising quality, building trust, and maintaining long-term relationships with clients across diverse industries.
                        Our long-standing reputation is built on three core values: Trustworthiness, Consistent Quality and On-Time Deliveries.
                    </p>
                    <p className='mb-4'>
                        We are committed to maintaining strong client relationships through dependable service, timely logistics, and a customer-first approach that sets us apart in the market.
                    </p>
                    <p id='chooseUs' className='mb-4'>
                        <span className='text-3xl leading-15 font-semibold'>Why Choose Us?</span>
                        <ul className="list-none">
                            <li>
                                <b>Trusted Experience</b> - Over two decades of industry expertise ensures deep product knowledge and proven reliability.
                            </li>
                            <li>
                                <b>Nationwide Clientele</b> - Our consistent quality and service have earned the trust of clients in every major region of India.
                            </li>
                            <li>
                                <b>Timely Deliveries</b> - We understand the importance of deadlines. Our robust logistics and distribution network ensure on-time delivery every time.
                            </li>
                            <li>
                                <b>High-Quality Standards</b> - From quicklime lumps to hydrated lime powder, our products meet stringent quality standards for purity, reactivity, and consistency.
                            </li>
                            <li>
                                <b>Customer-Centric Approach</b> - We believe in building long-term partnerships, not just transactions. Your satsfaction is our priority.
                            </li>
                        </ul>   
                    </p>
                    <p id='capabilities' className='mb-4'>
                    <span className='text-3xl leading-15 font-semibold'>Key Capabilities:</span>
                        <ul className="list-none">
                            <li>
                                <b>Advanced Hydration Units</b> - Precision-controlled systems for producing high-purity hydrated lime with excellent fineness and reactivity.
                            </li>
                            <li>
                                <b>Automated Crushing & Grinding Systems</b> - Modern mills and crushers for producing uniform quicklime powder and hydrated lime of varying mesh sizes.
                            </li>
                            <li>
                                <b>In-House Quality Control Lab</b> - Continuous monitoring and testing of raw material and finished products to ensure consistency, purity, and performance.
                            </li>
                            <li>
                                <b>Bulk Storage & Handling</b> - Silo systems and covered storage to maintain product integrity and support large-scale distribution.
                            </li>
                            <li>
                                <b>Eco-Conscious Production</b> - We follow sustainable practices that minimize waste and emissions, with a focus on environmental responsibility.
                            </li>
                        </ul>    
                    </p>
                </div>
            </section>
        </>
    )
}
