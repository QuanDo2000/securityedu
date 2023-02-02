import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'ID', headerName: 'ID', width: 90 },
  { field: 'DocumentTitle', headerName: 'Title', width: 240 },
  {
    field: 'CurrentReleaseDate',
    headerName: 'Last Updated',
    width: 180,
  },
  {
    field: 'InitialReleaseDate',
    headerName: 'Initial Release Date',
    width: 180,
  },
  {
    field: 'CvrfUrl',
    headerName: 'Link',
    width: 20,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value) {
        return (
          <a target="_blank" href={params.value} rel="noreferrer">
            Link
          </a>
        );
      }
    },
  },
];

export const getServerSideProps = async () => {
  const res = await fetch('https://api.msrc.microsoft.com/cvrf/v2.0/updates');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const MsUpdate = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <Head>
        <title>Microsoft Security Update</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Microsoft Security Updates</h1>
        <div style={{ height: '40rem' }}>
          <DataGrid
            rows={data.value.reverse()}
            columns={columns}
            pageSize={20}
            getRowId={(row) => row.ID}
          />
        </div>
      </article>
    </Layout>
  );
};

export default MsUpdate;
