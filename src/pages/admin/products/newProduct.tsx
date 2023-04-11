import DefaultButton from '@/components/Buttons/defaultButton';
import DropComponent from '@/components/DropDown';
import InputField from '@/components/Field/Field';
import ProductsHeader from '@/components/ProductsHeader';
import UploadInput from '@/components/UploadInput/UploadInput';
import AdminLayout from '@/layout/admin.layout';
import adminStore from '@/store/adminStore';
import globalState from '@/store/globalStore';
import { Category } from '@/types/defaultTypes';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';

export interface AdminCategories {
  categories: Category[];
}

function NewProduct() {
  const { selectedCategory, selectedSubcategory } = globalState();
  const [categories, setCategories] = useState<Category[]>([]);
  console.log(categories);

  const getCategories = async () => {
    adminStore.setState({ loading: true });
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/api/categories',
      });
      setCategories(data.categories);
      adminStore.setState({ loading: false });
    } catch (err) {
      adminStore.setState({ loading: false });
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
  });
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
                value={value}
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
              categories={selectedCategory?.subCategories}
              id={2}
              selectWhat={'selectedSubcategory'}
            />
            <DefaultButton />
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

export default NewProduct;
