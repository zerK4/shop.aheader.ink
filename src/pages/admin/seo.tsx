import AdminLayout from '@/layout/admin.layout';
import { ReactElement } from 'react';

function Seo() {
  return <div>Products</div>;
}

Seo.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Seo;
