import MainLayout from '@/layout/main';
import prisma from '@/lib/prisma';
import globalState from '@/store/globalStore';
import { ReactElement, useEffect } from 'react';

const Home = ({ data }: any) => {
  useEffect(() => {
    globalState.setState({ categories: data });
    console.log(data);
  }, [data]);

  return (
    <>
      <p>Something in here</p>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const data = await prisma.category.findMany({
    include: {
      subCategories: true,
    },
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
