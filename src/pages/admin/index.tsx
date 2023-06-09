import AdminLayout from '@/layout/admin.layout';
import { ReactElement } from 'react';

function Admin() {
  return <div>Admin</div>;
}

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
