"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { CountContext } from "@/utils/CountProvider";
import { AuthContext } from "@/utils/AuthProvider";
import Image from "next/image";
import api from "@/utils/axiosCongif";

export default function Wishlist() {
   const {user, loading} = useContext(AuthContext);
   const [wishList, setWishlist] = useState([]);
   const { setCartCount, setListCount} = useContext(CountContext);
   const [isProcessing, setIsProcessing] = useState(false); // State to track clicks


   // Load wishlist data
   useEffect(()=>{
     if(user?.email){
        // axios.get(`http://localhost:5000/wishlist/${user?.email}`)
        api.get(`/wishlist/${user?.email}`)
        .then((res)=> {
            setWishlist(res.data[0]?.products);
            console.log(res.data[0]?.products)
        })
        .catch((err)=> console.log(err));
      }
   },[loading])


// wishlist to cart 
const wishlistToCart = async (ele) => {

    if(isProcessing) return;
    setIsProcessing(true);

    try {
      // Remove from wishlist
      await api.patch(`/wishlist/${user.email}`, ele);
  
      // Update local wishlist state
      setListCount((prev) => prev - 1);
      setWishlist((data) => data.filter((item) => item._id !== ele._id));
  
      // Add to cart
      const cartItem = { ...ele, email: user.email, count: 1 };
      const addToCartPromise = axios.post("https://ecommerce.muntasir3301.xyz/carts", cartItem);

      toast.promise(addToCartPromise, {
        pending: "Adding product to cart...",
        success: "Product added to cart successfully!",
        error: "Failed to add product to cart",
      });
  
      // Wait for cart API call to resolve
      const response = await addToCartPromise;
  
      // If successful, update cart count
      if (response.status === 200) {
        setCartCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error during wishlist-to-cart operation:", error);
  
      // Show error toast
      toast.error("An error occurred while moving item to cart.");
    } finally{
        setIsProcessing(false)
    }
  };
  



  // delete wishlist item
  const handleWishlistItemDelete = async (ele) => {
    if (isProcessing) return; // Prevent duplicate clicks
    setIsProcessing(true); // Set processing flag
  
    try {
      await axios.patch(`https://ecommerce.muntasir3301.xyz/wishlist/${user.email}`, ele);
  
      // Update wishlist state
      setListCount((prev) => prev - 1);
      setWishlist((data) => data.filter((item) => item._id !== ele._id));
    } catch (err) {
      console.error("Error during delete from wishlist:", err);
      // Optionally show a toast message or an alert
    } finally {
      setIsProcessing(false); // Reset processing flag
    }
  };
  

  return (
    <>
        <section className="py-20 ">
            <div className="container">
                <div className="shadow px-3 py-3 border">
                    {
                        wishList.length>0 && 
                        <div className="grid grid-cols-7 my-5 place-items-center">
                            <h4 className="col-span-1 text-lg font-semibold">Product Img</h4>
                            <h4 className="col-span-2 text-lg font-semibold">Products Name & model</h4>
                            <h4 className="col-span-2 text-lg font-semibold">Price</h4>
                            <h4 className="col-span-1 text-lg font-semibold">Add to cart</h4>
                            <h4 className="col-span-1 text-lg font-semibold">Removed</h4>
                        </div>
                    }

                {
                    wishList.length > 0 ? wishList.map(ele=>
                      <div key={ele._id} className="grid my-3 grid-cols-7 place-items-center border-2 py-2">
                          <div className="w-full pl-2">
                             <Image width={50} height={50} className="col-span-1 max-w-32" src={ele.img} alt="img" />
                          </div>
                          <div className="col-span-2 w-full">
                            <p className="text-lg">{ele.name}</p>
                            <p>{ele.model}</p>
                          </div>
                          <div className="col-span-2">{ele.price}</div>
                          <h4 onClick={()=>wishlistToCart(ele)} className="col-span-1 text-green-600 "><button><FaBagShopping className="text-2xl"/></button></h4>
                          <h4 onClick={()=>handleWishlistItemDelete(ele)} className="col-span-1 text-red-600"><button><MdDelete className="text-2xl"/></button></h4>
                      </div>
                    )
                    :
                    <h2 className="text-center text-xl">No product on wishlist</h2>
                }
                </div>
            </div>
        </section>

        <ToastContainer />

    </>
  )
}
