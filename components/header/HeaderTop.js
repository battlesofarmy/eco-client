"use client";
import { CountContext } from '@/utils/CountProvider';
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from '@/utils/AuthProvider';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';

export default function HeaderTop() {
    const {cartCount, setCartCount, listCount} = useContext(CountContext);
    const {user} = useContext(AuthContext);


    const handleSearch = ()=>{
        
    }
    
  return (
    <>
        {/* Top Bar  */}
        <section className="py-2 border-b-[0.5px] text-xs">
           <div className="container">
             <div className="flex justify-between">
                {/* Left side  */}
                <div className="flex gap-6 font-medium">
                    <div><Link href='/'>Account</Link></div>
                    <div><Link href='/'>Track Order</Link></div>
                    <div><Link href='/help'>Support</Link></div>
                </div>
                {/* Right side  */}
                <div className="hidden sm:block">
                    <div className="flex gap-6">
                    <Link href='/'>English</Link>
                    <Link href='/'>BDT</Link>
                    </div>
                </div>
             </div>
          </div>
        </section>



    </>
  )
}