import HeadComponent from '@/components/Head';
import MainLayout from '@/layout/main';
import {
  getCategories,
  getCategoriesByName,
} from '@/lib/prismaFunctions/categories';
import { createMeta } from '@/lib/prismaFunctions/meta';
import globalState from '@/store/globalStore';
import { NextPageContext } from 'next';
import { ReactElement, useEffect } from 'react';

function CategoryPage({ data, meta }: any) {
  useEffect(() => {
    globalState.setState({ categories: data });
    console.log(JSON.parse(meta), 'hit');
  }, [data]);

  return (
    <>
      <HeadComponent meta={JSON.parse(meta)} />
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
      data: data,
      cat: JSON.stringify(cat),
      meta: JSON.stringify(meta),
    },
  };
};

export default CategoryPage;
