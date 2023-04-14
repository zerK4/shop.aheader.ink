import Link from 'next/link';
import { AiOutlineQq } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoPulseOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';

export const menu = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    link: '/admin/#',
  },
  {
    name: 'Products',
    icon: <AiOutlineQq />,
    link: '/admin/products',
  },
  {
    name: 'Categories',
    icon: <BiCategoryAlt />,
    link: '/admin/categories',
  },
  {
    name: 'SEO',
    icon: <IoPulseOutline />,
    link: '/admin/seo',
  },
];

function SidebarAdminComponent() {
  return (
    <div className="bg-black text-gray-300 p-2 min-h-screen flex flex-col gap-2 w-10 md:w-40 relative">
      {menu.map((item, i) => (
        <Link
          href={item.link}
          key={i}
          className="w-full md:p-2 justify-center py-2 hover:text-blue-400 border-r-2 border-transparent md:hover:border-blue-500 ease-in-out duration-300 flex items-center md:justify-between gap-4"
        >
          <button key={i} className="hidden md:flex">
            {item.name}
          </button>
          <span className="text-xl">{item.icon}</span>
        </Link>
      ))}
      <div className="absolute left-0 bottom-0 p-2 w-full hidden md:flex justify-center select-none">
        <span>&copy; Aheader Ink</span>
      </div>
    </div>
  );
}

export default SidebarAdminComponent;
