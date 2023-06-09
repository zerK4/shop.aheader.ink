import Loader from '@/components/Loader/Loader';
import ProductsHeader from '@/components/ProductsHeader';
import TableLoader from '@/components/TableLoader/tableLoader';
import AdminLayout from '@/layout/admin.layout';
import prisma from '@/lib/prisma';
import adminStore from '@/store/adminStore';
import { Product } from '@/types/defaultTypes';
import { ReactElement } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export interface AdminProducts {
  products: Product[];
}

function Products(props: AdminProducts) {
  const { products } = props;

  console.log(!products ? 'nope' : 'yupe');

  return (
    <div className="bg-white text-black shadow shadow-black p-2 rounded-md">
      <ProductsHeader
        link={'/admin/products/newProduct'}
        back={false}
        action={''}
      />
      {products?.length === 0 ? (
        <div className="p-2">No products yet, go ahead and create some!</div>
      ) : !products ? (
        <div className="w-full flex items-center justify-center h-20">
          <Loader />
        </div>
      ) : (
        <div className="">
          <table className="w-full table-fixed overflow-auto">
            <thead className="bg-white border-b border-gray-300">
              <tr>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium border-r border-gray-300">
                  Id
                </th>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium border-r border-gray-300">
                  Name
                </th>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium border-r border-gray-300">
                  Categories
                </th>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium border-r border-gray-300">
                  Stock
                </th>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium border-r border-gray-300">
                  Price
                </th>
                <th className="w-1/2 px-4 py-2 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {adminStore.getState().loading ? (
                <TableLoader />
              ) : (
                products?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? 'bg-neutral-100' : 'bg-white'
                    } hover:bg-neutral-200 ${
                      !products ? 'animate-pulse h-[5rem]' : ''
                    }`}
                  >
                    <td className="px-4 py-1 whitespace-no-wrap text-sm">
                      {item.id}
                    </td>
                    <td className="px-4 py-1 whitespace-no-wrap text-sm">
                      {item.name}
                    </td>
                    <td className="px-4 py-1 text-sm">
                      {item?.category?.name}
                    </td>
                    <td className="px-4 py-1 text-sm">{item.stock}</td>
                    <td className="px-4 py-1 text-sm">{item.price}$</td>
                    <td className="px-4 py-1 text-sm gap-2">
                      <button className="p-2 bg-neutral-200 border border-neutral-300 rounded-md m-1 hover:bg-lime-400">
                        <AiFillEdit />
                      </button>
                      <button className="p-2 bg-neutral-200 border border-neutral-300 rounded-md m-1 hover:bg-red-500">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps = async () => {
  let data;
  try {
    data = await prisma.product.findMany({
      include: {
        category: true,
        attributes: true,
        reviews: true,
        orders: true,
      },
    });
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      products: data,
    },
  };
};

export default Products;
