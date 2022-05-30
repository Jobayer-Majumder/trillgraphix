import React from 'react';
import { galleryData } from '../../Components/Gallery/GalleryData';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';



const Animation = () => {
    return (
        <section className='bg-black'>
            <Navbar />

            <h2>this is animation page</h2>

            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    galleryData.animation.map((d, i) =>
                        <div key={i}>
                            <img src={d.video} alt={d.title} />
                        </div>
                    )
                }
            </div>


            <Footer />
        </section>
    );
};

export default Animation;