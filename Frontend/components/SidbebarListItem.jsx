import { useRouter } from "next/router";

function SidebarListItem({ Icon, title }) {
  const router = useRouter();
  // Logout func
  const logout = (title) => {
    if (title === "logout") {
      sessionStorage.removeItem("Token");
      router.push("/login");
    }
    return;
  };
  return (
    <div className='sidebar-items font-changa' onClick={() => logout(title)}>
      <Icon className='w-8 h-8' />
      <p>{title}</p>
    </div>
  );
}

export default SidebarListItem;
