import React, { useState } from "react";
import Vector5 from "../../../../assets/Vector (5).svg";
import Vector6 from "../../../../assets/Vector (6).svg";
import Vector7 from "../../../../assets/Vector (7).svg";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false); 
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowModal(true); 
            
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const closeModal = () => {
        setShowModal(false); 
    };

    return (
        <div className="w-full pt-[100px]">
            <div className="w-[1440px] mx-auto flex flex-col items-center space-y-6">
                <div className="text-center w-[644px] mx-auto mb-12">
                    <h1 className="text-black text-[36px] font-poppins font-semibold leading-[54px]">
                        Get In Touch With Us
                    </h1>
                    <p className="text-[#9F9F9F] text-[16px] font-poppins font-normal leading-[24px] mt-4">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
                        Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>

                <div className="w-[1058px] flex justify-between gap-x-80">
                    <div className="w-[393px]">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <img src={Vector5} alt="Address Icon" className="w-[22px] h-[28px]" />
                                <div>
                                    <p className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                        Address
                                    </p>
                                    <p className="text-black text-[16px] font-poppins font-normal leading-[24px]">
                                        236 5th SE Avenue, New York NY10000, United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img src={Vector6} alt="Phone Icon" className="w-[22px] h-[22px]" />
                                <div>
                                    <p className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                        Phone
                                    </p>
                                    <p className="text-black text-[16px] font-poppins font-normal leading-[24px]">
                                        Mobile: +(84) 546-6789
                                    </p>
                                    <p className="text-black text-[16px] font-poppins font-normal leading-[24px]">
                                        Hotline: +(84) 456-6789
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img src={Vector7} alt="Working Time Icon" className="w-[23px] h-[23px]" />
                                <div>
                                    <p className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                        Working Time
                                    </p>
                                    <p className="text-black text-[16px] font-poppins font-normal leading-[24px]">
                                        Monday-Friday: 9:00 - 22:00
                                    </p>
                                    <p className="text-black text-[16px] font-poppins font-normal leading-[24px]">
                                        Saturday-Sunday: 9:00 - 21:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[635px]">
                        <form onSubmit={handleSubmit} className="w-[531px] h-[741px] bg-white p-8 rounded-lg">
                            <div className="mb-6">
                                <label className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-[75px] px-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                                    placeholder="Abc"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[75px] px-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                                    placeholder="Abc@def.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full h-[75px] px-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                                    placeholder="This is an optional"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="text-black text-[16px] font-poppins font-medium leading-[24px]">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-[120px] px-4 py-2 border border-[#9F9F9F] rounded-[10px] mt-2"
                                    placeholder="Hi! i’d like to ask about"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-[237px] h-[55px] bg-[#B88E2F] text-white text-[16px] font-poppins font-normal leading-[24px] rounded-[5px] border border-[#B88E2F] hover:bg-[#D3A84F] transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Thank you for your contact!</h2>
                        <p className="text-gray-700 mb-6">We will get back to you as soon as possible.</p>
                        <button
                            onClick={closeModal}
                            className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#D3A84F] transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;