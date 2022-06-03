import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { HiOutlineMinusSm } from 'react-icons/hi';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar/Navbar';

const itemDetails = () => {
    const [quantity, setQuantity] = React.useState(1);

    console.log(quantity)

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }


    return (
        <section className='bg-black'>
            <Navbar />

            <h2 className='text-3xl text-center font-bold pt-40 pb-20 text-white'>Item Details</h2>
            <div className='px-4 md:px-0 max-w-5xl m-auto gap-5 grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6ghC4OB1yk7uqJoEupPCdoFFfYecE5J_UQ&usqp=CAU" alt="" />
                </div>
                <div className='text-white'>

                    <div className="pb-6">
                        <h2 className='text-2xl text-white'>Ginger + Greens</h2>
                        <h2 className='text-xl mt-2'>Smoothie</h2>
                        <p className='mt-2 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum obcaecati temporibus! Nemo non ea cupiditate incidunt, quod rerum quidem quia dignissimos totam ab numquam recusandae quisquam saepe ipsam qui?</p>
                    </div>

                    <p className='py-2'>Quantity</p>
                    <button onClick={decreaseQuantity} className='border rounded-full p-2'>< HiOutlineMinusSm /></button>
                    <span className='px-3'>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className='border rounded-full p-2'> <BsPlus /></button>

                    <button className='w-full px-5 py-3 mt-5 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded'>
                        add to cart
                    </button>
                </div>

            </div>

            <Footer />
        </section>
    )
}

export default itemDetails