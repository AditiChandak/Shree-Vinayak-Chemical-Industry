import React from 'react'
import gsap from "gsap"
import Breadcrumbs from './Breadcrumbs'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function QuickLimeLumps() {

    useGSAP(() => {
        gsap.from(".image",{
            y:-100,
            duration:0.8,
        });

        gsap.from(".heading",{
            opacity:0,
            y:100,
            duration:1,
            scrollTrigger: {
				trigger:".image",
				start:"end end"
			},
        });
    })

    const tableData = [
        { name: '% CaO', a: '90(min)' },
        { name: 'Reactivity 4N HCI', a: '375(min)' },
        { name: '% MgO', a: '2.5(max)' },
        { name: '% SiO₂', a: '1.5(max)' },
        { name: '% R₂O₃', a: '0.25(max)' },
        { name: '% L.O.I', a: '4.0(max)' },
        { name: 'Sizes', a: '0-3mm | 0-10mm | 0-25mm | 10-60mm' },
        { name: 'Packaging', a: '1 MT Once Used Jumbo bag' },
    ]

  return (
    <>
        <Breadcrumbs menu="Products" submenu="Quick Lime Lumps" />
        <section className='m-8'>
                <div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
                    <div className="flex flex-col bg-white lg:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                        <img className="image object-cover w-full rounded-t-lg h-96 md:h-auto xl:w-200 lg:w-140 max-sm:w-100 sm-150 md:rounded md:rounded-s-lg me-8" src="/images/Quick-Lime-Lumps-1.webp" alt="" />
                        <div className="flex flex-col p-4 leading-normal">
                            <h5 className="my-2 xl:text-6xl lg:text-5xl max-sm:text-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 pb-5">
                                Quick Lime Lumps
                            </h5>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                High-quality natural deposit limestone with low residuals handpicked after three layers of sorting to produce best-in-class import substitute High Purity and Highly Reactive Quick Lime Lumps. It is a white, caustic, alkaline, crystalline solid at room temperature. 
                            </p>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                Whether you require quicklime for large industrial operations or specialized uses, we are dedicated to providing superior products that drive your success. Choose us for premium quick lime powder that guarantees exceptional results and industry-leading standards.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white lg:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 p-8">
                        <div className="flex flex-col p-4 leading-normal">
                            <h5 className="heading my-2 xl:text-4xl sm:text-3xl max-sm:text-2xl max-sm:mt-0 font-bold tracking-tight text-gray-900 dark:text-white">
                                More About Quick Lime Lumps :
                            </h5>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                Quick lime lumps, also known as <b>calcium oxide (CaO) or burnt lime</b>, are solid, highly reactive, alkaline materials derived from the thermal <b>decomposition of limestone</b>.
                            </p>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                It is widely used in <b>steel manufacturing, construction, water treatment, chemical industries, paper industry, sugar industry, etc.</b> due to its strong reactivity and versatility. Its strong alkalinity and cost-effectiveness make it a valuable material. Proper handling and storage ensure safe and efficient use.
                            </p>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 xl:w-2xl sm:w-full m-auto max-sm:w-full">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Specifications & Grades
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Premium Grade
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData.map((value) => {
                                                return (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            { value.name }
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            { value.a }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
