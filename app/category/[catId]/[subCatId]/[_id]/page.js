import api from '@/utils/axiosCongif';
import Image from 'next/image';
import React from 'react'

export default async function SingleProduct({params}) {
  const { _id } = await params;
  
  let product;
  try{
    const res = await api.get(`/products/${_id}`);
    product =  res.json();

  }catch(err){
    console.log(err);
  }

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
