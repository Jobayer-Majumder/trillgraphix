import React from 'react';
import { galleryData } from '../../Components/Gallery/GalleryData';


// export const getStaticPath = async () => {
//     const path = await galleryData.animation.map(d => {
//         return {
//             params: {id: d.id.toString()}
//         }
//     })

//     return {
//         path,
//         fallback: false
//     }
// }; 

// export const getStaticProps = async (context) => {
//     const id = context.params.id;

//     const singleData = galleryData.animation.map(d => d.id === id);

//     return {
//         props: {animation: singleData}
//     }
// }


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
  
    return { props: { user } }
  }

const AnimationDetails = ({user}) => {
    console.log(user)
    return (
        <section>
            <h2>this is animation details</h2>
        </section>
    );
};

export default AnimationDetails;