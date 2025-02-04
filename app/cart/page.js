"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { CountContext } from "@/utils/CountProvider";
import { AuthContext } from "@/utils/AuthProvider";
import Image from "next/image";
import Link from "next/link";

export default function MyCart() {
const {user, loading} = useContext(AuthContext);
const [allCartItems, setAllCartItems] = useState([]);
const {cartCount, setCartCount} = useContext(CountContext);
// const [count, setCount] = useState(0);

useEffect(()=>{
    axios.get(`http://localhost:5000/cart/${user?.email}`)
    .then(res=>setAllCartItems(res.data));
},[loading]);

const handleCartItemDelete =(id)=>{
    axios.delete(`http://localhost:5000/cart/delete/${id}`)
    .then(()=> {
      setCartCount(cartCount-1);
      setAllCartItems((data)=> data.filter(tem=> tem._id != id))
    })
    .catch(err=> console.log(err))
}

const increaseProdouctCount =(ele)=>{
  axios.post(`http://localhost:5000/cart/add`,ele)
  .then(()=> {
    setAllCartItems((data)=> data.map(tem=> tem._id === ele._id ? { ...tem, count: tem.count + 1 } : tem));
  })
}

const decreaseProdouctCount =(ele)=>{
  axios.post(`http://localhost:5000/cart/remove`,ele)
  .then(()=>{
    setAllCartItems((data)=> data.map(tem=> tem._id === ele._id ? { ...tem, count: tem.count-1 } : tem));
  })
}

const calculateTotalPrice = () => {
  return allCartItems?.reduce((sum, ele) => sum + ele.price * ele.count, 0);
};
const totalItems = () => {
  return allCartItems?.reduce((sum, ele) => sum + ele.count, 0);
};

return (
    <>
      <section className="py-20 ">
        <div className="container">
         {
          allCartItems.length > 0?
          <div className="grid grid-cols-8 gap-5">
          {/* Cart Items  */}
           <div className="col-span-5 ">
                 <div className="grid grid-cols-8 mb-3 place-items-center">
                     <h4 className="col-span-1 font-semibold">Product Img</h4>
                     <h4 className="col-span-3 font-semibold">Title</h4>
                     <h4 className="col-span-1 font-semibold">Price</h4>
                     <h4 className="col-span-2 font-semibold">Count</h4>
                     <h4 className="col-span-1 font-semibold">Removed</h4>
                 </div>
                     {
                         allCartItems?.map(ele=>
                             <div key={ele._id} className="grid grid-cols-8 place-items-center border-2 my-2">
 
                                <div className="col-span-4">
                                 <div className="grid grid-cols-4 items-center">
                                   <Image width={100} height={100} className="col-span-1" src={ele.img} alt="img" />
                                     <h4 className="col-span-3 pl-4">
                                       <p className="text-lg">{ele.name}</p>
                                       <p className="text-xs">{ele.model}</p>
                                     </h4>
                                 </div>
                                </div>
 
                                 <h4 className="col-span-1">{ele.price * ele.count}</h4>
                                 <h4 className="col-span-2 text-lg">
                                     <div className="flex justify-center items-center gap-2">
                                       
                                          {/* -icon  */}
                                          <div className={`${ele.count < 2 ? "cursor-not-allowed opacity-50" :"cursor-pointer"}`}>
                                           <div  onClick={()=> ele.count>1 && decreaseProdouctCount(ele)} className={`bg-gray-300 text-center w-8 flex items-center justify-center pb-1 text-xl`}><FiMinus className="mt-1"/></div>
                                         </div>
                                         
                                         <div>{ele.count}</div>
                                          {/* +icon  */}
                                          <div style={{cursor: 'pointer'}}>
                                           <div onClick={()=> increaseProdouctCount(ele)} className="bg-gray-300 text-center pb-1 w-8 text-xl">+</div>
                                         </div>
                                     </div>
                                 </h4>
                                 <h4 onClick={()=>handleCartItemDelete(ele._id)} className="col-span-1 text-red-600"><button className="text-2xl"><MdDelete/></button></h4>
                             </div>
                         )
                     } 
             </div>
             {/* total Price Section  */}
             <div className="col-span-3">
                 <div className=" border shadow-sm p-10 mt-9">
                     <h2 className="text-2xl font-semibold mb-5">Order Summmery</h2>
                     <div className="flex justify-between mb-3">
                       <p>Subtotal ({totalItems()} items)</p>
                       <p>{calculateTotalPrice()}</p>
                     </div>
                     <div className="flex justify-between mb-3">
                       <p>Shepping Fee</p>
                       <p>100</p>
                     </div>
                     <div className="flex justify-between mb-3">
                       <p className="font-semibold">Total:</p>
                       <p>{calculateTotalPrice()+100}</p>
                     </div>
                     <Link href={'/checkout'}>
                      <button className="bg-primary text-white py-2 rounded-sm mt-5 w-full">Checkout</button>
                     </Link>
                 </div>
             </div>
           </div>
           :
           <h2 className="text-xl">The Shopping cart is empty. No product added!</h2>
         }
        </div>
      </section>
    </>
  )
}
