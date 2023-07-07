import Link from "next/link"
import {  useRecoilState } from "recoil"
import { navState } from "../atoms/navHandler"
import {useRouter} from 'next/router'

function SideBarLink({Icon, title, path}) {
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const router = useRouter();
  const closeNav = () => {
    setOpenSideBar(false)
    router.push(path)
  }
  return (
   <div  onClick={closeNav}>
             <div className='text-lg'>
        <div className=' flex items-center space-x-3'>
        <Icon className='w-6 h-6 ' />
            <p className='py-2 '>{title}</p>
        </div>
        <hr className='h-[0px] w-full mt-4 mb-2 bg-gray-500 '/>
        </div>
   </div>
  )
}

export default SideBarLink