import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import useForm from '../../hooks/useForm';


const url = 'https://countriesnow.space/api/v0.1/countries';




const ShoppingCart = () => {
    const { inputValue, inputErr, handleInputValidation } = useForm()
    const [countries, setCountries] = useState(false)



    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(err => console.error('error:' + err));
    }, [])

    console.log(inputValue)
    console.log(inputErr);

    return (
        <section className='bg-black'>
            <Navbar />


            <div className="max-w-7xl m-auto text-white pt-36">
                <h2 className='pb-4'>Shopping Cart</h2>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                    <div className="md:col-span-4 rounded-md p-4 bg-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-2 mb-2">
                            <div className="flex items-center gap-8">
                                <img className='w-36 rounded-md' src="https://images.squarespace-cdn.com/content/v1/6181566fb79b7919a2b9943f/1642129713524-93FACAY5AWRIAWALWZ86/Colors.jpg?format=500w" alt="" />
                                <div className="">
                                    <h2 className='pb-2'>colors</h2>
                                    <p className=''>cover design</p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center py-4 md:py-0">
                                <div className="">
                                    <h2> - 1 + </h2>
                                </div>
                                <h2>$50</h2>
                                <h6>x</h6>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-2 mb-2">
                            <div className="flex items-center gap-8">
                                <img className='w-36 rounded-md' src="https://images.squarespace-cdn.com/content/v1/6181566fb79b7919a2b9943f/1642131100690-XAXUCO5XAK0HP7VS14PS/MHC+v4.JPG?format=500w" alt="" />
                                <div className="">
                                    <h2 className='pb-2'>colors</h2>
                                    <p className=''>cover design</p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center py-4 md:py-0">
                                <div className="">
                                    <h2> - 1 + </h2>
                                </div>
                                <h2>$50</h2>
                                <h6>x</h6>
                            </div>
                        </div>

                        <div className="flex justify-around items-center py-4">
                            <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                                continue shopping
                            </button>
                            <h2>subtotal: $150</h2>
                        </div>
                    </div>
                    <div className="p-4 md:col-span-2 rounded bg-gray-900">
                        <h2 className='pb-4'>shipping information</h2>

                        <form action="">
                            <div className="grid grid-cols-2 gap-5 py-3">
                                <input onChange={(e) => handleInputValidation(e)} name='first_name' type="text" placeholder='First name' className='p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                                <input onChange={(e) => handleInputValidation(e)} name='last_name' type="text" placeholder='last name' className='p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                            </div>
                            <div className="py-3">
                                <input onChange={(e) => handleInputValidation(e)} name='st_address' type="text" placeholder='street address' className='w-full p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                            </div>
                            <div className="py-3">
                                <input onChange={(e) => handleInputValidation(e)} name='number' type="number" placeholder='phone number' className='w-full p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                            </div>
                            <div className="py-3">
                                <input onChange={(e) => handleInputValidation(e)} name='email' type="email" placeholder='Email' className={`w-full p-3 rounded text-gray-500 ${inputErr?.name === 'email' ? 'ring-red-600' : 'ring-indigo-600'} focus:outline-none focus:ring `} />
                            </div>
                            <div className="grid grid-cols-3 gap-5 py-3">
                                <select onChange={(e) => handleInputValidation(e)} name="country" id="" className='p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600'>
                                    <option selected value="country" disabled>country</option>
                                    {countries?.data?.map((d, i) =>
                                        <option key={i}>{d.country}</option>
                                    )}
                                </select>
                                <input onChange={(e) => handleInputValidation(e)} name='city' type="text" placeholder='city' className='p-3 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                                <input onChange={(e) => handleInputValidation(e)} name='zip_code' type="text" placeholder='zip code' className='p-2 rounded text-gray-500 focus:outline-none focus:ring ring-indigo-600' />
                            </div>
                            
                            <Link href={'/shopping_cart/checkout'}>
                                <button className='px-5 py-3 mt-3 bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                                    save & continue
                                </button>
                            </Link>
                        </form>
                    </div>


                </div>
            </div>

            <Footer />
        </section>
    );
};

export default ShoppingCart;