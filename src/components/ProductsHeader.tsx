import adminStore from '@/store/adminStore';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
import { MdMenuOpen } from 'react-icons/md';

export interface ProductHeader {
  link: string;
  back: boolean;
  action: any;
}

function ProductsHeader(props: ProductHeader) {
  const [attrTooltip, setAttrTooltip] = useState(false);
  const { attrSidebar } = adminStore();

  const { link, back } = props;
  return (
    <div className="flex justify-between items-center border-b pb-2 border-gray-300">
      <div className="flex items-center justify-between w-full">
        <Link href={link}>
          <button className="">
            {back ? (
              <span className="flex items-center gap-1 text-md hover:text-neutral-500 ease-in-out duration-300">
                <AiOutlineArrowLeft />
                <span>Back</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-md hover:text-neutral-500 ease-in-out duration-300">
                <AiOutlinePlus />
                Create new
              </span>
            )}
          </button>
        </Link>
        {back && (
          <button
            onMouseOver={() => setAttrTooltip(true)}
            onMouseOut={() => setAttrTooltip(false)}
            onClick={() => adminStore.setState({ attrSidebar: !attrSidebar })}
            className="relative"
          >
            <MdMenuOpen className="text-2xl" />
            <div
              role="tooltip"
              className={`${
                attrTooltip ? 'flex opacity-100' : 'hidden'
              } z-10 right-[100%] p-2 absolute inline-block text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip `}
            >
              Attributes
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductsHeader;
