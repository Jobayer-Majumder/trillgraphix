import React from 'react';
import { galleryData } from './GalleryData';

console.log(galleryData)

const Gallery = () => {
    return (
        <section className=''>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    galleryData.map((d, i) => 
                        <div>
                            <img src={d.img} alt={d.title} />
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Gallery;