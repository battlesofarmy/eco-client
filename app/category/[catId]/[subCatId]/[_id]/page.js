import axios from 'axios';
import Image from 'next/image';
import React from 'react'

export default async function SingleProduct({params}) {
  const { _id } = params;
  // const res = await fetch(`http://localhost:5000/products/${_id}`);
  // const product = await res.json();
  const res = await axios.get(`/products/${_id}`);
  const product = await res.json();

  return (
    <>
    single page
        <section className='py-20'>
            <div className="container">
                <Image width={200} height={200} src={product.img} alt={product.img}/>
                <h2 className='text-2xl'>{product.name}</h2>
            </div>
        </section>
    </>
  )
}
