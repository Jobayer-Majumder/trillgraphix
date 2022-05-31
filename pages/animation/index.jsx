import React from 'react';
import { galleryData } from '../../Components/Gallery/GalleryData';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';



const Animation = () => {
    const paths = galleryData.animation.map(d => ({params: { id: d.id.toString() }}))
    console.log(typeof(paths[0].params.id))
    typeof(paths[0].params.id)

    return (
        <section className='bg-black'>
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-3 pt-36">
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