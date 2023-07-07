import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import CategoryIcons from '../components/CategoryIcons'
import SectionSlider from '../components/SectionSlider'
import DiscountSlider from '../components/DiscountSlider'
import ProductFeed from '../components/ProductFeed'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import GridSectionSlider from '../components/GridSectionSlider'
import {AuthContext} from '../context/authContext'
import Loading from '../components/Loading'
import DesktopBanner from '../components/DesktopBanner'
import DesktopCategpry from '../components/DesktopCategpry'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import About from '../components/About'


export default function Home({products}) {
  const router = useRouter()
  const {authToken} = useContext(AuthContext)
  // console.log(authToken)
  // const [loading, setLoading] = useState(false)
    useEffect(() => {
    // let token = sessionStorage.getItem("Token");
    // if (!token) {
    //   router.push("/login");
    // }
    // setTimeout(() => {
    //   setLoading(true);
    // }, 500)
  }, );
  return (
    <div>
      <Head>
        <title>Aerosmart Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
     {/* <Banner/> */}
     <DesktopBanner/>
    <main className='lg:mt-5 max-w-7xl mx-auto'>
      <div className="hidden lg:block">
      <DesktopCategpry/>
      </div>
      <div className="lg:hidden">
     <CategoryIcons/>
      </div>
      <About/>
      <div className="hidden lg:block">
      <FeaturedProducts products={products}/>
      <LatestProducts products={products}/>
      </div>
     <SectionSlider sectionTitle={'latest products'} products={products}/>
     <GridSectionSlider sectionTitle={'top selling products'} products={products} />
     <h2 className="capitalize text-xl font-poppins mb-5 hidden lg:inline-block">All Products</h2>
     <div className="flex items-center py-2 px-3 justify-center bg-gray-300 p-2 text-gray-700  mb-2 text-center lg:hidden">
          <p className="font-bold uppercase ">Products</p>
      </div>
     <ProductFeed/>
     <DiscountSlider sectionTitle={'discount products'} products={products} />
     </main>
     <Footer />
    </div>

  )
}


export const getServerSideProps = async (context) => {
  const page = 1
  const perPage = 8
  const graphqlQuery = {
    query: `
    {
      products(page: ${page}, perPage: ${perPage}) {
        products{
          id
          title
          price
          image_url
          description
        }
      }
    }
    `
  };
   const result = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {  
        return res.json();
      })
      .then(resData => {
        return resData
      })
      .catch(err => console.log(err))
     
      const data = await result
    return {
      props: {
        products: data?.data?.products?.products || []
      }
    }
  }