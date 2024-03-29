import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getPostData, PostData } from '../../lib/posts';
import Date from '../../components/date';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params && params.id) {
    const postData = await getPostData(params.id as string);
    return {
      props: {
        postData,
      },
    };
  }

  return {
    props: { error: true },
  };
};

const Post = ({ postData }: { postData: PostData }) => {
  if (postData.content) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <p>Page without content.</p>
        </article>
      </Layout>
    );
  }
};

export default Post;
