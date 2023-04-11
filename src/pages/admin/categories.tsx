import AdminLayout from '@/layout/admin.layout';
import { ReactElement } from 'react';

function Categories() {
  return <div>Products</div>;
}

Categories.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Categories;
