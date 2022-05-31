import React from 'react';
import { galleryData } from '../../Components/Gallery/GalleryData';


// export async function getStaticPath() {
//   const paths = [
//     '2',
//     '1'
//   ]

//   return {
//     paths,
//     fallback: false
//   }
// };

// export async function getStaticProps(context){
//   const id = context.params.id;

//   const singleData = await galleryData.animation.map(d => d.id === id);

//   return {
//     props: { animation: singleData }
//   }
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
    // const user = galleryData.animation.map(d => d.id === params.id);

    return { props: { user } }
  }

const AnimationDetails = ({ user }) => {
  console.log(user)
  return (
    <section>
      <h2>this is animation details</h2>
    </section>
  );
};

export default AnimationDetails;