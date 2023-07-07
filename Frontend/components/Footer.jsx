import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { ImTwitter } from "react-icons/im"
import { RiFacebookFill } from "react-icons/ri"
import {  TfiEmail } from "react-icons/tfi"
import { TiArrowRight } from "react-icons/ti"
import { RxInstagramLogo } from "react-icons/rx"

function Footer() {
  return (
    <div className="relative left-0 bottom-0 bg-white  py-5 px-5 text-gray-800  mt-16 shadow-xl min-h- font-poppins ">
    <div
    className='grid md:grid-cols-2 grid-flow-row-dense lg:grid-cols-4
  mx-auto m-2 gap-10 px-2 md:px-4 mt-12 text-xs max-w-7xl'
  >
    <div className=""> 
            <h3 className="capitalize text-3xl mb-3 text-gray-800 font-changa">Aerosmart</h3>
                <div className="block">
                    <p className="leading-6">
                        Aerosmart is an online shopping platform (Ecommerce) where you can all building products from anywhere in nigeria at the comfort of your Home, office or leisure space without the hastle of going to the market place.

                    </p>

            </div>
    </div>

    <div className="leading-6" >
            <h3 className="capitalize text-2xl text-gray-800 font-changa">Office</h3>
            <div className="h-[1px] w-16 bg-gray-500 text-center"></div>
            <div className="block mt-2">

                <p>
                    NO 200 
                </p>
                
                <p>
                Ahmadu Bello Way. 
                </p>
                
                <p>
                U/Rimi Kaduna, Nigeria.
                </p>

                <p className="mt-2 underline text-lg">contact@aerosmart.com</p>
                
                    <p>+234 810 210 2244</p>
            </div>
    </div>

    <div >
            <h3 className="capitalize text-2xl text-gray-800 font-changa">Links</h3>
            <div className="h-[1px] w-14 bg-gray-500 text-center"></div>
            <div className="block mt-3 leading-6">
                <p>
            <Link href={'/'} className="my-2">Home</Link>
                </p>
                <p>
            <Link href={'/'} className="my-2">Cart</Link>
                </p>
                <p>
            <Link href={'/'} className="my-2">Wish List</Link>
                </p>
                <p>
            <Link href={'/'} className="my-2">Frequently asked Qeustions</Link>
                </p>

            </div>
    </div>

    <div >
            <h3 className="capitalize text-xl  text-gray-800 font-changa">News Letter</h3>
            <div className="h-[1px] w-28 bg-gray-500 text-center"></div>

            <div className="block mt-4">
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                <p><TfiEmail className="w-6 h-5" /></p>
                <input type="email" required placeholder="Enter your email address" className=" border-none  outline-none  p-1 text-gray-700 flex-1" />
               </div>

                <div><TiArrowRight className="w-12 h-7 text-gray-800 font-changa" /></div>
                </div>
            </div>
                    <div className="border-b-[1px] border-gray-700 w-full"></div>

                    <div className="my-5 flex space-x-5">
                        <p className="rounded-full p-3 bg-gray-500 text-white"><RiFacebookFill className="w-7 h-7"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white"><BsWhatsapp className="w-7 h-7"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white"><RxInstagramLogo className="w-7 h-7"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white"><ImTwitter className="w-7 h-7"/></p>
                    </div>
    </div>
                        

    </div>
                    <div className="h-[1px] w-full my-4 bg-gray-700"></div>
                    <p className="text-gray-800 font-changa px-1 text-center text-sm">Aerosmart &#169; 2023 - All Rights Reserved</p>
    </div>
  )
}

export default Footer