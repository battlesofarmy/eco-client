import api from '@/utils/axiosCongif';
import Image from 'next/image';
import React from 'react'

export default async function SingleProduct({params}) {
  const { _id } = await params;
  
  let product;
  try{
    const res = await api.get(`/products/${_id}`);
    product =  res.data;

  }catch(err){
    console.log(err);
  }
  console.log(product)

  return (
    <>
        <section className='py-20'>
            <div className="container">


      <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
        <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
          <div className="relative p-8 md:w-4/6">
            <div className=" bm-4">
              <h2 className="mb-2 text-2xl font-black">{product.name}</h2>
              <p className="text-xs uppercase">{product.model}</p>
            </div>
            <p className="mt-3 font-sans text-base tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.
            </p>
            <div className="flex flex-col md:flex-row md:items-end">
              <p className="mt-6 text-4xl font-black">
                {product.price} BDT
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row">
              <button className="mr-2 mb-4 flex items-center justify-center rounded-md bg-primary py-2 px-8 text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Buy now
              </button>
              <button className="mr-2 mb-4 flex items-center justify-center rounded-md border py-2 px-8 text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
                Add To Card
              </button>
            </div>
          </div>
          <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
            <Image
              src={product.img}
              alt="Shop image"
              width={400} // Set a fixed width
              height={300} // Set a fixed height
              className="block h-auto max-w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>



            </div>
        </section>
    </>
  )
}




