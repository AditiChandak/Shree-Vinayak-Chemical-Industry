import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function Breadcrumbs({ menu, submenu}) {
    return (
        <>
        <div className='flex justify-center bg-gray-50'>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="py-5 dark:bg-gray-800 items-center">
                <BreadcrumbItem href="/" icon={HiHome}>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem>{ menu }</BreadcrumbItem>
                <BreadcrumbItem>{ submenu }</BreadcrumbItem>
            </Breadcrumb>
        </div>
            
        </>
    )
}
