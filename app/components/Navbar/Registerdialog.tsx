import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Register = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden md:block'>
                    <button className="bg-green-600 hover:text-white text-white text-15px font-medium ml-8 py-4 px-5 rounded" onClick={openModal}>
                        Register
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto shadow-sm">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <h1 className='text-right -mt-14 -mr-2 text-gray-500 font-semibold text-xl cursor-pointer hover:text-gray-600' onClick={closeModal}>&times;</h1>
                                            <div>
                                                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 -mt-8">
                                                    Register
                                                </h2>
                                            </div>
                                            <form className="mt-4 space-y-6" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="first-name" className="sr-only">
                                                            First Name
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1'>First Name</p> */}
                                                        <input
                                                            id="first-name"
                                                            name="first-name"
                                                            type="text"
                                                            autoComplete="text"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last-name" className="sr-only">
                                                            Last Name
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1 mt-4'>Last Name</p> */}
                                                        <input
                                                            id="last-name"
                                                            name="last-name"
                                                            type="text"
                                                            autoComplete="text"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="first-name" className="sr-only">
                                                            Mobile Number
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1 mt-4'>Mobile Number</p> */}
                                                        <input
                                                            id="mobile-number"
                                                            name="mobile-number"
                                                            type="number"
                                                            autoComplete="number"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                                            placeholder="Mobile Number"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email-addr" className="sr-only">
                                                            Email
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1 mt-4'>Email</p> */}
                                                        <input
                                                            id="email-addr"
                                                            name="email-addr"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Password
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1 mt-4'>Password</p> */}
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="confirm-password" className="sr-only">
                                                            Confirm Password
                                                        </label>
                                                        {/* <p className='text-black pb-2 pl-1 mt-4'>Confirm Password</p> */}
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="confirm-password"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                                            placeholder="Confirm Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                    <div className="text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="flex items-center w-full max-w-md -mt-4">
                                        <div className="flex-grow border-t border-gray-300"></div>
                                        <span className="mx-4 text-gray-600 font-medium">OR</span>
                                        <div className="flex-grow border-t border-gray-300"></div>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <p className='pr-2 mt-1.5 text-gray-700'>Already have an Account ?</p>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium hover:bg-blue-200 text-blue-900 "
                                        >
                                            Login
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Register;
