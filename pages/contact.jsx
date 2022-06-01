import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar/Navbar'

const contact = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className='px-4 md:px-0 lg:px-0 max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-40'>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold'>INQUIRE</h1>
                    <p className='mt-16'>Complete and submit this form to request our Design Services. </p>
                    <p className='mt-6'>Images may be emailed to</p>
                    <p className='text-[#63dade] font-bold mt-2'>contact@trillgraphix.com</p>
                    <p className='mt-4'>Please allow 24 hours for a response to your inquiry.</p>
                    <p className='mt-4'>Thank you for your interest! </p>

                </div>
                <div className='text-white'>
                    <form>
                        <p className='mb-3'>Name*</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <input className='p-3 w-full text-black' type="text" />
                            <input className='p-3 w-full text-black' type="text" />
                            <label >First Name</label>
                            <label >Last Name</label>
                        </div>
                        <div className='mt-4'>
                            <p className='mb-3'>Instagram Name</p>
                            <input className='w-full p-3 text-black' type="text" />
                        </div>
                        <div className='mt-4'>
                            <p>Email*</p>
                            <input className='w-full p-3 text-black' type="email" />
                        </div>

                        <div className='my-6'>
                            <p>Phone</p>
                            <p className='my-2'>We will only contact you by phone if absolutely necessary.</p>
                            <div className='grid grid-cols-3 gap-4'>
                                <input className='p-3 text-black' type="text" />
                                <input className='p-3 text-black' type="text" />
                                <input className='p-3 text-black' type="text" />
                                <p><span className='mr-20 text-xl'>(###)</span><span className='mr-20 text-xl'>###</span><span className='text-xl'>###</span></p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <p className='mb-2'>Project Type*</p>
                            <select className='text-black' name="project" id="project">
                                <option className='text-black' defaultValue value="Cover Art">Cover Art</option>
                                <option className='text-black' value="Cover Art">Logo Design</option>
                                <option className='text-black' value="Cover Art">Clothing Design</option>
                                <option className='text-black' value="Cover Art">Lyric Video</option>
                                <option className='text-black' value="Cover Art">Other</option>
                            </select>
                        </div>

                        <div className='mt-6'>
                            <p className='text-xl mb-3'>Include Motion Cover?</p>
                            <p>
                                <input className='mr-2 mb-2 text-black' type="checkbox" name="" id="" />
                                <span>Instagram Feed (Square)</span>
                            </p>
                            <p>
                                <input className='mr-2 mb-2 text-black' type="checkbox" name="" id="" />
                                <span>Instagram Story</span>
                            </p>
                            <p>
                                <input className='mr-2 mb-2 text-black' type="checkbox" name="" id="" />
                                <span>YouTube Visualizer</span>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <p className='mb-2'>Budget*</p>
                            <p className='mb-2'>Please note your budget for your project.</p>
                            <input className='w-3/4 p-3 mb-2 text-black' type="text" placeholder='Ex: My Budget For This Project Is $500' />
                        </div>

                        <div className='mt-6'>
                            <p className='mb-2'>Project Details*</p>
                            <p className='mb-2'>Please give a detailed explanation of your project.</p>
                            <p className='mb-2'>If there is no specific vision, let us know, and we will work with you on Creative Direction.</p>
                            <input className='w-3/4 p-10 mb-2 text-black' type="textarea" />
                        </div>

                        <div className='my-6'>
                            <p>Project Deadline*</p>
                            <p className='my-2'>If your deadline falls before our standard 1 week turnaround, the price will reflect that.</p>
                            <div className='grid grid-cols-3 gap-4 w-[40%]'>
                                <input className=' p-3 text-black' type="text" />
                                <input className=' p-3 text-black' type="text" />
                                <input className='p-3 text-black' type="text" />
                                <p><span className='mr-20 text-xl'>MM</span><span className='mr-20 text-xl'>DD</span><span className='text-xl'>YYYY</span></p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <p className='mb-2'>Preferred Payment Method *</p>
                            <select className='text-black' name="project" id="project">
                                <option className='text-black' defaultValue value="Cover Art">Debit/Credit Card</option>
                                <option className='text-black' value="Cover Art">Cash App</option>
                                <option className='text-black' value="Cover Art">Zelle</option>
                                <option className='text-black' value="Cover Art">Apple Pay</option>

                            </select>
                        </div>
                        <button className='w-full px-5 py-3 mt-3 bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                            INQUIRE
                        </button>
                    </form>
                </div>
            </div >

            <Footer />
        </div >
    )
}

export default contact