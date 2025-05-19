import React from 'react'
import gsap from "gsap"
import Breadcrumbs from './Breadcrumbs'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HydratedLimePowder() {

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
        { name: '% of Available Lime as Ca(OH)₂', a: '+90', b: '+85', c: '+80', d: '+75', e: '+70', f: '+65' },
        { name: '% of Available Lime as CaO', a: '+68', b: '+64', c: '+60', d: '+56', e: '+52', f: '+49' },
        { name: '% Maximum Acid Insoluble', a: '1.0', b: '1.5', c: '3.0', d: '4.0', e: '4.5', f: '6.0' },
        { name: '% Iron and Alumina', a: 'As Fe <0.035', b: 'As Fe <0.040', c: 'As Fe <0.050', d: 'As Fe <0.055', e: 'As Fe <0.060', f: 'As Fe <0.060' },
        { name: '% Magnesia as MgO', a: '1.25(max)', b: '1.5(max)', c: '2.0(max)', d: '2.0(max)', e: '2.5(max)', f: '2.5(max)' },
        { name: 'Mesh (BSS)', a: '250', b: '200', c: '200', d: '150', e: '150', f: '150' }
    ]

    return (
        <>
        <Breadcrumbs menu="Products" submenu="Hydrated Lime Powder" />
            <section className='m-8'>
                <div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
                    <div className="flex flex-col bg-white lg:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                        <img className="image object-cover w-full rounded-t-lg h-96 md:h-auto xl:w-200 lg:w-140 max-sm:w-100 sm-150 md:rounded md:rounded-s-lg me-8" src="/images/Hydrated-Lime-1.webp" alt="" />
                        <div className="flex flex-col p-4 leading-normal">
                            <h5 className="my-2 xl:text-6xl lg:text-5xl max-sm:text-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 pb-5">
                                Hydrated Lime Powder
                            </h5>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                We take pride in being one of the <b>best manufacturers of hydrated lime</b>, delivering high-purity, high-reactivity, and finely processed calcium hydroxide to meet diverse industry needs. Our manufacturing facilities ensure consistent quality, precise composition, and minimal impurities, making our product ideal for many applications.
                            </p>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                With years of experience and a commitment to excellence, we have established ourselves as a trusted supplier for a diverse range of applications, from construction and agriculture to water treatment and industrial processes.
                            </p>
                        </div>
                    </div>
                    <div className="info flex flex-col bg-white lg:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 p-8">
                        <div className="flex flex-col p-4 leading-normal">
                            <h5 className="heading my-2 xl:text-4xl sm:text-3xl max-sm:text-2xl max-sm:mt-0 font-bold tracking-tight text-gray-900 dark:text-white">
                                More About Hydrated Lime Powder :
                            </h5>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                Hydrated lime powder, also known as <b>calcium hydroxide (Ca(OH)₂)</b>, is a fine, white, dry powder derived from quicklime (calcium oxide, CaO) by adding water. This process is called <b>slaking</b>, and the result is a highly reactive, alkaline material widely used in various industries.
                            </p>
                            <p className="mt-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                                Hydrated lime is a versatile and essential chemical with widespread applications in <b>construction, water treatment, agriculture, and environmental protection</b>. Its cost-effectiveness, alkalinity, and reactivity make it a valuable material for industrial and commercial uses. Proper handling and storage ensure safe and efficient utilization.
                            </p>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 xl:w-6xl sm:w-full m-auto max-sm:w-full">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Specifications & Grades
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                A
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                B
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                C
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                D
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                E
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                F
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
                                                        <td className="px-6 py-4">
                                                            { value.b }
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            { value.c }
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            { value.d }
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            { value.e }
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            { value.f }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Packaging
                                            </th>
                                            <td className="px-6 py-4 text-center" colspan={3}>
                                                Laminated PP | HDPE Bag or Jumbo Bag
                                            </td>
                                            <td className="px-6 py-4 text-center" colspan={3}>
                                                PP | HDPE Bag
                                            </td>
                                        </tr>
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
