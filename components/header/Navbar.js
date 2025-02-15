"use client"

import React, { useContext, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CountContext } from '@/utils/CountProvider';
import { AuthContext } from '@/utils/AuthProvider';
import Image from 'next/image';
import logo from '../../public/logo.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  // { name: 'Category', href: '/category', current: false },
  { name: 'Product', href: '/category/103/1301', current: false },
  { name: 'Sub Category', href: '/subcategory', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [current, setCurrent] = useState(navigation.find(item => item.current)?.name);
  const { user, logOut } = useContext(AuthContext);
  
  const { cartCount, wishlistCount } = useContext(CountContext);



  function handleClick(name) {
    setCurrent(name);
  }
  const handleLogout = ()=>{
    logOut();
  }

  return (
<>
    <Disclosure as="nav" className="border-b-2 py-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href='/'>
                    <Image src={logo} width={150} height={150} alt='Logo'/>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleClick(item.name)}
                        className={classNames(
                          current === item.name ? 'bg-primary text-white' : 'text-gray-800 hover:bg-primary hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={current === item.name ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {
                user ?
                <button onClick={handleLogout} className='text-green-400 mx-5'>{user?.email}</button>
                :
                <>
                  <Link href={'/login'} className='text-[15px] px-4'>Login</Link>
                  <Link href={'/register'} className='text-[15px] px-4'>Register</Link>
                </>
              }

        {
          // user?
          // <>
          // </>
          // :
          // <>
          // </>
        }

              <div className="navbar-end flex items-center gap-5">

               <Link href='/wishlist'>
                 <div className='flex'>
                        <div className='text-3xl'><IoMdHeartEmpty/></div>
                        <p className='bg-primary text-white w-5 h-5 text-center rounded-full text-[0.8rem] -mt-1 -ml-3 '>  {wishlistCount}  </p>
                  </div>
               </Link>
                
                <Link href='/cart'>
                  <div className='flex'>
                    <div className='text-3xl'><IoCartOutline/></div>
                    <p className='bg-primary text-white w-5 h-5 text-center rounded-full text-[0.8rem] -mt-1 -ml-3'> 
                      {cartCount}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    current === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={current === item.name ? 'page' : undefined}
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

</>
  );
}