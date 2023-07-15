import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios';
import { useState } from 'react';
import { BiHeart, BiMap, BiStore } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/router';

function Accounts() {
    const router = useRouter()
  return (
    <div>
        <Header/>
         <div className="bg-white  my- rounded-md mx-2 shadow-sm lg:hidden">
            <div className="flex items-center space-x-5 p-4 uppercase">
              <div className="rounded-full p-2 bg-gray-200">
                    <CiUser className='text-gray-600 h-10 w-10'/>
              </div>
                    <p className=" font-poppins">users name</p>
            </div>
            <div className=" p-4 flex items-center justify-between capitalize">
                   <div className="hover:text-gray-400 text-gray-600">
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiStore className='h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">orders</p>
                  </div>
                   <div className="hover:text-gray-400 text-gray-600">
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiHeart className=' h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">saved products</p>
                  </div>
                   <div className="hover:text-gray-400 text-gray-600">
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiMap className=' h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">address section</p>
                  </div>
            </div>
           
            <div className="mt-2 w-full bg-gray-400 text-white  p-3 rounded-md uppercase hover:bg-gray-500 transition-all delay-100 tracking-wide text-center text-xs font-poppins "
                 onClick={() => router.push('/accounts/account-details')}>
                my account details
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Accounts