import { AiOutlineHeart, AiOutlineInbox, AiOutlineShop } from "react-icons/ai";
import SidebarListItem from "./SidbebarListItem";
import SideBarLinks from "./SideBarLinks";

function SideBar({ openSideBar, showSearch }) {
  const items = 0;
  // Logout func
  const logOut = () => {
    sessionStorage.removeItem("Token");
    router.push("/login");
  };
  return (
    <>
      {!openSideBar ? (
        <div className={`lg:hidden fixed top-0 left-0 w-full h-screen  bg-gray-50 transition-transform duration-700 ease-in-out -translate-x-full  ${showSearch ? 'mt-[120px]' : 'mt-[60px] '} z-50` }>
         <SideBarLinks  />
        </div>
      ) : (
        <div className={`lg:hidden fixed top-0 left-0 w-full ${showSearch ? 'h-[calc(100vh-60px)]' : 'h-[94vh]'}  bg-gray-50 transition-transform duration-700 ease-in-out -translate-x-0  z-50 ${showSearch ? 'mt-[119px]' : 'mt-[60px]'}`}>
         <SideBarLinks/>
        </div>
      )}
    </>
  );
}

export default SideBar;
