import api from '@/utils/axiosCongif';
import axios from 'axios';
import Image from 'next/image';

export default async function SingleProduct({params}) {
  const { _id } = await params;
  
  let product;
  try{
    const res = await api.get(`/products/${_id}`);
    product = res.data;

  }catch(err){
    console.log(err);
  }

  return (
    <>
      <section className='py-20'>
          <div className="container">
              <Image width={600} height={400} src={product.img} alt={product.img}/>
              <h2 className='text-2xl'>{product.name}</h2>
          </div>
      </section>
    </>
  )
}
