import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { galleryData } from '../../Components/Gallery/GalleryData';
import Navbar from '../../Components/Header/Navbar/Navbar';

const cover_design = () => {

    return (
        <section className='bg-black'>
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    galleryData.cover.map((d, i) =>
                        <div key={i}>
                            <img src={d.img} alt={d.title} />
                        </div>
                    )
                }
            </div>

            <Footer />
        </section>
    );
};

export default cover_design;