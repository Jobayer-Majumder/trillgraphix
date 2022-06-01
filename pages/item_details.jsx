import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar/Navbar'

const itemDetails = () => {
    return (
        <section className='bg-black'>
            <Navbar />

            <h2 className='text-3xl text-center font-bold pt-40 text-white'>Item Details</h2>
            <div className='px-4 md:px-0 max-w-5xl m-auto  grid grid-cols-1 lg:grid-cols-2'>
                <div >
                    <img className='mx-auto mt-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6ghC4OB1yk7uqJoEupPCdoFFfYecE5J_UQ&usqp=CAU" alt="" />
                </div>
                <div className='mt-20 '>
                    <h2 className='font-bold text-xl'>Ginger + Greens</h2>
                    <h2 className='font-semibold text-xl mt-2'>Smoothie</h2>
                    <p className='mt-2 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum obcaecati temporibus! Nemo non ea cupiditate incidunt, quod rerum quidem quia dignissimos totam ab numquam recusandae quisquam saepe ipsam qui?</p>
                    <p className='mt-8 font-bold'>Quantity: <button className='border mx-3 p-2 mr-2'>+</button><span>0</span><button className='border mx-3 p-2'>-</button></p>
                    <button className='w-full px-5 py-3 mt-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                        add to cart
                    </button>
                </div>

            </div>

            <Footer />
        </section>
    )
}

export default itemDetails