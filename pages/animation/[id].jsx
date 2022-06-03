import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { HiOutlineMinusSm } from 'react-icons/hi';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';



export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/get_items')
  const users = await res.json()

  const paths = users.map((user) => ({
    params: { id: user._id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/items_by_id/${params.id}`)
  const animation = await res.json();

  return { props: { animation } }
}

const AnimationDetails = ({ animation }) => {
  const [quantity, setQuantity] = React.useState(1);


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  };

  const addToCart = () => {
    const data = {...animation[0], quantity}

    console.log(data);
  }

  const { title, sub_title, description, sub_category, file } = animation[0];

  return (
    <section className='bg-black'>
      <Navbar />

      <h2 className='text-3xl text-center font-bold pt-40 text-white'>Item Details</h2>
      <div className='px-4 md:px-0 py-20 max-w-5xl m-auto gap-8 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <img className='rounded-md' src={file} alt="" />
        </div>
        <div className='text-white flex flex-col justify-center items-start'>

          <div className="pb-6">
            <h2 className='text-2xl text-white'>{title}</h2>
            <h2 className='text-xl mt-2'>{sub_title}</h2>
            <h2 className='text-xl mt-2'>{sub_category}</h2>
            <p className='mt-2 text-white'>{description}</p>
          </div>

          <p className='py-2'>Quantity</p>
          <div className="">
            <button onClick={decreaseQuantity} className='border border-gray-700 rounded-full p-2'>< HiOutlineMinusSm /></button>
            <span className='px-3'>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className='border border-gray-700 rounded-full p-2'> <BsPlus /></button>
          </div>

          <button onClick={addToCart} className='w-full px-5 py-3 mt-5 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded'>
            add to cart
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AnimationDetails;