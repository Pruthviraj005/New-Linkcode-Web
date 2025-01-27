'use client'
import React, { useState } from 'react';

function Contactus() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
    });

    const handleBlur = (field: string, value: string) => {
        const newErrors = { ...errors };
        if (field === 'fullName' && !value.trim()) {
            newErrors.fullName = 'Name is required.';
        } else if (field === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            newErrors.email = 'Enter a valid email.';
        } else if (field === 'phoneNumber' && !/^\d{10}$/.test(value)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits.';
        } 
        setErrors(newErrors);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phoneNumber) {
            alert('Please fill out all fields correctly.');
            return;
        }
        alert('Form submitted successfully!');
        setFormData({ fullName: '', email: '', phoneNumber: '' });
    };

    return (
        <>
            <div className="items-center justify-center m-auto">
                <button
                    className=" text-black p-2 rounded-xl hover:text-green-700 hover:border hover:border-green-400"
                    onClick={openModal}
                >
                    Contact Us
                </button>
            </div>

            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-55 z-40"
                        onClick={closeModal}
                    ></div>

                    {/* Modal */}
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                            <button
                                className="text-gray-500 hover:text-red-500 float-right"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <h1 className='text-center text-2xl font-bold bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 bg-clip-text text-transparent'>Book Your Seat</h1>
                            <form onSubmit={handleSubmit} className="mt-6">
                                {/* Name Field */}
                                <div className="mb-4">
                                    <label className="block text-base font-medium mb-2 text-blue-800">Name</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                            errors.fullName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter name"
                                        value={formData.fullName}
                                        onChange={(e) => handleChange('fullName', e.target.value)}
                                        onBlur={(e) => handleBlur('fullName', e.target.value)}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                                    )}
                                </div>
                                {/* Email Field */}
                                <div className="mb-4">
                                    <label className="block text-base font-medium mb-2 text-blue-800 mt-6">Email</label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        onBlur={(e) => handleBlur('email', e.target.value)}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                                    )}
                                </div>
                                {/* Phone Number Field */}
                                <div className="mb-4">
                                    <label className="block text-base font-medium mb-2 text-blue-800 mt-6">Phone Number</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                            errors.phoneNumber
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="Phone number"
                                        value={formData.phoneNumber}
                                        onChange={(e) =>
                                            handleChange('phoneNumber', e.target.value)
                                        }
                                        onBlur={(e) => handleBlur('phoneNumber', e.target.value)}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>
                                    )}
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
                                >
                                    Submit Details
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Contactus;
