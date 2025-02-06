import Image from "next/image";
import Slider from "./components/Slider";

// purpose images
import perposeImg_1 from '@/public/home/purpose/purpose-1.jpg'
import perposeImg_2 from '@/public/home/purpose/purpose-2.jpg'
import perposeImg_3 from '@/public/home/purpose/purpose-3.jpg'
import perposeImg_4 from '@/public/home/purpose/purpose-4.jpg'
import perposeImg_5 from '@/public/home/purpose/purpose-5.jpg'
import perposeImg_6 from '@/public/home/purpose/purpose-6.jpg'
import Catagories from "@/components/Categories";
import PopularProduct from "./components/PopoularProduct";

import offerImg_1 from '@/public/home/offer/offer-1.jpg'
import offerImg_2 from '@/public/home/offer/offer-2.jpg'

// Points  
import point_1 from '@/public/home/points/points-1.webp'
import point_2 from '@/public/home/points/points-2.webp'
import point_3 from '@/public/home/points/points-3.webp'


export default function Home() {
  
  return (
    <>
      <Slider/>
      {/* Purpose section  */}
      <section>
        <div className="grid grid-cols-9 my-3">
          <div className="col-span-3 flex justify-center items-center">
            <div className="text-right">
              <h2 className="text-4xl">Creations with</h2>
              <h2 className="text-4xl my-2">purpose</h2>
              <h3 className="text-2">Many choices based on your space</h3>
              <button className="bg-primary p-2 px-4 text-white mt-5 rounded-sm">Explore Now</button>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-3 gap-3">
              <Image src={perposeImg_1} width={300} height={300} alt="purpose"/>
              <Image src={perposeImg_2} width={300} height={300} alt="purpose"/>
              <Image src={perposeImg_3} width={300} height={300} alt="purpose"/>
              <Image src={perposeImg_4} width={300} height={300} alt="purpose"/>
              <Image src={perposeImg_5} width={300} height={300} alt="purpose"/>
              <Image src={perposeImg_6} width={300} height={300} alt="purpose"/>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories: */}
      <section>
        <div className="grid grid-cols-2 gap-3">
          <div style={{background: `url('/home/design/design-1.jpeg')no-repeat center center`, backgroundSize: 'cover'}}>
            <div className="px-20 h-[100vh] bg-black bg-opacity-40">
            <h2 className="text-4xl pt-28 text-white">Designed to enhance your personification
            </h2>
            <button className="text-white text-lg py-2 hover:text-gray-200 bg-transparent border-b-[2px] mt-5">Explore Now</button>
            </div>
          </div>

          <div style={{background: `url('/home/design/design-2.jpeg')no-repeat center center`, backgroundSize: 'cover'}}>
            <div className="px-20 h-[100vh] bg-black bg-opacity-40">
            <h2 className="text-4xl pt-28 text-white">Designed to enhance your personification
            </h2>
            <button className="text-white text-lg py-2 hover:text-gray-200 bg-transparent border-b-[2px] mt-5">Explore Now</button>
            </div>
          </div>
        </div>

        <div style={{background: `url('/home/design/design-3.jpeg')no-repeat top center`, backgroundSize: 'cover'}} className="mt-3">
            <div className="px-20 h-[80vh] bg-black bg-opacity-50">
            <h2 className="text-4xl pt-28 text-white">Flagship Furniture
            </h2>
            <button className="text-white text-lg py-2 hover:text-gray-200 bg-transparent border-b-[2px] mt-5">Explore Now</button>
            </div>
          </div>
      </section>


      {/* Top Categories  */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl ml-4">Top Categories</h2>
          <Catagories/>
        </div>
      </section>


      {/* Artistic Furniture */}
      <section>
        <h2 className="text-2xl ml-5">Artistic Furniture</h2>
        <div className="grid grid-cols-2 gap-3">

          {/* Left part  */}
          <div className="h-[100vh]">
            {/* Image 1  */}
            <div style={{background: `url('/home/artis/artis-1.jpg')no-repeat top center`, backgroundSize: 'cover'}}>
              <div className="px-20 h-[50vh] bg-black bg-opacity-30">
              </div>
            </div>
            {/* Image 2  */}
            <div style={{background: `url('/home/artis/artis-2.jpg')no-repeat top center`, backgroundSize: 'cover'}} className="mt-3">
              <div className="px-20 h-[48.5vh] bg-black bg-opacity-30">
              </div>
            </div>
          </div>
          
          {/* right site  */}
          
             <div style={{background: `url('/home/artis/artis-3.jpg')no-repeat top center`, backgroundSize: 'cover'}}>
              <div className="px-20 h-[100vh] bg-black bg-opacity-30">
              </div>
            </div>
        </div>
      </section>



      {/* Popular products  */}
      <section className="pt-12 pb-8">
        <div className="container">
          <h2 className="text-3xl ml-4">Popular Products</h2>
          <PopularProduct/>
        </div>
      </section>



      {/* Offer section */}
      <section>
        <div className="grid grid-cols-2 gap-3">
          <Image src={offerImg_1} alt="img" className="w-full h-[50vh]"/>
          <Image src={offerImg_2} alt="img" className="w-full h-[50vh]"/>
        </div>
      </section>

      <section className="pt-16 pb-20 text-center">
        <div className="container">
          <h2 className="text-4xl mt-10 mb-8">my ISHO Loyalty Points</h2>
          <grid className="grid grid-cols-3 gap-16 place-items-center">
            <div>
              <Image src={point_1} alt="img" width={100} height={100} className="m-auto"/>
              <h2 className="text-2xl">Sign Up</h2>
              <p>Visit our site and register to earn
              500 points on your first sign-in!</p>
            </div>
            <div>
              <Image src={point_2} alt="img" width={100} height={100} className="m-auto"/>
              <h2 className="text-2xl">Sign Up</h2>
              <p>Visit our site and register to earn
              500 points on your first sign-in!</p>
            </div>
            <div>
              <Image src={point_3} alt="img" width={100} height={100} className="m-auto"/>
              <h2 className="text-2xl">Sign Up</h2>
              <p>Visit our site and register to earn
              500 points on your first sign-in!</p>
            </div>
          </grid>
        </div>
      </section>


      
    </>
  );
}
