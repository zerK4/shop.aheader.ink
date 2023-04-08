import { Meta } from '@/types/defaultTypes';
import Head from 'next/head';

function HeadComponent(props: Meta) {
  const {
    meta: { title, content, name, id },
  } = props;

  // TODO: More fields in meta for SEO and dynamic extensions!

  return (
    <>
      <Head key={id}>
        <title>{title}</title>
        <meta name={name} content={content} />
      </Head>
    </>
  );
}

export default HeadComponent;
