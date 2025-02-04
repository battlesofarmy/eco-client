import axios from 'axios';
import Image from 'next/image';

export default async function SingleProduct({params}) {
  const { _id } = params;
  // const res = await fetch(`http://localhost:5000/products/${_id}`);
  // const product = await res.json();
  const res = await axios.get(`/products/${_id}`);
  const product = await res.data;

  console.log(product);

  return (
    <>
      Single page johfa
      <section className='py-20'>
          <div className="container">
              <Image width={600} height={400} src={product.img} alt={product.img}/>
              <h2 className='text-2xl'>{product.name}</h2>
          </div>
      </section>
    </>
  )
}
