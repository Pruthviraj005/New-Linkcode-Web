import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/aboutus', current: false },
    { name: 'Courses', href: '/courses', current: false },
    { name: 'Blog', href: '#testimonial-section', current: false },
    { name: 'Event', href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-white">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-30px w-40 lg:hidden"
                                    src="https://www.linkcode.in/_next/image?url=%2Flogo.png&w=256&q=75"
                                    alt="Courses-Logo"
                                />
                                <img
                                    className="hidden h-48px w-40 lg:block"
                                    src="https://www.linkcode.in/_next/image?url=%2Flogo.png&w=256&q=75"
                                    alt="Courses-Logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block m-auto place-items-center lg:m-auto">
                                <div className="flex space-x-4">

                                    <Link
                                        href="/"
                                        className='hover:text-green-700 px-3 py-4 text-15px font-medium space-links'>
                                        Home
                                    </Link>
                                    <Link
                                        href="/aboutus"
                                        className='hover:text-green-700 px-3 py-4 text-15px font-medium space-links'>
                                        About
                                    </Link>
                                    <div className='group mt-2.5'>
                                        <Link
                                            href="/"
                                            className='hover:text-green-700 px-3 py-4 text-15px font-medium space-links'>
                                            Courses
                                        </Link>
                                        <div className="absolute left-0 hidden mt-2 ml-96 bg-white text-black rounded shadow-lg w-56 group-hover:block z-20 text-center">
                                            <Link href="/javafullstack" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">Java Full-Stack Development</Link>
                                            <a href="#development" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">Python Full-Stack Development</a>
                                            <a href="#seo" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">MEAN/MERN Stack Development</a>
                                            <a href="#seo" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">Mobile App Development</a>
                                            <a href="#seo" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">Data Analytics</a>
                                            <a href="#seo" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">Data Science</a>
                                            <a href="#seo" className="block px-4 py-2 hover:bg-gray-100 rounded text-sm text-gray-800">DevOps With AWS</a>
                                        </div>

                                    </div>
                                    <Link
                                        href="/"
                                        className='hover:text-green-700 px-3 py-4 text-15px font-medium space-links'>
                                        Blogs
                                    </Link>
                                    <Link
                                        href="/"
                                        className='hover:text-green-700 px-3 py-4 text-15px font-medium space-links'>
                                        Events
                                    </Link>

                                    <Contactus />
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure >
    )
}

export default Navbar;
