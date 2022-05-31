import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import { galleryData } from '../../Components/Gallery/GalleryData';

const ClothingDesign = () => {
    return (
        <section>
            <Navbar />

            {
                <div className="grid grid-cols-1 md:grid-cols-3 pt-36">
                    {
                        galleryData.clothingDesign.map((d, i) =>
                            <div key={i}>
                                <img src={d.img} alt={d.title} />
                            </div>
                        )
                    }
                </div>
            }

            <Footer />
        </section>
    );
};

export default ClothingDesign;