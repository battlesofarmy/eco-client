"use client"
import { CountContext } from '@/utils/CountProvider';
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { AuthContext } from '@/utils/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import api from '@/utils/axiosCongif';


export default function CartWishlistIcon({ele}) {
  const { cartCount, setCartCount, wishlistCount, setWishlistCount } = useContext(CountContext);
  const {user} = useContext(AuthContext);


  const  handleAddToCart =()=> {
    // alert("hi");

    ele.count = 1;
    ele.email = user.email;

    // axios.post('http://localhost:5000/cart/add', ele)
    api.post('/cart/add', ele)
    .then((res)=> {
      if(res.status===200){
        setCartCount(cartCount+1);
      }
      toast("Added to Cart Successfully", {autoClose: 2000});
    })
    .catch((err)=> console.log(err));
  }

  const handleAddToWishlist =()=>{
    
    // axios.post(`http://localhost:5000/wishlist/${user?.email}`, ele)
    api.post(`/wishlist/${user?.email}`, ele)
    .then((res)=> {
      if(res.status===200){
        setWishlistCount(wishlistCount+1);
      }else{
        setWishlistCount(wishlistCount-1);
      }
     console.log(res.status)
    })
    .catch((err)=> console.log(err));
  }

return (
  <>
    {/* Wishlist icon  */}
    {/* FaHeart */}
    <FaRegHeart onClick={()=> handleAddToWishlist()} className="text-2xl cursor-pointer"/>
    {/* Cart Icon  */}
    <IoCartOutline onClick={()=>handleAddToCart()} className="text-3xl -ml-1 mt-2 cursor-pointer"/>
    {/* Tost  */}
    <ToastContainer/>
  </>
)
}
