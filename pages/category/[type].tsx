import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllCategoryIds, getPostsData, PostsData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.type) {
    const postsData = getPostsData(params.type as string);
    return {
      props: {
        postsData,
      },
    };
  }

  return {
    props: { error: true },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
};

const PostsList = ({ postsData }: { postsData: PostsData }) => {
  const router = useRouter();
  const type = router.query.type as string;
  var typeName;
  if (type === '1') {
    typeName = 'PCs/Laptops';
  } else if (type === '2') {
    typeName = 'Mobile Devices';
  } else if (type === '3') {
    typeName = 'Enterprises';
  }

  return (
    <Layout>
      <Head>
        <title>{typeName}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{typeName}</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default PostsList;
