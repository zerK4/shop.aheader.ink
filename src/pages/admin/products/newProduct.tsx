import DefaultButton from '@/components/Buttons/defaultButton';
import DropComponent from '@/components/DropDown';
import InputField from '@/components/Field/Field';
import ProductsHeader from '@/components/ProductsHeader';
import UploadInput from '@/components/UploadInput/UploadInput';
import AdminLayout from '@/layout/admin.layout';
import prisma from '@/lib/prisma';
import adminStore from '@/store/adminStore';
import { Category } from '@/types/defaultTypes';
import axios from 'axios';
import { ReactElement, useState } from 'react';

export interface AdminCategories {
  categories: Category[];
}

function NewProduct(props: AdminCategories) {
  const { categories } = props;
  const { selectedCategory, selectedSubcategory, attributes } = adminStore();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
  });

  const createNewProduct = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/products',
        data: {
          product: product,
          category: selectedCategory,
          subCat: selectedSubcategory,
          attributes: attributes,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white text-black shadow shadow-black p-2 rounded-md">
      <ProductsHeader link="/admin/products" action={''} back={true} />
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="mt-2 w-full">
          <form className="mt-4">
            {Object.entries(product).map(([key, value]) => (
              <InputField
                key={key}
                title={key}
                value={value as string}
                setValue={setProduct}
                service={product}
              />
            ))}
            <DropComponent
              categories={categories}
              id={1}
              selectWhat={'selectedCategory'}
            />
            <DropComponent
              categories={
                selectedCategory?.subCategories?.length !== 0
                  ? selectedCategory?.subCategories
                  : null
              }
              id={2}
              selectWhat={'selectedSubcategory'}
            />
            <DefaultButton action={(e: any) => createNewProduct(e)} />
          </form>
        </div>
        <div className="w-full">
          <UploadInput />
        </div>
      </div>
    </div>
  );
}

NewProduct.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps = async () => {
  let data;
  try {
    data = await prisma.category.findMany({
      include: {
        products: true,
        subCategories: true,
      },
    });
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      categories: data,
    },
  };
};

export default NewProduct;
