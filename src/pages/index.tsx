import MainLayout from '@/layout/main';
import globalState from '@/store/globalStore';
import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { getCategories } = globalState();
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <>
      <p>Something in here</p>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
