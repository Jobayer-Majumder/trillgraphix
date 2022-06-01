import React from 'react';
import Link from 'next/link';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';


export const getStaticPath = async () => {
    return {
        paths: [
            '/shopping_cart/checkout'
        ]
    }
}

const Checkout = () => {
    // console.log(params)
    return (
        <section className='bg-black'>
            <Navbar />
            <div className="max-w-7xl m-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 min-h-screen pt-36 text-white">
                    <div className="md:col-span-4 rounded-md p-4 bg-gray-900">

                    </div>
                    <div className="md:col-span-2">
                        <h2 className='pb-4'>order summary</h2>
                        <div className="p-4 rounded bg-gray-900">
                            <div className="pb-2 mb-4 flex justify-between items-center border-b border-gray-700">
                                <h2>order subtotal (2): </h2>
                                <p>$100</p>
                            </div>
                            <div className="pb-2 mb-4 flex justify-between items-center border-b border-gray-700">
                                <h2>shipping subtotal (2):</h2>
                                <p>$12</p>
                            </div>
                            <div className="pb-2 mb-4 flex justify-between items-center border-b border-gray-700">
                                <h2>sales taxes</h2>
                                <p>$5</p>
                            </div>
                            <div className="mb-4 flex justify-between items-center">
                                <h2>grand total:</h2>
                                <p>$100</p>
                            </div>
                            <Link href={'/shopping_cart/checkout'}>
                                <button className='w-full px-5 py-3 mt-3 bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                                    checkout
                                </button>
                            </Link>
                            <div className="py-5 text-center">
                                <h2>free shipping & free returns</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Checkout;