'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const [selectedShipping, setSelectedShipping] = useState('fedex');

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-20 xl:px-32">
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row">
        <Link href="#" className="text-2xl font-bold text-gray-800">
          sneekpeeks
        </Link>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="flex items-center space-x-4">
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                  ✓
                </span>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white">
                  2
                </span>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
                  3
                </span>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-8">
        <div>
          <h2 className="text-xl font-medium">Order Summary</h2>
          <p className="text-gray-400">Check your items and select a shipping method.</p>
          <div className="mt-8 space-y-4 bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <Image src="/images/shoe1.jpg" width={100} height={100} className="rounded-md" alt="Shoe" />
              <div className="ml-4">
                <p className="font-semibold">Nike Air Max Pro</p>
                <p className="text-lg font-bold">$138.99</p>
              </div>
            </div>
          </div>
          <h2 className="mt-8 text-lg font-medium">Shipping Methods</h2>
          <div className="mt-5 space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value="fedex"
                checked={selectedShipping === 'fedex'}
                onChange={() => setSelectedShipping('fedex')}
                className="hidden"
              />
              <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                {selectedShipping === 'fedex' && <span className="w-2 h-2 bg-gray-700 rounded-full"></span>}
              </span>
              <span className="font-medium">FedEx Delivery (2-4 Days)</span>
            </label>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium">Payment Details</h2>
          <p className="text-gray-400">Complete your order by providing payment details.</p>
          <form className="mt-4 space-y-4">
            <input type="email" placeholder="Your email" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Card Holder" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded-md" />
            <div className="flex space-x-2">
              <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded-md" />
              <input type="text" placeholder="CVC" className="w-1/2 p-2 border rounded-md" />
            </div>
            <button className="w-full bg-gray-900 text-white p-2 rounded-md">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
