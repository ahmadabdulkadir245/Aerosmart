import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionSlider from '../components/SectionSlider'
import ProductSlider from '../components/ProductSlider'
import ProductFeed from '../components/ProductFeed'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import GridSectionSlider from '../components/GridSectionSlider'
import {AuthContext} from '../context/authContext'
import DesktopBanner from '../components/DesktopBanner'
import DesktopCategpry from '../components/DesktopCategpry'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import About from '../components/About'
import HomeLoading from '../components/Loadings/HomeLoading'
import { useDispatch } from 'react-redux'
import { getProducts } from '../slices/productSlice'
import axios from 'axios';



export default function Home({products}) {
  const router = useRouter()
  const {authToken} = useContext(AuthContext)
  const dispatch = useDispatch()  
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    // let token = sessionStorage.getItem("Token");
    // if (!token) {
    //   router.push("/login");
    // }
    // setLoading(true);
    dispatch(getProducts(products));
    setTimeout(() => {
      setLoading(false);
    }, 300)

  },[loading, dispatch, products] );
  
  return (
    <div>
      <Head>
        <title>Aerosmart Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {loading ? 
      <HomeLoading />
      :  
      <>
         {/* <Banner/> */}
         <DesktopBanner/>
    <main className='lg:mt-5 max-w-7xl mx-auto'>
      <DesktopCategpry/>
      <About/>
     <ProductSlider sectionTitle={'latest products'} products={products} path={'/'}/>
     <ProductSlider sectionTitle={'discount products'} products={products} path={'/'} bgColor={'bg-gray-300'} discount={true}/>

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
     </main>
     <Footer />
    </>
}
    </div>

  )
}


export const getServerSideProps = async (context) => {
  const page = 1;
  const perPage = 8;

  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      query: `
        {
          products(page: ${page}, perPage: ${perPage}) {
            products {
              id
              title
              price
              image_url
              category
              quantity
              description
            }
          }
        }
      `,
    });

    const products = response.data?.data?.products?.products || [];

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
};
