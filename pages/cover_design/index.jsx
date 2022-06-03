import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { galleryData } from '../../Components/Gallery/GalleryData';
import Navbar from '../../Components/Header/Navbar/Navbar';

const cover_design = () => {

    return (
        <section className='bg-black'>
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-3 pt-36">
                {
                    galleryData.cover.map((d, i) =>
                        <div key={i}>
                            <img src={d.file} alt={d.title} />
                        </div>
                    )
                }
            </div>

            <Footer />
        </section>
    );
};

export default cover_design;