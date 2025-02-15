"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthProvider";
import api from "./axiosCongif";

export const CountContext = createContext(null);

export default function CountProvider({children}) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const {user, loading} = useContext(AuthContext);

  useEffect(()=>{
    api.get(`/cart/${user?.email}`, {withCredentials: true})
    .then((res)=> setCartCount(res.data?.length))
    .catch((err)=> console.log(err));


    // axios.get(`http://localhost:5000/wishlist/${user?.email}`)
    api.get(`/wishlist/${user?.email}`)
    .then((res)=> setWishlistCount(res.data[0]?.products.length))
    .catch((err)=> console.log(err));
    
  },[loading])

  const countInfo = {cartCount, setCartCount, wishlistCount, setWishlistCount};
  return (
    <CountContext.Provider value={countInfo}>
      {children}
    </CountContext.Provider>
  )
}