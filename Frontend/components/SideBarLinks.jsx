import { AiOutlineShop } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import { CiShoppingCart } from 'react-icons/ci'
import { GiConcreteBag, GiOpeningShell, GiWoodBeam } from 'react-icons/gi'
import SideBarLink from './SideBarLink'
import { MdAdminPanelSettings, MdConstruction } from 'react-icons/md'
import {  AiOutlineShoppingCart} from "react-icons/ai";
import { BsBricks } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { navState } from '../atoms/navHandler'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/authContext'
import { useContext, useState } from 'react'
import Loading from './Loading'

function SideBarLinks() {
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const closeNav = (path) => {
    setOpenSideBar(false)
    router.push(`${path}`)
  }
  const {logout, authToken} = useContext(AuthContext)
  const logoutHandler = () => {
    logout()
      router.replace('/login')
    setOpenSideBar(false)
  }

  if(loading) {
    return <Loading/>
  }

  return (
    <div className='px-[10px] py-[6px] pb-8 text-gray-500 capitalize text-md h-full overflow-y-scroll'>
        <div className='flex justify-between '>
          {authToken ? 
          <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]' onClick={logoutHandler} >
          logout
        </button>
        :
        <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]' onClick={closeNav.bind(this, '/login')} >
              Login
            </button> 
        }
           
            <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]' onClick={closeNav.bind(this, '/signup')}>
              Sign Up
              </button>
        </div>
        <hr className='h-[1px] w-full mt-4 mb-2 bg-gray-500 '/>


        <SideBarLink Icon={RiUser3Line} title={'my account'} path={'/'}/>
        <SideBarLink Icon={AiOutlineShop} title={'orders'} path={'/checkout'}/>
        <SideBarLink Icon={AiOutlineShoppingCart} title={'cart'} path={'/cart'}/>
        <SideBarLink Icon={GiWoodBeam} title={'woods'} path={'/'}/>
        <SideBarLink Icon={MdConstruction} title={'metals'} path={'/'}/>
        <SideBarLink Icon={GiConcreteBag} title={'cement'} path={'/'}/>
        <SideBarLink Icon={GiOpeningShell} title={'stones'} path={'/'}/>
        <SideBarLink Icon={BsBricks} title={'bricks'} path={'/'}/>
        {authToken &&
        <>
        <SideBarLink Icon={BsBricks} title={'admin products'} path={'/admin/products'}/>
        <SideBarLink Icon={MdAdminPanelSettings} title={'add product'} path={'/admin/add-product'}/>
        <SideBarLink Icon={MdAdminPanelSettings} title={'add banner image'} path={'/admin/add-banner'}/>
        </>
      }
    </div>
  )
}

export default SideBarLinks