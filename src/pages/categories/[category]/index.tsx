import HeadComponent from '@/components/Head';
import Loader from '@/components/Loader/Loader';
import MainLayout from '@/layout/main';
import {
  getCategories,
  getCategoriesByName,
} from '@/lib/prismaFunctions/categories';
import { createMeta } from '@/lib/prismaFunctions/meta';
import globalState from '@/store/globalStore';
import { NextPageContext } from 'next';
import { ReactElement, useEffect } from 'react';

function CategoryPage({ data, cat, meta }: any) {
  const { loading } = globalState();
  useEffect(() => {
    globalState.setState({ categories: data });
    globalState.setState({ loading: false });
  }, [data]);

  return (
    <>
      <HeadComponent meta={JSON.parse(meta)} />
      <div className="">{loading ? <Loader /> : JSON.stringify(cat)}</div>
    </>
  );
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const {
    query: { category },
  } = ctx;

  const data: any = await getCategories();
  const cat = await getCategoriesByName(category as string);

  const metaData = {
    title: cat!.name,
    name: cat!.name,
    content: 'Some random content here!',
  };

  const meta = await createMeta(metaData);

  return {
    props: {
      data: JSON.stringify(data),
      cat: JSON.stringify(cat),
      meta: JSON.stringify(meta),
    },
  };
};

export default CategoryPage;
