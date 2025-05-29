import React, { useState } from 'react'
import gsap from "gsap"
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../../../public/images/logo.png'
import { Link } from 'react-router-dom'
import { FaArrowCircleUp } from "react-icons/fa"
import { useGSAP } from '@gsap/react'
import { MdOutgoingMail, MdAddIcCall } from "react-icons/md";

const products = [
    { name: 'Hydrated Lime Powder', to: '/hydrated-lime-powder' },
    { name: 'Quick Lime Powder', to: '/quick-lime-powder' },
    { name: 'Quicke Lime Lumps', to: '/quick-lime-lumps' },
]

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [mailUsText, setMailUsText] = useState(false);

    const [callUsText, setCallUsText] = useState(false);
    
    useGSAP(() => {
        gsap.from("#header",{
            y:-300,
            duration:0.8,
        });
    })

    return (
        <>
            <header id='header' className="bg-gradient-to-b from-[#efdecd] to-white sticky top-0 shadow-lg z-10">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">
                    <div className="flex lg:flex-2">
                        <a href="/" className="-m-1.5 p-1.5 flex items-center">
                            <img
                                alt=""
                                src={Logo}
                                className="h-20 w-20 w-auto"
                            />
                            <h2 className="ms-2 text-black text-3xl font-semibold">Shree Vinayak Chemical Industry</h2>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-8 header-menu hover:visible">

                        <a href="/" className="text-lg/6 font-medium text-gray-900 hover:transform-[scale(1.2)]">
                            Home
                        </a>

                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-lg/6 font-medium text-gray-900 hover:transform-[scale(1.2)]">
                                Products
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className='absolute top-full -left-8 z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in'
                            >
                                <div className="p-4">
                                    {products.map((item) => {
                                        return(
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                            >
                                                <div className="flex-auto">
                                                    <a href={item.to} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </PopoverPanel>
                        </Popover>

                        <a href="/about-us" className="text-lg/6 font-medium text-gray-900 hover:transform-[scale(1.2)]">
                            About Us
                        </a>

                        <a href="/industrial-uses" className="text-lg/6 font-medium text-gray-900 hover:transform-[scale(1.2)]">
                            Industrial Uses
                        </a>

                        <a href="/contact-us" className="text-lg/6 font-medium text-gray-900 hover:transform-[scale(1.2)]">
                            Contact Us
                        </a>

                    </PopoverGroup>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#D5C7A3] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Home
                                    </Link>
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            Products
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products].map((item) => {
                                                return(
                                                    <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    to={item.to}
                                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                                )
                                            })}
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Link
                                        to="/about-us"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/industrial-uses"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Industrial Uses
                                    </Link>
                                    <Link
                                        to="/contact-us"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className='fixed z-100 right-10 bottom-40 sm:w-12 sm:h-30 max-sm:w-12 max-sm:h-30 sm:right-8 sm:bottom-40 bg-[#90D1CA] shadow-md shadow-[#90D1CA] ring-2 ring-[#BEE4D0] rounded-xl'>
                <a href='mailto:vinayakchemicals18@gmail.com' onMouseEnter={()=>{setMailUsText(true)}} onMouseLeave={()=>{setMailUsText(false)}}>
                    {
                        (mailUsText == true)
                        ?
                            <div className='h-16 w-8 mx-auto font-bold py-2 border-b-4'>
                                <a href='mailto:vinayakchemicals18@gmail.com'>Mail Us!</a>
                            </div>
                            
                        :
                            <MdOutgoingMail className='h-16 w-8 mx-auto border-b-4'/>
                    }
                    
                </a>
                <a href="tel:9651506757"  onMouseEnter={()=>{setCallUsText(true)}} onMouseLeave={()=>{setCallUsText(false)}}>
                {
                        (callUsText == true)
                        ?
                            <div className='h-16 w-8 mx-auto font-bold py-2'>
                                <a href='tel:9651506757'>Call Us!</a>
                            </div>
                            
                        :
                            <MdAddIcCall className='h-16 w-8 mx-auto'/>
                    }
                    
                </a>   
            </div>
            
        </>
    )
}
