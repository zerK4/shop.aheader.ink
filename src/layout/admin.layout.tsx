import SidebarAdminComponent from '@/components/Admin/Sidebar/Sidebar.admin';
import SidebarRight from '@/components/Admin/Sidebar/SidebarRight.admin';

function AdminLayout({ children }: any) {
  return (
    <>
      <div className="flex bg-gray-300 overflow-hidden">
        <div className="flex">
          <SidebarAdminComponent />
        </div>
        <div className="flex w-screen">
          <main className="w-full p-2">{children}</main>
          <SidebarRight />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
