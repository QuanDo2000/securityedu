import Head from 'next/head';
import ExpandableCard from '../components/ExpandableCard';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const faqList = [
  {
    title: 'Question #1',
    content: 'Answer #1',
  },
  {
    title: 'Question #2',
    content: 'Answer #2',
  },
  {
    title: 'Question #3',
    content: 'Answer #3',
  },
  {
    title: 'Question #4',
    content: 'Answer #4',
  },
  {
    title: 'Question #5',
    content: 'Answer #5',
  },
];

const FAQ = () => {
  return (
    <Layout>
      <Head>
        <title>SecurityEdu FAQ</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingXl}>SecurityEdu FAQ</h1>
        {faqList.map((card, index) => (
          <ExpandableCard
            key={index}
            title={card.title}
            content={card.content}
            cardSx={{ mb: '1rem' }}
          />
        ))}
      </div>
    </Layout>
  );
};

export default FAQ;
