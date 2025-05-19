import React from 'react'
import gsap from "gsap"
import banner from '/images/application-banner.webp'
import { Card } from "flowbite-react";
import Breadcrumbs from './Breadcrumbs';
import { useGSAP } from '@gsap/react';

export default function IndustrialUses() {

    useGSAP(() => {
        gsap.from("#banner",{
			opacity:0,
			x:-500,
			duration:1.5,
		});
    })

    return (
        <>
            <Breadcrumbs menu="Uses" />
            <section className='max-w-full'>
                {/* Banner Start */}
                <div id='banner' className="mx-auto relative h-120 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <img
                        alt=""
                        src={banner}
                        className="absolute inset-0 -z-10 size-full object-cover md:object-center"
                    />
                    
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {/* <div className="mx-auto max-w-full lg:mx-0 text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">Work with us</h2>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
                                Powering progress with purity - premium hydrated lime solutions.
                            </p>
                        </div> */}
                    </div>
                </div>
                {/* Banner End */}

                <div className='m-w-full text-center my-6 font-semibold'>
                    <h1 className='md:text-7xl text-5xl text-gray-800'>
                        Industrial Uses
                    </h1>
                    <p className='text-gray-500 mt-6 md:px-0 px-6'>
                        From construction to environmental protection, lime products play a vital role across a wide range of industries.
                    </p>
                </div>
                
                
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 m-10 p-6 flex justify-start items-start'>
                    
                    {/* Construction Road & Buildings */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/construction.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Construction, Road & Building Materials
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used in Mortar, Plaster, Stucco, Concrete & Asphalt. Soil Stabilization(road construction and foundation support).
                            </p>
                            <p>
                                <b>Quick Lime Powder</b> is used in Cement , Concrete Production and Brick Manufacturing. Soil Stabilization(improve soil strength and reduce moisture content).
                            </p>
                            <p>
                                <b>Quick Lime Lumps</b> is used in Cement & Concrete Production, AAC Block Manufacturing, Brick & Refractory Manufacturing. Soil Stabilization(road construction and foundation works).
                            </p>
                        </p>
                    </Card>
                    
                    {/* Water Treatment & Wastewater Management */}
                    <Card
                        className="max-w-sm items-start justify-start"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/Water-treatment.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Water Treatment & Wastewater Management
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used in Drinking Water Treatment(to remove impurities and adjust pH levels). Wastewater Treatment(neutralizes acidic water and removes heavy metals) and Industrial Effluent Treatment.
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used in Water Softening (removing hardness-causing minerals), pH Adjustment and Sludge Treatment(used in wastewater plants to aid in sludge stabilization).
                            </p>
                        </p>
                    </Card>

                    {/*  Pharmaceutical Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/pharmaceutical-industry.jpg" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Pharmaceutical Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used as a pH regulator in the production of certain medicines and active pharmaceutical ingredients (APIs), neutralizing acidic compounds in formulations and helps maintain sterile conditions by controlling bacterial growth in some processing environments.
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used in sterilization processes for equipment and packaging due to its strong alkaline nature and Used for calcium-based formulations.


                            </p>
                        </p>
                    </Card>

                    {/* Agriculture & Farming */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/farming.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Agriculture & Farming
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used in Soil Conditioning, Animal Waste Treatment(controls odors and reduces harmful bacteria) and Pond & Lake Treatment(prevents algae growth and stabilizes water pH).
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used in Soil pH Correction, Livestock Waste Management(reducing odor and bacterial growth in animal waste) and Pest Control(used as a natural pesticide to control insects and fungi).
                            </p>
                        </p>
                    </Card>

                    {/* Steel Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/steel-industry.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Steel Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used for neutralizing acidic waste in steel plants. Applied in flue gas treatment to reduce emissions like sulfur dioxide (SO₂).
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used as a flux in steelmaking to remove impurities like silica, phosphorus, and sulfur. Helps form slag, which captures these impurities and improves steel quality. Essential in Basic Oxygen Furnaces (BOF) and Electric Arc Furnaces (EAF).


                            </p>
                        </p>
                    </Card>

                    {/* Environmental Applications */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/Environmental Applications.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Environmental Applications
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime, Quick Lime Powder and Lumps</b> is used in Flue Gas Desulfurization(FGD) (removes sulfur dioxide (SO₂) from industrial emissions), Hazardous Waste Treatment(neutralizes acids and treats industrial waste before disposal) and Mine Reclamation(helps in treating acidic mine drainage and stabilizing soil).
                            </p>
                        </p>
                    </Card>

                    {/* Paper & Pulp Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/paper-pulp-industry.webp" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Paper & Pulp Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used for pH adjustment and improving pulp brightness in bleaching processes.
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used in the chemical recovery process during kraft pulping. Helps regenerate caustic soda by reacting with sodium carbonate.
                            </p>
                        </p>
                    </Card>

                    {/* Glass Manufacturing */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/glass-industry.webp" alt="glass-industry" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Glass Manufacturing
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is occasionally used for fine pH control in glass formulations or processing waste.
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> acts as a flux to reduce the melting point of silica in glass. It improves durability and chemical resistance of the glass.
                            </p>
                        </p>
                    </Card>

                    {/* Food Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/food-industry.jpg" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Food Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is used in Pickling & Food Preservation(helps in firming fruits and vegetables) and pH Regulation(used as a food additive (E526) to maintain alkalinity).
                            </p>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used in Food Processing and Sugar Refining(to remove impurities during sugar processing).
                            </p>
                        </p>
                    </Card>

                    {/*  Leather Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/leather-industry.jpg" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Leather Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> is widely used in the dehairing and deliming stages. Helps swell and loosen hair from hides, and adjusts pH before tanning.
                            </p>
                            <p>
                                <b>Quick Lime Powder</b> is used in early hide processing to help break down organic material.
                            </p>
                        </p>
                    </Card>

                    {/*  Paints & Coatings */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/painting-industry.jpg" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Paints & Coatings
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Hydrated Lime</b> acts as a filler and pH stabilizer. Improves adhesion and brightness in lime-based or mineral paints.
                            </p>
                            <p>
                                <b>Quick Lime Powder</b> is used in specialty paints like lime wash; reacts with water and carbon dioxide to form a protective finish.
                            </p>
                        </p>
                    </Card>

                    {/*  Chemical Industry */}
                    <Card
                        className="max-w-sm"
                        renderImage={() => <img className='m-auto my-2' width={360} src="/images/chemical-industry.jpg" alt="construction" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Chemical Industry
                        </h5>
                        <p className='font-normal text-gray-700 dark:text-gray-400'>
                            <p>
                                <b>Quick Lime Powder and Lumps</b> is used as a primary alkaline agent in the production of calcium-based chemicals, such as calcium chloride, calcium hypochlorite (bleaching powder), and calcium carbide. Acts as a neutralizer for acidic waste streams in chemical processes and precipitation reactions.
                            </p>
                        </p>
                    </Card>
                </div>
            </section>
        </>
    )
}
