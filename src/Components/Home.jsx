import React from 'react';
import gsap from "gsap"
import mainImage from '/images/homePage1.webp'
import { FaCheckCircle, FaStar, FaLeaf, FaArrowCircleUp } from "react-icons/fa"
import { LuAlarmClockCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
	{ id: 'stat1' ,name: 'Years Expirence', value: '25+' },
	{ id: 'stat2', name: 'Trusted Individuals', value: '200+' },
	{ id: 'stat3', name: 'Service Available', value: '24/7' },
]

const callouts = [
	{
		id:'product1',
		name: 'Hydrated Lime Powder',
		imageSrc: '/images/Hydrated-Lime-1.webp',
		imageAlt: 'Top Quality Hydrated Lime Powder',
		href: '/hydrated-lime-powder',
	},
	{
		id:'product2',
		name: 'Quick Lime Lumps',
		imageSrc: '/images/Quick-Lime-Lumps-1.webp',
		imageAlt: 'Quick Lumps',
		href: '/quick-lime-lumps',
	},
	{
		id:'product3',
		name: 'Quick Lime Powder',
		imageSrc: '/images/Quick-Lime-Powder-1.webp',
		imageAlt: 'Quick Lumps Powder',
		href: '/quick-lime-powder',
	},
]

const guarantees = [
	{
		icon: <FaCheckCircle className="text-green-500 text-4xl" />,
		title: "High Grade Products",
		id:"no1"
	},
	{
		icon: <FaStar className="text-yellow-500 text-4xl" />,
		title: "Client Satisfaction",
		id:"no2"
	},
	{
		icon: <FaLeaf className="text-green-600 text-4xl" />,
		title: "Eco-Friendly",
		id:"no3"
	},
	{
		icon: <LuAlarmClockCheck  className="text-blue-500 text-4xl" />,
		title: "On Time And Efficient Delivery",
		id:"no4"
	},
];

export default function Home() {

	useGSAP(() => {

		gsap.from("#heading",{
			opacity:0,
			rotate:180,
			y:-300,
			duration:1,
			delay:0.5,
		})

		let tl = gsap.timeline()

		tl.from("#stat1",{opacity:0, y:300, duration:0.8})
		.from("#stat2",{opacity:0, y:300, duration:0.8})
		.from("#stat3",{opacity:0, y:300, duration:0.8})

		gsap.from("#product1",{
			opacity:0,
			x:-300,
			duration:1,
			scrollTrigger: {
				trigger:"#banner",
				start:"center center",
			},
			delay:0.5
		});

		gsap.from("#product2",{
			opacity:0,
			y:-200,
			duration:1,
			scrollTrigger: {
				trigger:"#banner",
				start:"center center"
			},
			delay:0.5
		});

		gsap.from("#product3",{
			opacity:0,
			x:300,
			duration:1,
			scrollTrigger: {
				trigger:"#banner",
				start:"center center"
			},
			delay:0.5
		});

		gsap.from("#carousel",{
			opacity:0,
			rotationY:180,
			duration:1.5,
			scrollTrigger: {
				trigger:"#products",
				start:"bottom bottom"
			},
			delay:0.5
		});
	})

	return (
		<>	
			{/* Banner Start */}
			<div id='banner' className="sepia-50 relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<img
					alt=""
					src={mainImage}
					className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-60"
				/>
				<div
					aria-hidden="true"
					className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div id='heading' className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">Work with us</h2>
						<p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
							Powering progress with purity - premium hydrated lime solutions.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
							{stats.map((stat) => {
								return(
									<div key={stat.name} className="flex flex-col-reverse gap-1">
										<dt className="text-base/5 text-gray-300 text-xl">{stat.name}</dt>
										<dd id={stat.id} className="text-6xl font-semibold tracking-tight text-white">{stat.value}</dd>
									</div>
								)
							})}
						</dl>
					</div>
				</div>
			</div>
			{/* Banner End */}

			{/* Product Range Start */}
			<section className="bg-gradient-to-r from-[#FBF7F1] via-[#efdecd] to-[#C4A484]">
				<div id='products' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
						<h2 className="text-5xl font-bold text-gray-900">Excellence in Lime :</h2>
						<p className="mt-4 font-medium text-pretty text-gray-900 sm:text-xl/8">
							Unmatched Quality & Service!
						</p>

						<div className="mt-8 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
							{callouts.map((callout) => {
								return(
									<div id={callout.id} key={callout.name} className="group relative">
										<img
											alt={callout.imageAlt}
											src={callout.imageSrc}
											className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
										/>
										<h3 className="mt-6 text-lg font-medium text-gray-900">
											<center>
												<a href={callout.href}>
													<span className="absolute inset-0" />
													{callout.name}
												</a>
											</center>
	
										</h3>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
			{/* Product Range End */}

			{/* We Guarantee Section Start */}
			<section id='guarantee' className="container py-10 mx-auto">
				<div className="md:grid md:grid-cols-2 justify-center items-center mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Two-Column Grid Section */}
					<div>
						<h2 className="text-5xl font-bold mb-6 ms-14">We Guarantee :</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">
						{guarantees.map((item, index) => {
							return(
								<motion.div
									id={item.id}
									key={index}
									whileHover={{ scale: 1.05 }}
									className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center"
								>
									{item.icon}
									<center>
									<h3 className="mt-4 text-xl font-semibold">{item.title}</h3>	
									</center>
									{/* <p className="text-gray-600 mt-2">{item.description}</p> */}
								</motion.div>
							)
						})}
					</div>
					</div>
						
					{/* Carousel Section */}
					<div id='carousel' className="mt-4">
						<Swiper
							modules={[Pagination, Autoplay]}
							spaceBetween={20}
							slidesPerView={1}
							// navigation
							pagination={{ clickable: true }}
							autoplay={{ delay: 2000 }}
							className="rounded-lg shadow-lg"
						>
							<SwiperSlide>
							<div className="flex flex-col items-center bg-white md:flex-row md:max-w-full max-h-full dark:border-gray-900 dark:bg-gray-800">
									<div className="flex flex-col justify-between p-4 pb-10 leading-normal bg-gray-100">
										<h4 className="p-8 m-auto text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
											High Grade Products
										</h4>
										<p className="mb-3 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											We offer premium-quality lime powder that is carefully processed to meet the highest industry standards. Our lime powder is sourced from the finest raw materials and undergoes strict quality control to ensure it delivers exceptional purity and performance.
										</p>
										<p className="my-3 mb-6 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											Our high-grade lime powder is known for its consistency, effectiveness, and reliable results.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="flex flex-col items-center bg-white md:flex-row md:max-w-full md:max-h-full dark:border-gray-700 dark:bg-gray-800">
									<div className="flex flex-col justify-between p-4 leading-normal bg-gray-100">
										<h4 className="p-8 m-auto text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
											Client Satisfaction
										</h4>
										<p className="mb-3 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											We are committed to 100% client satisfaction, ensuring that every customer receives the best possible service and product quality. From the moment you place an order to the final delivery, we focus on meeting and exceeding your expectations.
										</p>
										<p className="my-3 mb-6 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											Your satisfaction is our top priority, and we continuously strive to improve our offerings to provide you with the highest level of service and quality.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="flex flex-col items-center bg-white md:flex-row md:max-w-full md:max-h-full dark:border-gray-700 dark:bg-gray-800">
									<div className="flex flex-col justify-between p-4 leading-normal bg-gray-100">
										<h4 className="p-8 m-auto text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
											Eco Friendly
										</h4>
										<p className="mb-3 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											Our hydrated lime powder is produced using eco-conscious processes, ensuring minimal environmental impact while maintaining superior quality and effectiveness.
										</p>
										<p className="my-3 mb-6 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											Additionally, we use sustainable packaging solutions that reduce waste and promote recyclability. Our packaging materials are carefully selected to ensure durability while minimizing environmental footprint.
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="flex flex-col items-center bg-white md:flex-row md:max-w-full md:max-h-full dark:border-gray-700 dark:bg-gray-800">
									<div className="flex flex-col justify-between p-4 leading-normal bg-gray-100">
										<h4 className="p-8 m-auto text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
											On Time & Efficient Delivery
										</h4>
										<p className="mb-3 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											Our commitment to timeliness and efficiency means you can count on us to meet your deadlines, keeping your operations running smoothly. With a well-structured logistics network and reliable transportation partners, we guarantee fast and secure shipment of our products.
										</p>
										<p className="my-3 mb-6 px-14 m-auto font-normal text-gray-700 dark:text-gray-400">
											We take pride in our on-time and efficient delivery, ensuring that our customers receive their orders promptly and without hassle.
										</p>
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>
					</div>
				</div>
			</section>
			{/* We Guarantee Section End */}

			{/* Company Overview Section Start */}
			<section className="container py-10 mx-auto max-w-6xl">
				<h2 className="text-5xl font-bold mb-6">Company Overview</h2>
				<div className='text-lg mx-auto px-4 sm:px-6 lg:px-10 p-4 text-gray-800'>
					<p className='mb-4'>
                    	With over 25 years of industry experience, our company has established itself as a trusted and reliable name in the lime manufacturing sector. We proudly serve a wide network of clients across India, delivering high-quality lime products tailored to the diverse needs of industries such as leather, construction, water treatment, and more.
                	</p>
				<p>
					<a href='/about-us' className='text-sky-700 underline underline-offset-3'>
						Read More...
					</a>
				</p>
				</div>
			</section>
			{/* Company Overview Section End */}

		</>
	)
}
